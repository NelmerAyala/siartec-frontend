"use client";
import { createContext, useContext } from "react";
import { validateRequest } from "@/app/db/auth";


const SessionContext = createContext<ContextType>({
  session: null,
  user: null,
});

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children, value }) => {
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};