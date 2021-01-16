import React, {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {AuthConsumer} from '../../providers/AuthProvider';

import { Right, Left, Wrap, Img, NavLink } from '../../styles/NavbarStyles';
// import '../../styles/Navbar.css'

import Logo from '../../images/logo.png';


const Navbar = (props) => {

  // useEffect(() => {
    
  // }, [props.auth])


  // const navAuth = () => {
  //   const {user, handleLogout} = props.auth;
  //   if (user) {
  //     return (
  //     // <div>Hello {user.firstName}!
      
  //     // </div>
  //     )
  //   } else {
  //     return (
        
  //     )
  //   } 
  // }

// if statement makes logo take you to home or profile depending on login status
const {handleLogout} = props.auth;
if ( props.auth.user === null ) {
  return (
    <Wrap>
        <Left>
          <NavLink to='/'>
            <Img src={Logo} alt='logo' />
          </NavLink>
        </Left>
        <Right>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='About'>About</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/register'>Register</NavLink>
      </Right>
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
        <Right>
          
          <NavLink to='/profile'>Profile</NavLink>
        <NavLink onClick={ () => handleLogout(props.history)} to='/'>Log Out</NavLink>
        </Right>
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

