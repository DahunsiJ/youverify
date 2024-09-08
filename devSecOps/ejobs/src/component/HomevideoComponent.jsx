// ---------version 2-------------
import { useRef, useState } from 'react';
import { BiPause } from 'react-icons/bi';
import { CgPlayButton } from 'react-icons/cg';
import { MdFavorite } from 'react-icons/md';

function HomevideoComponent({ source, likes, views }) {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative transition group w-full sm:w-80 md:w-96 bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="relative">
        <video
          ref={videoRef}
          autoPlay={false}
          src={source}
          type="video/mp4"
          className="w-full h-[400px] object-cover rounded-t-xl"
        />
        {isPlaying ? (
          <BiPause
            onClick={handleVideoToggle}
            className="text-white absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        ) : (
          <CgPlayButton
            onClick={handleVideoToggle}
            className="text-white absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        )}
      </div>
      <div className="flex items-center justify-between p-4 bg-gray-900 text-white rounded-b-xl">
        <div className="flex items-center">
          <MdFavorite className="text-red-500 mr-2 w-5 h-5" />
          <span>{likes} Likes</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">{views}</span>
          <span>Views</span>
        </div>
      </div>
    </div>
  );
}

export default HomevideoComponent;
