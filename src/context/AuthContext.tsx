import { createContext, useContext, useState } from "react";
import { login as loginService } from "../api/auth.service";

interface AuthContextType {
  isAuth: boolean;
  login: (u: string, p: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  const login = async (username: string, password: string) => {
    const res = await loginService(username, password);
    localStorage.setItem("token", res.token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
