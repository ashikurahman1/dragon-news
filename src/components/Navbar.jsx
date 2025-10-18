import { Link, NavLink, useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { User2Icon } from 'lucide-react';

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    userLogout()
      .then(result => {
        navigate('/');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email} </div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User Icon"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <User2Icon />
        )}

        {user ? (
          <Link
            onClick={handleLogout}
            to="/"
            className="btn btn-secondary px-10"
          >
            Logout
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
