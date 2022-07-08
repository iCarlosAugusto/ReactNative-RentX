import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import api from "../services/api";
import { database } from "../database";
import { User as UserModel } from "../database/models/User";

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
  const [data, setData] = useState<User>({} as User);

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { token, user } = response.data;

      //Database
      const userCollection = database.get<UserModel>("users");

      database.write(async ()=> {
          await userCollection.create((newUser)=> {
            newUser.user_id = user.id,
            newUser.name = user.name,
            newUser.email = user.email,
            newUser.driver_license = user.driver_license,
            newUser.avatar = user.avatar,
            newUser.token = token
          });
      });
      
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ ...user, token });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    async function loadDataUser() {
      const userCollection = database.get<UserModel>("users");
      const response = await userCollection.query().fetch();

      console.log(response);
    };

    loadDataUser();
  }, []);

  return (
    <authContext.Provider value={{ signIn, user: data }}>
      {children}
    </authContext.Provider>
  );
};

function useAuth() {
  const context = useContext(authContext);
  return context;
}

export { AuthProvider, useAuth };
