import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNav = () => (
  <nav>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`}
      activeClassName="active">
      Dashboard
    </NavLink>

    <NavLink exact to={`${process.env.PUBLIC_URL}/login`}
      activeClassName="active">
      Login
    </NavLink>

    <NavLink exact to={`${process.env.PUBLIC_URL}/tables`}
      activeClassName="active">
      Tables
    </NavLink>

    <NavLink exact to={`${process.env.PUBLIC_URL}/waiter`}
      activeClassName="active">
      Waiter
    </NavLink>

    <NavLink exact to={`${process.env.PUBLIC_URL}/kitchen`}
      activeClassName="active">
      Kitchen
    </NavLink>
  </nav>
);


export default PageNav;