import React from "react";
import { useNavigate } from "react-router-dom";

const NewVideoPage = () => {
  const navigate = useNavigate();

  const createNewVideoChat = () => {
    navigate("/new-chat");
  };

  return <div>{createNewVideoChat}</div>;
};

export default NewVideoPage;
