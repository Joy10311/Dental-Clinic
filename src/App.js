import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import Doctors from './Pages/Doctor/Doctors';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/Service/Service';
import Footer from './Shared/Footer/Footer';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Service></Service>
          </Route>
          <Route exact path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
