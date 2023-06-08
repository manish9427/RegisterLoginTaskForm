import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage({ onLogin, onSwitchToRegister }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here

    if (mobile && password) {
      onLogin(mobile, password);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <button type="submit" className="login-button">
        Login
      </button>
      <div className="register-text">
        Don't have an account?{" "}
        <span className="register-link" onClick={onSwitchToRegister}>
          Register here
        </span>
      </div>
    </form>
  );
}

export default LoginPage;
