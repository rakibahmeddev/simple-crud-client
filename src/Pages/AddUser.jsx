import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success('User added successfully!');
      });
  };

  return (
    <div className="w-6xl mx-auto h-screen ">
      <div className="flex flex-col justify-center py-6">
        <h2 className="text-4xl font-bold text-center mb-6">User Creation</h2>
        {/* form start  */}
        <form onSubmit={handleSubmit}>
          <div className="w-[400px] mx-auto flex flex-col justify-center gap-4">
            <div className="w-full">
              <label className="text-black/70" htmlFor="name">
                Your Name
              </label>
              <input
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="w-full">
              <label className="text-black/70" htmlFor="name">
                Your Email
              </label>
              <input
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                type="email"
                name="email"
                required
              />
            </div>

            <input
              type="submit"
              value="Add User"
              className="mt-5 bg-indigo-600 cursor-pointer text-white h-12 w-56 mx-auto px-4 rounded active:scale-95 transition"
            />
          </div>
        </form>
        {/* form end  */}
      </div>

      <Toaster />
    </div>
  );
};

export default AddUser;
