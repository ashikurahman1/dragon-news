import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from './Navbar';
import { Link } from 'react-router';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then(result => {
        alert('Register');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="w-full lg:w-11/12 mx-auto my-5">
      <Navbar />
      <div className="w-full max-w-xl mx-auto flex flex-col items-center my-10 bg-base-200 p-5 lg:p-15">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register your account
        </h2>
        <hr className="mb-6 border-gray-300 w-full" />

        <form onSubmit={handleRegister} className="space-y-6 w-full">
          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-100"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered w-full bg-gray-100"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full bg-gray-100"
              required
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-gray-100"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-primary text-white hover:bg-secondary"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600 w-full">
          Don&apos;t Have An Account?{' '}
          <Link
            to="/login"
            className="text-secondary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
