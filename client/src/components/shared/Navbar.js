import React, {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {AuthConsumer} from '../../providers/AuthProvider';

import { Right, Left, Wrap, Img, NavLink } from '../../styles/NavbarStyles';
// import '../../styles/Navbar.css'

import Logo from '../../images/logo.png';


const Navbar = (props) => {


  const navAuth = () => {
    const {user, handleLogout} = props.auth;
    if (user, props.auth.user) {
      return (
      // <div>Hello {user.firstName}!
      <Right>
        {/* <Link to='/'>Home</Link> */}
        {/* <Link to='/rooms'>Rooms</Link> */}
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink onClick={ () => handleLogout(props.history)} to='/'>Log Out</NavLink>
      </Right>
      // </div>
      )
    } else {
      return (
        <Right>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/login'>Log In</NavLink>
          <NavLink to='/register'>Register</NavLink>
        </Right>
      )
    } 
  }

// if statement makes logo take you to home or profile depending on login status

if ( props.auth.user === null ) {
  return (
    <Wrap>
        <Left>
          <NavLink to='/'>
            <Img src={Logo} alt='logo' />
          </NavLink>
        </Left>
      {navAuth()}
    </Wrap>
  )
} else {
  return (
    <Wrap>
        <Left>
          <NavLink to='/profile'>
            <Img src={Logo} alt='logo' />
          </NavLink>
        </Left>
      {navAuth()}
    </Wrap>
  )
}
}

export const ConnectedNavbar = (props) => {
  return (
    <AuthConsumer>{(auth) => <Navbar {...props} auth={auth} />}</AuthConsumer>
  );
};
export default withRouter(ConnectedNavbar);

