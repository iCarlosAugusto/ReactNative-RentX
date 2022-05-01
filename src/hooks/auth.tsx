import React, { createContext, useState, useContext, ReactNode } from "react";
import api from "../services/api";

interface User {
  id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthContextProps {
  signIn: ({ email, password }: SignInProps) => Promise<void>;
  user: User;
}

interface SignInProps {
  email: string;
  password: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const authContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState);

  async function signIn({ email, password }: SignInProps) {
    try {
      console.log(data);
      const response = await api.post("/sessions", { email, password });

      const { token, user } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token, user });
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <authContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  const context = useContext(authContext);
  return context;
}

export { AuthProvider, useAuth };
