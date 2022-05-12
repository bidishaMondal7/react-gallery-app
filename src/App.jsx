import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login/Login';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import LoginSignupContainer from './containers/LoginSignupContainer/LoginSignupContainer';
import RootContext from './contexts/RootContext';

function App() {
  /*
  Setting user as a Root State because we need user information through out the application.
  Every component would need user information
  */
  const [user, setUser] = useState(null);
  return (
    <RootContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginSignupContainer />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </Router>
    </RootContext.Provider>
  );
}

export default App;
