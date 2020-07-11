import React from 'react';
import Illustration01 from '../images/Illustration01.png';
import miniForm from '../images/miniForm.png';
import css from '../styles/styles.module.css';

const LandingPage = () => (
  <div>
    <div>
      <img src={Illustration01} className={css.illustration} alt="" />

      <div className={css.textBox}>
        <p className={css.title}>Healthcare Providers</p>
        <p className={css.text}>
          Test Line Covid-19 provides an easy tool for test kit resources
          sharing and triaging between clinics, test centers, and hospitals.
        </p>
        <div className={css.signUpProvBtn}>Sign Up as Provider</div>
        <p>
          Not a Healthcare Provider? <span>Sign Up Here</span>
        </p>
      </div>

      <div className={css.textBox2}>
        <p className={css.title}>What We Do</p>
        <p>
          Times are tough, but we believe with the right kind of collaboration,
          we take one step forward to rebuilding the health of our nation.
        </p>
        <p><b>Features:</b></p>
        <p>
          - Report test-kit info via a form <br/>
          - Organize clinic/test-kit availability onto a map
        </p>
        <div className={css.signUpProvBtn}>Sign Up as Provider</div>
        <p>
          Not a Healthcare Provider? <span>Sign Up Here</span>
        </p>
      </div>

      <div>
        <img src={miniForm} className={css.miniForm} />
      </div>
    </div>
  </div>
);

export default LandingPage;