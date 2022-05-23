import React, { createContext } from 'react';
import Login from '../components/Login/Login';

export const LoginContext = createContext();
export const DetailsProvider = () => {
  //   const [userEmail, setUserEmail] = useState('');
  //   console.log(userEmail, 'context');
  //   const [userPassword, setUserPassword] = useState('');

  return (
    <LoginContext.Provider value={'tests'}>
      <Login />
    </LoginContext.Provider>
  );
};
