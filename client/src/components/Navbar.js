import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>
  <div className="p-6 mb-4 shadow-md bg-grey-darker">
    <h1 className="text-white mr-6">Destibates</h1>
    <NavLink to="/options" ><p>Options</p></NavLink>
  </div>


export default Navbar;
