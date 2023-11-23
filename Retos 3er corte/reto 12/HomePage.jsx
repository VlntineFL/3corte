import React from "react";
import { useUser } from "./UserContext";

const HomePage = () => {
  const { user } = useUser();

  return (
    <>
      <div>Welcome, {user.name}!</div>
    </>
  );
};

export default HomePage;