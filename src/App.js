import './App.css';
import {BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom';
import Navbar from './Components/Navbar/ui/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer/ui/Footer';
import Details from './Components/Details/ui/Details';
import CategoriesDetails from './Components/Categories/ui/CategoriesDetails';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Login from './Components/Login/ui/Login';
import Cart from './Components/Cart/ui/Cart';

function App() {
  return (
    <Router>
      <Navbar/>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/details" component={Details}/>
        <Route path="/detail/:category" component={CategoriesDetails} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
