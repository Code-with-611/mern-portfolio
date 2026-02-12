import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded w-80">
        <h2 className="text-xl mb-4">Admin Login</h2>
        <input
          placeholder="Username"
          className="w-full p-2 mb-2 bg-gray-800"
          onChange={e => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 bg-gray-800"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button onClick={login} className="w-full bg-blue-600 p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}