import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import { APP_NAME } from "../config/constants";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please enter username and password.");
      return;
    }

    setLoading(true);
    try {
      await login(username, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MobileLayout showNav={false}>
      {/* Top Navigation Area */}
      <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
        <div className="text-primary flex size-12 shrink-0 items-center justify-center">
          <span className="material-symbols-outlined text-3xl">medical_services</span>
        </div>
        <h2 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">{APP_NAME}</h2>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 py-8">
        {/* Branding/Hero Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <span className="material-symbols-outlined text-primary text-5xl">local_pharmacy</span>
          </div>
          <h2 className="text-[#111518] dark:text-white tracking-light text-[28px] font-bold leading-tight text-center pb-2">Welcome Back</h2>
          <p className="text-[#637c88] dark:text-gray-400 text-base font-normal leading-normal text-center">Login to manage your pharmacy inventory and sales</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div className="flex flex-col w-full">
            <label className="flex flex-col w-full">
              <p className="text-[#111518] dark:text-gray-200 text-base font-medium leading-normal pb-2">Username</p>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#637c88]">person</span>
                <input
                  className="flex w-full rounded-lg text-[#111518] dark:text-white border border-[#dce2e5] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-1 focus:ring-primary h-14 placeholder:text-[#637c88] pl-12 pr-4 text-base font-normal leading-normal"
                  placeholder="Enter your username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </label>
          </div>

          {/* Password Field */}
          <div className="flex flex-col w-full">
            <label className="flex flex-col w-full">
              <p className="text-[#111518] dark:text-gray-200 text-base font-medium leading-normal pb-2">Password</p>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#637c88]">lock</span>
                <input
                  className="flex w-full rounded-lg text-[#111518] dark:text-white border border-[#dce2e5] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-1 focus:ring-primary h-14 placeholder:text-[#637c88] pl-12 pr-12 text-base font-normal leading-normal"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#637c88] cursor-pointer">visibility</span>
              </div>
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 px-1 pt-1">
              <span className="material-symbols-outlined text-red-500 text-sm">error</span>
              <p className="text-red-500 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              <span>{loading ? "Logging in..." : "Log In"}</span>
              <span className="material-symbols-outlined">login</span>
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <a className="text-primary text-sm font-semibold hover:underline" href="#">Forgot Password?</a>
            <div className="flex items-center gap-2 pt-6">
              <div className="h-[1px] w-12 bg-gray-200 dark:bg-gray-700"></div>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Secured Access</span>
              <div className="h-[1px] w-12 bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        </form>
      </div>

      {/* App Footer */}
      <div className="p-6 text-center">
        <p className="text-[#637c88] text-xs">© 2024 {APP_NAME}. All rights reserved.</p>
        <div className="mt-4 mx-auto w-32 h-1 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
      </div>
    </MobileLayout>
  );
};

export default Login;
