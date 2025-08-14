import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../components/User';

const Users = () => {
    const users = useLoaderData();
  return (
    <div className='w-full max-w-6xl mx-auto p-6'>
      <h2 className='text-center text-3xl font-bold mt-6'>All Users: {users.length}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {users.map((user) => <User key={user._id} user={user}></User>)}
      </div>
    </div>
  );
};

export default Users;
