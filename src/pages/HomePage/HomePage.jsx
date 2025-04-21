//src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom"; 

export default function HomePage() {
  return (
    <div>
      <h1>Contact Manager Welcome Page</h1>
      <p>Welcome to your personal contact manager!</p>
      <p>
        To start managing your contacts, go to the{" "}
        <Link to="/contacts">Contacts Page</Link>.
      </p>
    </div>
  );
}
