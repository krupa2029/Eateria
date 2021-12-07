import React, { Fragment } from "react";
import ProfileIcon from "../UserProfile/ProfileIcon";
import classes from "./NavBar.module.css";
import NavCartButton from "./NavCartButton";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/"><div className={classes.logo}>Eateria</div></Link>
        <nav>
          <ul>
            <li>
              <NavCartButton onClick={props.onShowCart} />
            </li>
            <li>
              <ProfileIcon />
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavBar;
