import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Categories from '../components/Categories';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-10">
        <aside className="col-span-full lg:col-span-3 sticky top-5 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-full lg:col-span-6">
          <Outlet></Outlet>
        </section>

        <aside className="col-span-full lg:col-span-3 sticky top-5 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
