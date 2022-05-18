import React, { useState } from 'react';

export default function RootProvider(props) {
  const RootContext = React.createContext();

  /*
  Setting user as a Root Provider because every Component would need user information through out the application.
  */
  const [user, setUser] = useState(null);

  return <RootContext.Provider value={{ user, setUser }}>{props.children}</RootContext.Provider>;
}
