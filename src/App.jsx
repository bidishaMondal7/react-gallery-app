import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import LoginSignupContainer from './containers/LoginSignupContainer/LoginSignupContainer';

import RootProvider from './contexts/RootProvider';

function App() {
  return (
    <RootProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginSignupContainer />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/signup" element={<LoginSignupContainer />} />
        </Routes>
      </Router>
    </RootProvider>
  );
}

export default App;
