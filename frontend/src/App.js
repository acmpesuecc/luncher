import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/home'
import Canteens from './pages/canteens'
import MyOrders from './pages/myorders'
import Cart from './pages/cart';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/canteens' component={Canteens} />
        <Route path='/myorders' component={MyOrders} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
      

    </>
  );
}

export default App;
