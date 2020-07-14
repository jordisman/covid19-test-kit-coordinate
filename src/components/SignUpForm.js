import React from 'react';
import css from '../styles/styles.module.css';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facility: '',
      address: '',
      city: '',
      state: '',
      zip: 0,
      number: 0
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className={css.formContainer}>
        <form>
          <label>Facility Name</label>
          <input
            type="text"
            name="facility"
            placeholder="Kaiser Permanente"
            autoComplete="off"
            onChange={this.handleInput}
          />
          <p>Address</p>
          <label>Street Address</label>
          <input
            type="text"
            name="address"
            placeholder="1234 Street Name"
            autoComplete="off"
            onChange={this.handleInput}
          />
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="San Francisco"
            autoComplete="off"
            onChange={this.handleInput}
          />
          <label>State/Province</label>
          <input
            type="text"
            name="state"
            placeholder="State/Province"
            autoComplete="off"
            onChange={this.handleInput}
          />
          <label>ZipCode</label>
          <input
            type="number"
            name="zip"
            placeholder="94123"
            autoComplete="off"
            onChange={this.handleInput}
          />
          <label>Contact Number</label>
          <input
            type="number"
            name="number"
            placeholder="(415) 123-4321"
            autoComplete="off"
            onChange={this.handleInput}
          />

        </form>


      </div>
    )
  }
}

export default SignUpForm;