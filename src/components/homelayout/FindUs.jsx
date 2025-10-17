import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FcFactoryBreakdown } from 'react-icons/fc';

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 hover:bg-base-200 justify-start join-item">
            <span>
              <FaFacebook size={24} />
            </span>{' '}
            Facebook
          </button>
          <button className="btn bg-base-100 hover:bg-base-200 justify-start join-item">
            <span>
              <FaXTwitter size={24} />
            </span>{' '}
            Twitter
          </button>
          <button className="btn bg-base-100 hover:bg-base-200 justify-start join-item">
            <span>
              <FaInstagram size={24} />
            </span>{' '}
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
