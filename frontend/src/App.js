import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/tasks" component={TaskForm} />
          <Route path="/task-list" component={TaskList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
