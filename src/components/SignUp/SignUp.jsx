import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const {createUser}=useContext(AuthContext)

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;


    setError('');
    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    } 
    createUser(email,password) 
    .then(result =>{
      const loggedUSer = result.user;
      console.log(loggedUSer);
    })
    .catch(error =>{
      console.log(error);
      setError(error.message);

    })
    
    // else {
    //   setError("");
    // }
  };

  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">SignUp </h2>
        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" required />
          </div>
          <input type="submit" className="btn-submit" value="SignUp" />
          <p>
            <small>
              Already have an account? <Link to="/login">LogIn</Link>
            </small>
          </p>
          {error && <p className="text-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
