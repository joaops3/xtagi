import { createContext, useEffect, useState } from "react";
import {
  api,
  getUserLocalStore,
  loginRequest,
  setUserLocalStore,
} from "../hooks/Api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = getUserLocalStore();
    if (user) {
      setUser(user);
    }
  }, []);

  async function signin(email, password) {
    const response = await loginRequest(email, password);
    const token = response.data.token;
    const payload = { token: token, email };
    setUser(payload);
    setUserLocalStore(payload);
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  async function logout() {
    setUser(null);
    setUserLocalStore(null);
    api.defaults.headers.authorization = null;
  }

  return (
    <AuthContext.Provider value={{ user, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
