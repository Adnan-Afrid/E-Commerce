import './App.css';
import {BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom';
import Navbar from './Components/Navbar/ui/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer/ui/Footer';
import Details from './Components/Details/ui/Details';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/details" component={Details}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
