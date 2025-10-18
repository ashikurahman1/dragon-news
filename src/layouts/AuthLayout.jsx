import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-full lg:w-11/12 mx-auto p-4">
        <Header />
        <Navbar />
      </header>
      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
