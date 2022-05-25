import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootProvider } from './contexts/RootContext';
import { CartProvider } from './contexts/CartContext';
import Cart from './components/Cart/Cart';
import LoginSignupContainer from './containers/LoginSignupContainer/LoginSignupContainer';
import MainScreenContainer from './containers/MainScreenContainer/MainScreenContainer';
function App() {
  return (
    <RootProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginSignupContainer />} />
          <Route path="/signup" element={<LoginSignupContainer />} />
          <Route path="/home" element={<MainScreenContainer />} />
          <Route path="/profile" element={<MainScreenContainer />} />
          <Route
            path="/cart"
            element={
              <CartProvider>
                <Cart />
              </CartProvider>
            }
          />
        </Routes>
      </Router>
    </RootProvider>
  );
}

export default App;
