import React, { useState } from 'react';

const RegisterPage = () => {
  const [data, setData] = useState<{
    name: string;
    email: string;
    password: string;
    profile_pic: string;
  }>({
    name: '',
    email: '',
    password: '',
    profile_pic: '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="mt-5">
      <div className="shadow-md bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4">
        <h3>Welcome to Chat app!</h3>

        <form className="grid gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter yout name"
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              value={data.name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter yout email"
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
