import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import { LoginPage, HomePage } from "./YourComponents"; // Import your components

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;