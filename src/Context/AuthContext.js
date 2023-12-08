import React, { createContext, useState, useEffect } from 'react';

import DataService from '../services/DataService';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);  
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      DataService.setAuthToken(token);
      setAuthenticated(true);
    }

    setLoading(false);
  }, [])

  async function handleLogin({username, password}) {
    /* const { data: { token }} = await DataService.login({username, password});
    localStorage.setItem('token', JSON.stringify(token));
    */

    const request = await DataService.login({username, password});

    /* if (!request) {

      console.log({request})
      return;
    } */

    setUserData(request);
    setAuthenticated(true);

    const token = 'hashAleatoria';
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('userData', JSON.stringify(request));

    DataService.setAuthToken(token);
    window.location.href = '/admin'; 
  }

  async function handleLogout({username, password}) {
    /* const { data: { token }} = await DataService.login({username, password});
    localStorage.setItem('token', JSON.stringify(token));
    */
    setUserData();
    
    setAuthenticated(false);
    localStorage.removeItem('token');

    DataService.setAuthToken(undefined);
    window.location.href = '/login'; 
  }

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout, userData }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };