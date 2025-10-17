import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login with</h2>
      <div className="space-y-3">
        <button className="btn btn-outline btn-secondary w-full">
          <span>
            <FcGoogle size={24} />
          </span>{' '}
          Login with Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <span>
            <FaGithub size={24} />{' '}
          </span>{' '}
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
