"use client";
import React, { use } from "react";

const Logout = () => {
  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
    });

    if (response.ok) {
      // Handle successful logout, e.g., redirect to the login page
      window.location.href = "/admin";
    } else {
      // Handle error
      console.error("Logout failed");
    }
  };

  return <button className="p-2 border-4 border-orange rounded-md" onClick={handleLogout}>Logout</button>;
};

export default Logout;
