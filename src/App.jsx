import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignupContainer from './containers/LoginSignupContainer/LoginSignupContainer';
import { RootProvider } from './contexts/RootContext';
import Cart from './components/Cart/Cart';
import { CartProvider } from './contexts/CartContext';
import MainScreenContainer from './containers/MainScreenContainer/MainScreenContainer';
import { PrivateRoute } from './helpers/PrivateRoute';
function App() {
  return (
    <RootProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginSignupContainer />} />
          <Route path="/signup" element={<LoginSignupContainer />} />
          <Route exact path="/home" element={<PrivateRoute />}>
            <Route exact path="/home" element={<MainScreenContainer />} />
          </Route>
          <Route exact path="/profile" element={<PrivateRoute />}>
            <Route exact path="/profile" element={<MainScreenContainer />} />
          </Route>
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
