import React from 'react';
import Logo from '../assets/logo.png';
import { format } from 'date-fns';
const Header = () => {
  return (
    <div className="flex flex-col items-center gap-3 justify-center my-5">
      <img className="w-[400px]" src={Logo} alt="Logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold">
        {format(new Date(), `EEEE, MMMM dd , yyyy`)}
      </p>
    </div>
  );
};

export default Header;
