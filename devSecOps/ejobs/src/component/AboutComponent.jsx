function AboutComponent({ logo, title, content }) {
  return (
    <div className="border-2 hover:scale-105 border-slate-300 bg-white py-6 px-4 rounded-lg shadow-lg text-center max-w-sm mx-auto transition-all duration-500">
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 border-2 border-slate-300 rounded-full text-orange-500 text-3xl">
          {logo}
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2 text-slate-800">{title}</h2>
      <p className="text-slate-600">{content}</p>
    </div>
  );
}

export default AboutComponent;

// ---------version 2-------------
// function AboutComponent({ logo, title, content }) {
//   return (
//     <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-sm transition-transform transform hover:scale-105 hover:shadow-2xl">
//       <div className="flex items-center justify-center mb-4">
//         <div className="bg-gray-100 p-4 rounded-full">
//           {logo}
//         </div>
//       </div>
//       <h2 className="text-2xl font-semibold mb-3 text-gray-800">
//         {title}
//       </h2>
//       <p className="text-gray-600">
//         {content}
//       </p>
//     </div>
//   );
// }

// export default AboutComponent;
