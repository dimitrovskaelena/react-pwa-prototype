import logo from './logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import Home from './Home';
import About from './About';
import Users from './Users';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
