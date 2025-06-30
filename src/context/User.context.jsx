import { createContext, useEffect, useState } from "react";
import { onUserAuthStatChanged } from "../utils/Firebase/firebase.utils";

export const UserContext = createContext({
  user: null,
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onUserAuthStatChanged((user) => setUser(user));
    return unsubscribe;
  }, []);
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
