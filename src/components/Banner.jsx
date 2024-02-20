import React, { useState } from 'react';

const Banner = () => {
	return (
        <div className="hero min-h-screen" style={{backgroundImage: '/s13-23-n-react-back/src/assets/banner.jpg'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Simplifica la gestión deportiva con SportPlay</h1>
      
      <button className="btn Accent">Registrarse</button>
    </div>
  </div>
</div>

    );
};

export default Banner;