import React from 'react';
import css from '../styles/styles.module.css';
import logoText from '../images/Logo_text.png';


const Navbar = () => {

  return (
    <div className={css.navbar}>
      <img src={logoText} alt="" className={css.logo} />
      <div className={`${css.btn} ${css.login}`}>Login</div>
      <div className={`${css.btn} ${css.signUp}`}>SIGN UP</div>
    </div>
  );
}

export default Navbar;