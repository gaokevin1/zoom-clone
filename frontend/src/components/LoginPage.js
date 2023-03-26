import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider, Descope } from "@descope/react-sdk";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div>
      <Descope
        flowId="sign-up-or-in"
        theme="light"
        onSuccess={(e) => {
          handleLogin();
        }}
        onError={(err) => {
          console.log("Error!", err);
        }}
      />
    </div>
  );
};

export default LoginPage;
