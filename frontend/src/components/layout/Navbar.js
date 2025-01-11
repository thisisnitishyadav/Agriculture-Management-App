import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-green-500 text-white p-4">
  <div className="container mx-auto flex justify-between">
    <h1 className="text-xl font-bold">Smart Agriculture App</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/dashboard" className="hover:underline">
        Dashboard
      </Link>
    </div>
  </div>
</nav>
);

export default Navbar;
