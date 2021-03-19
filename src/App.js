import './App.css';
import { Header } from './components'
import Products from './views/Products';
import Order from './views/Order';
import Orders from './views/Orders';
import { Cart, Home, MyOrders, NotFound, Payment, PlaceOrder, Product, Profile, Register, SearchResults, Shipping, Signin } from './views/';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart}/>
        <Route path="/cart/:id"
          exact render={({history, match, location}) =>  <Cart
            history={history}
            match={match}
            location={location}/>
          }/>
        <Route exact path="/myorders" component={MyOrders} />
        <Route exact path="/orders" component={Orders} />
        <Route path="/order/:id" component={Order}></Route>
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/placeorder" component={PlaceOrder} />
        <Route path="/product/:id" component={Product} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/register" component={Register} />
        <Route path="/search/name/:name?"
          component={SearchResults}
          exact
        ></Route>
        <Route exact path="/shipping" component={Shipping} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/products" component={Products} />
        <Route component={NotFound} />
      </div>
    </BrowserRouter>
  );
}

export default App;
