import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/home';
import LoginForm from './Pages/Login/Login';
import SignupForm from './Pages/Signup/Signup';
import Canteens from './Pages/canteens'
import MyOrders from './Pages/myorders'
import Cart from './Pages/cart';


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={LoginForm} />
        <Route path='/signup' exact component={SignupForm} />
        <Route path='/canteens' component={Canteens} />
        <Route path='/myorders' component={MyOrders} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
      

    </>
  );
}

export default App;
