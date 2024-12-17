import React, { useState } from "react";
import "../styles/SignInStyles/Signin.css";
import axios from "axios";

const SignIn = () => {
  const url = "http://localhost:8088/api/users";
const [user, setUser] = useState({ email: "", password: "" });
const handleChange = (e) => {
setUser({ ...user, [e.target.id]: e.target.value });
};
const handleSubmit = (e) => {
e.preventDefault();
axios
.post(url, user)
.then((response) => {
console.log(response.data);
// Handle response...
})
.catch((error) => {
console.error("There was an error!", error);
 
});
};

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
