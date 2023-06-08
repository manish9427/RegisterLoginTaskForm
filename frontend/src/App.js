import React, { useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginPage from "./components/LoginPage";
import TaskForm from "./components/TaskForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (name, mobile, password) => {
    // Perform registration logic here

    if (name && mobile && password) {
      // Mock registration success
      setUserData({ name, mobile, password });
      setRegistered(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Please fill in all the fields.");
    }
  };

  const handleLogin = (mobile, password) => {
    // Perform login logic here

    if (
      userData &&
      userData.mobile === mobile &&
      userData.password === password
    ) {
      setLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid mobile or password.");
    }
  };

  const handleLogout = () => {
    // Perform logout logic
    setLoggedIn(false);
  };

  const handleSwitchToLogin = () => {
    setErrorMessage("");
    setRegistered(true);
  };

  const handleSwitchToRegister = () => {
    setErrorMessage("");
    setRegistered(false);
  };

  return (
    <div className="app">
      <h1 className="heading">Task Manager</h1>
      {loggedIn ? (
        <div className="task-container">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          <TaskForm />
        </div>
      ) : (
        <div className="auth-container">
          {!registered ? (
            <RegisterForm
              onRegister={handleRegister}
              onSwitchToLogin={handleSwitchToLogin}
            />
          ) : (
            <LoginPage
              onLogin={handleLogin}
              onSwitchToRegister={handleSwitchToRegister}
            />
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      )}
      <div className="current-page-info">
        Current Page:{" "}
        {loggedIn ? "Task Page" : registered ? "Login Page" : "Register Page"}
      </div>
    </div>
  );
}

export default App;
