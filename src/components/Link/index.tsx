import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles";

const NavLink = ({
  to,
  children
}:{
  to: string,
  children: React.ReactNode,
}) => (
  <Link to={to} className={styles.link}>
    {children}
  </Link>
);

export default NavLink;