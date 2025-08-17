import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const loadedUsers = useLoaderData();
  const { name, email } = loadedUsers;

  const updateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch(`http://localhost:3000/users/${loadedUsers._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
  })
  .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert('User updated successfully!');
          form.reset();
        }
    })
}


  return (
    <div>
      <h2 className="text-center my-6 text-3xl font-medium">
        Update Info of <i className="font-bold text-indigo-500">{name}</i>
      </h2>

      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={updateUser} className="space-y-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            
            type="submit"
            className="bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer focus:outline-none focus:shadow-outline text-center block w-full hover:bg-blue-800 transition duration-200"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
