'use client';

import { createContext, useState } from "react";

type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
  initialUser: User | null;
};

export const UserContext = createContext({} as UserContextType);

const UserContextProvider = ({ children, initialUser }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;