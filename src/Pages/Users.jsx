import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../components/User';
import toast from 'react-hot-toast';

const Users = () => {
    const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success('✅ User deleted successfully!');
          setUsers(users.filter((user) => user._id !== id));
        }
      });
  };

  const handleEdit = (id) => {
    console.log(`Edit user with ID: ${id}`);
  }
 

  return (
    <div className='w-full max-w-6xl mx-auto p-6'>
      <h2 className='text-center text-3xl font-bold mt-6'>All Users: {users.length}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {users.map((user) => <User key={user._id} user={user} handleDelete={handleDelete} handleEdit={handleEdit}></User>)}
      </div>
    </div>
  );
};

export default Users;
