import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please Enter Your Name");
      return;
    }
    const nameStore = localStorage.setItem("name", name);
    window.location.reload();
    // }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <input
          type="text"
          placeholder="Enter your name"
          className="h-12 w-full border mb-4  p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white h-12">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
