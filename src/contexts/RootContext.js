import React, { useEffect, useState } from 'react';
import { auth } from '../helpers/firebase';

const RootContext = React.createContext();

function RootProvider(props) {
  /*
  Setting user, theme as a Root Provider because every Component would need user information throughout the application.
  */
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState('black');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <RootContext.Provider value={{ user, setUser, theme, setTheme }}>
      {props.children}
    </RootContext.Provider>
  );
}

export { RootContext, RootProvider };
