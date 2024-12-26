import React from 'react';
import LauncherImg from '../assets/Launcher.png';
import { Link } from 'react-router-dom';

const Launcher = () => {
  return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
      <Link to={'/password-reset'}>
        <img src={LauncherImg} alt="Launcher" className="w-auto max-w-full" />
    </Link>
    </div>
  );
};

export default Launcher;
