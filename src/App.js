import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Location from './pages/Location';
import Detail from './pages/Detail';
import ProductCards from './pages/ProductCards';
import Register from './pages/Register';
import Countries from './pages/Countries';
import Edit from './components/Edit';
import Create from './components/Create';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/countries" component={Countries} />
          <Route exact path="/collection/:category" component={ProductCards} />
          <Route exact path="/product/:id" component={Detail} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/create" component={Create} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
