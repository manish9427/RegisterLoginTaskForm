import React, { useState } from "react";
import "./RegisterForm.css";

function RegisterForm({ onRegister, onSwitchToLogin }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here

    if (name && mobile && password) {
      onRegister(name, mobile, password);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter your mobile number"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" className="register-button">
        Register
      </button>
      <div className="login-text">
        Already have an account?{" "}
        <span className="login-link" onClick={onSwitchToLogin}>
          Login here
        </span>
      </div>
    </form>
  );
}

export default RegisterForm;
