import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  const validate = (values) => {

  }

  return (
    <>
    <div className="bgImg"></div>
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className = "ui message success">
          Signed in successfully
        </div>
      ) : (
        console.log("Entered Details", formValues)
      )}
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className = "ui divider"></div>
        <div className = "ui form">
          <div className = "field">
            <label>Username</label>
            <input
              type = "text"
              name = "username"
              placeholder = "Choose a username"
              value={formValues.username}
              onchange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className = "field">
            <label>Email</label>
            <input
              type = "text"
              name = "email"
              placeholder = "Email"
              value = {formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className = "field">
            <label>PassWord</label>
            <input
              type = "password"
              name = "password"
              placeholder = "Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className = "fluid ui button blue">Submit</button>
        </div>
      </form>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </>
  );
}

export default App;
