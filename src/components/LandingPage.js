import React from 'react';
import Illustration01 from '../images/Illustration01.png';
import css from '../styles/styles.module.css';

const LandingPage = () => (
  <div>
    <div>
      <img src={Illustration01} className={css.illustration} alt="" />

      <div className={css.textBox}>
        <h2>Healthcare Providers</h2>
        <p className={css.text}>
          Test Line Covid-19 provides an easy tool for test kit resources
          sharing and triaging between clinics, test centers, and hospitals.
        </p>

        <div className={css.signUpProvBtn}>Sign Up as Provider</div>
        <p>
          Not a Healthcare Provider? <span>Sign Up Here</span>
        </p>

      </div>
    </div>
  </div>
);

export default LandingPage;