import React, { createContext, useState, useContext } from 'react';


const loginContext = createContext()

export const useLogin = () => useContext(loginContext);

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  const [showUserDashboard, setShowuserDashboard] = useState(false)
  const [showAdminDashboard, setShowadminDashboard] = useState(false)
  const [adminLogin, setAdminlogin] = useState(false)

  return (
    <loginContext.Provider value={{ login, setLogin, showUserDashboard, setShowuserDashboard, showAdminDashboard, setShowadminDashboard, adminLogin, setAdminlogin }}>
      {children}
    </loginContext.Provider>
  );
};