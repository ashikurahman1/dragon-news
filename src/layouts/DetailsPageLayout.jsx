import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import RightAside from '../components/homelayout/RightAside';
import Header from '../components/Header';
import { FaArrowLeft } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const DetailsPageLayout = () => {
  const news = useLoaderData();
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthContext);
  const handleLogout = () => {
    userLogout()
      .then(result => {
        navigate('/');
      })
      .catch(err => console.error(err));
  };
  const { title, image_url, details, category_id } = news || {};
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-10">
        <section className="main col-span-full lg:col-span-9">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Dragon News</h2>
            {user && (
              <button
                onClick={handleLogout}
                className="btn btn-primary hover:bg-secondary"
              >
                Logout
              </button>
            )}
          </div>
          <div className="space-y-4 border-2 border-base-200 p-5 rounded-xl mt-5">
            <img src={image_url} alt={title} className="w-full" />
            <h2 className="text-xl font-semibold">{title}</h2>
            <p>{details}</p>
            <button
              onClick={() => navigate(`/category/${category_id}`)}
              className="btn btn-secondary"
            >
              <span>
                <FaArrowLeft />
              </span>{' '}
              All news in this category
            </button>
          </div>
        </section>

        <aside className="col-span-full lg:col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default DetailsPageLayout;
