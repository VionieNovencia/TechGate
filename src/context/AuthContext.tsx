import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

// Define types for the context values
interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  login: () => void;
  logout: () => void;
  notification: NotificationType;
  setNotification: Dispatch<SetStateAction<NotificationType>>;
}

interface NotificationType {
  [key: string] : boolean
}

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationType>({
    '1': false,
    '2': false,
    '3': false,
    '4': false,
  });

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      login, 
      logout, 
      setIsLoggedIn,
      notification,
      setNotification,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook for easy access to the context
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
