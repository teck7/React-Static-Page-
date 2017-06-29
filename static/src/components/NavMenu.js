import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav>
      <NavLink exact to='/' activeClassName="selected">Home</NavLink>
      <NavLink to='/about' activeClassName="selected">About</NavLink>
      <NavLink to='/faq' activeClassName="selected">Faq</NavLink>
      <NavLink to='/contact' activeClassName="selected">Contact</NavLink>
  </nav>
)
