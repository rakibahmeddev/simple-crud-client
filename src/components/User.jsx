import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const User = ({ user, handleDelete }) => {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  // Adjust the threshold value to control the tilt effect
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };


  return (
    <div
      className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-white flex flex-col items-center justify-center m-2 p-4"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <img
        src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg"
        alt={user.name}
        className="w-38 "
      />
      <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
        {user.name}
      </h3>
      <p className="text-sm text-center  px-4 pb-6 text-gray-600 ">
        Email: {user.email}
      </p>
      <p className="text-sm text-center  px-4 pb-6 text-gray-600">
        ID: {user._id}
      </p>
      {/* buttons  */}
      <div className="flex gap-2 w-full justify-center">
        <button
          type="button"
          className="flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-green-500 hover:bg-green-500/10 hover:border-green-500/30 active:scale-95 transition"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user._id)}
          type="button"
          className="flex items-center gap-2.5 cursor-pointer border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/30 active:scale-95 transition"
        >
          Delete
        </button>
      </div>

      <Toaster />
    </div>
  );
};

export default User;
