import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import LoginSignupContainer from './containers/LoginSignupContainer/LoginSignupContainer';
import Profile from './components/Profile/Profile';
import RootProvider from './contexts/RootProvider';
// import { DetailsProvider } from './constants/detailsprovider';
function App() {
  return (
    <RootProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginSignupContainer />} />
          <Route path="/signup" element={<LoginSignupContainer />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </RootProvider>
  );
}

export default App;
