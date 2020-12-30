import './styles/App.scss'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/general/Navbar'
import Footer from './components/general/Footer'
import Detail from './components/Detail';
import Home from './components/Home';
import Category from './components/Category/index';

function App() {
  return (
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
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;