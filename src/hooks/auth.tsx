import React, { createContext, useState, useContext, ReactNode } from "react";
import api from "../services/api";

interface User {
  id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  //token: string;
};

interface AuthContextProps {
  signIn: ({email, password}: SignInProps) => Promise<void>;
  user: User;
};

interface SignInProps{
  email: string;
  password: string;
};

interface AuthProviderProps{
  children: ReactNode;
};

const authContext = createContext({} as AuthContextProps);


function AuthProvider({children}: AuthProviderProps){
  const [user, setUser] = useState<User>();

  async function signIn({email, password}: SignInProps) {
     const response = await api.post("/sessions", {email, password});
     console.log(response.data);
  };

  return (
    <authContext.Provider value={{ signIn, user }}>
      {children}
    </authContext.Provider>
  );
}

function useAuth(){
  const context = useContext(authContext);
  return context;
};

export { AuthProvider, useAuth };
