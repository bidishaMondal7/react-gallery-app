import React, { useState } from 'react';

const RootContext = React.createContext();
function RootProvider(props) {
  /*
  Setting user as a Root Provider because every Component would need user information throughout the application.
  */
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('black');

  return (
    <RootContext.Provider value={{ user, setUser, theme, setTheme }}>
      {props.children}
    </RootContext.Provider>
  );
}

export { RootContext, RootProvider };
