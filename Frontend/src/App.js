import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Announcement from './components/Announcement';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Route, Routes, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
 
function App() {
  const user = useSelector((state) => state.user.currentUser)
  console.log("u",user)
  return (
    <div>
      <Routes>
        <Route path="/" element =  {<Home />}></Route>
        <Route path="/products/:category" element={ <ProductList />}></Route>
        <Route path='/products' element ={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element= {user ? < Navigate to="/" /> : <Login />}></Route>
        <Route path="/register" element={user ? < Navigate to="/" /> : <Register />}></Route>
        <Route path='/checkout' element = {<Checkout />}></Route>
        <Route path="success" element= {<Success />}></Route>
      </Routes>
    </div>
  );
}

export default App;
