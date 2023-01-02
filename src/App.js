import './App.css';
import Products from './pages/products/products';
import {Route, Routes} from 'react-router-dom'
import Cart from './pages/cart/cart';
import Product from './pages/product/product';
import LeftComponents from './components/navigation/leftcomponents';
import Home from './pages/homepage/home/home';
import About from './pages/homepage/about/about';
import Contact from './pages/homepage/contact/contact';

function App() {
  /*const [cart, setCart] = useState([])
  console.log(cart)
  
  /*return (
    <div>
      <LeftComponents />
      <Switch>
      <StoreContext>
        <Route path='/cart'>
        <Cart />
        </Route>
        <Route path='/product/:id'>
        <Product />
        </Route>
      </StoreContext>
      
      <Route path='/products'>
        <Products />
      </Route>
      </Switch>
    </div>
    

  );*/

  // cái này ban đầu e nháp với chưa gắn routes vào nên e wrap thủ công như này
  return (
    <div>
      <LeftComponents />
      <Routes>
      <Route exact path='/' element = {<Home />}>
      </Route>
      <Route exact path='/home' element = {<Home />}>
      </Route>
      <Route exact path='/about' element = {<About />}>
      </Route>
      <Route exact path='/contact' element = {<Contact />}>
      </Route>
      <Route exact path="/cart" element = {<Cart />}>
      </Route>
      <Route exact path="/product/:id" element = {<Product/>}>
      </Route>
      <Route exact path='/products' element = {<Products />}>
      </Route>
      </Routes>
    </div>
      
  )
}

export default App;
