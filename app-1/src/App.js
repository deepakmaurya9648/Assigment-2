import './App.css';
import Nav from './components/Nav';
import Course from './components/Course';
import About from './components/About';
import Home from './components/Home';
import CourseDetail from './components/CourseDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/courses" exact component={Course}/>
          <Route path="/courses/:courseId" component={CourseDetail}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
