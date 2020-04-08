import React from "react";
import { Link } from "react-router-dom";

export type NavigationProps = {};

export const Navigation: React.FC<NavigationProps> = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
