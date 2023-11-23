import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, setLastVisitedPage } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({
      name: "Jonathan Lopez",
      email: email,
    });
    setLastVisitedPage("/home"); // Set the last visited page
    navigate("/home");
  };

  return (
    <>
      <div>Login Page</div>
      <form onSubmit={handleLogin}>
        {/* ... (your form inputs) */}
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;