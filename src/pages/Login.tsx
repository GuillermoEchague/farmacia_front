import { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter username and password.");
      return;
    }

    // 🔗 Aquí va tu llamada a la API
    // login(username, password)

    setError("Invalid username or password. Please try again.");
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Pharmacy Pro</h1>
      </header>

      <div className="login-card">
        <div className="icon-circle">💊</div>

        <h2>Welcome Back</h2>
        <p className="subtitle">
          Login to manage your pharmacy inventory and sales
        </p>

        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit">Log In →</button>
        </form>

        <a href="#" className="forgot">
          Forgot Password?
        </a>

        <footer className="footer">
          © 2026 Independent Pharmacy Solutions. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Login;
