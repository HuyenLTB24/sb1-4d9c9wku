import { createContext, useContext } from 'react';

interface AppContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  currentUser: string | null;
  setCurrentUser: (value: string | null) => void;
}

export const AppContext = createContext<AppContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  currentUser: null,
  setCurrentUser: () => {},
});

export const useAppContext = () => useContext(AppContext);