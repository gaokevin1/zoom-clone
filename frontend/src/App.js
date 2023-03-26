import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import NewVideoPage from "./components/NewVideoPage";
import {
  AuthProvider,
  useDescope,
  useSession,
  useUser,
} from "@descope/react-sdk";
import { Descope, SignUpOrInFlow } from "@descope/react-sdk";

const App = () => {
  const { isAuthenticated, isSessionLoading } = useSession();

  // user: user object with all the user details such as email, name etc.
  // isUserLoading: boolean - Use this for showing loading screens while objects are being loaded
  const { user, isUserLoading } = useUser();

  // logout - call logout to logout the user (deletes all session state)
  const { logout } = useDescope();

  useEffect(() => {
    return isAuthenticated;
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route path="/" exact component={<LoginPage />} />
        <Route
          path="/"
          exact
          component={() => {
            isAuthenticated && <NewVideoPage />;
          }}
        />
      </Routes>
    </Router>
  );
};

export default App;
