import React from 'react';
import classes from './NavBar.module.scss';

// type Props = {};

const NavBar = () => {
  return <div className={classes.navBarWrapper}>
    <div className={classes.navBarInner}>
      <ul>
        <li className={classes.navLink}><a href={'/'}>Sets</a></li>
        <li className={classes.navLink}><a href={'/'}>Instructions</a></li>
        <li className={classes.navLink}><a href={'/'}>Wishlist</a></li>
        <li className={classes.newBtn}><a href={'/'}>Add new</a></li>
      </ul>
    </div>
  </div>;
};

export default NavBar;
