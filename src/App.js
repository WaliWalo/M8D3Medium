import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/Home";
import NewStory from "./pages/new-story/NewStory";
import Topics from "./pages/topics/Topics";
import Read from "./pages/read/Read";
import Search from "./pages/search/Search";
import Stats from "./pages/stats";
import Stories from "./pages/stories";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
const routes = [
  { path: "/", component: Home },
  { path: "/new-story", component: NewStory },
  { path: "/topics", component: Topics },
  { path: "/read/:slug", component: Read },
  { path: "/search", component: Search },
  { path: "/stats", component: Stats },
  { path: "/stories", component: Stories },
  { path: "/register", component: Register },
  // { path: "/login", component: Login },
];

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  useEffect(() => {
    if (localStorage.getItem("bearer_token")) {
      setIsLogin(true);
    }
  }, [isLogin]);
  return (
    <Router>
      <NavBar isLogin={isLogin} handleLogin={handleLogin} />
      {routes.map(({ path, component }) => (
        <Route exact path={path} component={component} />
      ))}
      <Route
        exact
        path="/login"
        render={(props) => <Login handleLogin={handleLogin} />}
      />
    </Router>
  );
}

export default App;
