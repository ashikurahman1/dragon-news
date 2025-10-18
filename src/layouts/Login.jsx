import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(result => {
        navigate('/');
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div className="w-full lg:w-11/12 mx-auto my-5">
      <Header />
      <Navbar />
      <div className="w-full max-w-xl mx-auto flex flex-col items-center my-10 bg-base-200 p-5 lg:p-15">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>
        <hr className="mb-6 border-gray-300 w-full" />

        <form onSubmit={handleLogin} className="space-y-6 w-full">
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
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600 w-full">
          Don&apos;t Have An Account?{' '}
          <Link
            to="/register"
            className="text-secondary font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
