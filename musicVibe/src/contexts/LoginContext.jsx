import React, { createContext, useState, useContext } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('user');
  };

  // Check if user is logged in on component mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <LoginContext.Provider value={{ 
        isLoginModalOpen, 
        openLoginModal, 
        closeLoginModal,
        isLoggedIn,
        user,
        login,
        logout
      }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
