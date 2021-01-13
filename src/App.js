import {useState} from 'react'
import './styles/App.scss'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/general/Navbar'
import Footer from './components/general/Footer'
import Detail from './components/Detail'
import Home from './components/Home'
import Category from './components/Category/index'
import Cart from './components/Cart/index'
import Newsletter from './components/general/Newsletter'
import StoreProvider from './store'

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:category_name">
            <Category />
          </Route>
          <Route path="/details/:id">
            <Detail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;