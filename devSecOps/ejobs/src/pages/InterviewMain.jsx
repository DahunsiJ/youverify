import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';

const VideoChat = () => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const [stream, setStream] = useState(null);
  const roomId = "some-room-id"; // Replace with dynamic room ID

  useEffect(() => {
    const initiateMediaStream = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setStream(mediaStream);
        userVideo.current.srcObject = mediaStream;

        socketRef.current = io.connect('http://13.92.179.121:3002');

        socketRef.current.emit('join-room', roomId, socketRef.current.id);

        socketRef.current.on('user-connected', userId => {
          const peer = createPeer(userId, socketRef.current.id, mediaStream);
          peersRef.current.push({
            peerID: userId,
            peer,
          });
          setPeers(peers => [...peers, peer]);
        });

        socketRef.current.on('user-disconnected', userId => {
          const peerObj = peersRef.current.find(p => p.peerID === userId);
          if (peerObj) {
            peerObj.peer.destroy();
          }
          const peers = peersRef.current.filter(p => p.peerID !== userId);
          peersRef.current = peers;
          setPeers(peers);
        });

        socketRef.current.on('receiving-signal', payload => {
          const item = peersRef.current.find(p => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });

        socketRef.current.on('receiving-returned-signal', payload => {
          const peer = addPeer(payload.signal, payload.callerID, mediaStream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });
          setPeers(peers => [...peers, peer]);
        });
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };

    initiateMediaStream();
  }, []);

  function createPeer(userToSignal, callerID, mediaStream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: mediaStream,
    });

    peer.on('signal', signal => {
      socketRef.current.emit('sending-signal', { userToSignal, callerID, signal });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, mediaStream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: mediaStream,
    });

    peer.on('signal', signal => {
      socketRef.current.emit('returning-signal', { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  return (
    <div>
      <video muted ref={userVideo} autoPlay playsInline />
      {peers.map((peer, index) => {
        return <Video key={index} peer={peer} />;
      })}
    </div>
  );
};

const Video = ({ peer }) => {
  const ref = useRef();

  useEffect(() => {
    peer.on('stream', stream => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <video ref={ref} autoPlay playsInline />;
};

export default VideoChat;
