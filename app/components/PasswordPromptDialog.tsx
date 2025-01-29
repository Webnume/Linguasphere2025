"use client";

import React, { useState } from "react";

const PasswordPromptDialog = ({ onSubmit }: any) => {
  const [password, setPassword] = useState("");
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api", {
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    if (response.status !== 200) {
      setPasswordIncorrect(true);
      setLoading(false);
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="password-prompt-dialog">
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="p-2 m-4 border-4 border-green rounded-md"  type="submit" disabled={loading}>
          Submit
        </button>
        {passwordIncorrect && <p>Password is incorrect</p>}
      </form>
    </div>
  );
};

export default PasswordPromptDialog;
