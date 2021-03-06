import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';

import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
        <Route exact path="/home">
            <Home></Home>
          </Route>
        <Route exact path="/about">
            <About></About>
          </Route>
        <Route exact path="/services">
            <Services></Services>
          </Route>
        <Route exact path="/contact">
            <Contact></Contact>
          </Route>
        <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
