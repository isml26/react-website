import {BrowserRouter as  Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Pricing from "./components/Pricing";
import Products from "./components/pages/Products/Products"

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component = {Home}/>
      <Route path="/services" exact component = {Pricing}/>
      <Route path="/products" exact component = {Products}/>
    </Switch>
    <Footer></Footer>
    </Router>
  );
}

export default App;
