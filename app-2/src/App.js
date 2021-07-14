import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import User from './components/user/User';
function App() {
  return (
    <Router>
     <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/users/add" exact component={AddUser}/>
        <Route path="/users/edit/:id" exact component={EditUser}/>
        <Route path="/users/:id" exact component={User}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
