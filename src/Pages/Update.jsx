import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUsers = useLoaderData();
    console.log(loadedUsers);
  return (
    <div>
      <h2 className='text-center my-6 text-3xl font-semibold'>Update  Info</h2>
    </div>
  );
};

export default Update;
