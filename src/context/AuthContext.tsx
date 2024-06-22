import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

// Define types for the context values
interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  login: () => void;
  logout: () => void;
  notification: NotificationType;
  setNotification: Dispatch<SetStateAction<NotificationType>>;
  updateSavedJob: ({ jobId }: { jobId: string }) => void;
  savedJob: string[];
  appliedJob: string[];
  addAppliedJob: ({ jobId }: { jobId: string }) => void
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
  const [savedJob, setSavedJob] = useState<string[]>([]);
  const [appliedJob, setAppliedJob] = useState<string[]>([]);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const updateSavedJob = ({ jobId }: { jobId: string }) => {
    if(savedJob.includes(jobId)) {
      setSavedJob(prevSavedJobs => prevSavedJobs.filter(id => id !== jobId));
    } else {
      setSavedJob(prevSavedJobs => [...prevSavedJobs, jobId]);
    }

  }

  const addAppliedJob = ({jobId}:{ jobId: string }) => {
    setAppliedJob(prevAppliedJobs => [...prevAppliedJobs, jobId]);
  }

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      login, 
      logout, 
      setIsLoggedIn,
      notification,
      setNotification,
      updateSavedJob,
      savedJob,
      addAppliedJob,
      appliedJob
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
