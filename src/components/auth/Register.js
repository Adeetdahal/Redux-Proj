import React from 'react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center py-16">
        <div className="flex justify-evenly  ">
          <div className="flex justify-center items-center px-4">
            <FaUser size={30} />
          </div>
          <h1 className="text-4xl font-mono font-semibold">Register</h1>
        </div>
        <p className="py-6 text-2xl font-semibold">Please create an account</p>
        <form className="flex flex-col py-2" onSubmit={onSubmit}>
          <div className="">
            <input
              type="text"
              className="w-[350px] shadow appearance-none border-2 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-400 focus:shadow-outline"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="pt-3">
            <input
              type="email"
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="pt-3">
            <input
              type="password"
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="pt-3">
            <input
              type="password"
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Enter your password"
              value={confirmPassword}
              onChange={onChange}
            />
          </div>
          <div className="pt-3">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
