import logo from './logo.svg';
import './App.css';
import AdminNavbar from "./components/navbar";
import VerticalBar from './components/graphs'
import { Container, Row, Col , Card} from "react-bootstrap";
import "./assets/css/demo.css";
import Dropdown from './components/select_dropdown'
import Spinner from './components/spinner'
import VerticalDashboard from './components/vertical_dashboard'

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
//     <div className="App">

// <Spinner />

//           <AdminNavbar />
//          <Dropdown />



//     </div>


<BrowserRouter>
<Spinner />
<div className="App">
    <Switch>
    <Route exact path="/ReactAdmin">
    <AdminNavbar />
       <Dropdown />
    </Route>
    <Route path="/vertical_dashboard">
      <VerticalDashboard />
    </Route>
  </Switch>
</div>
</BrowserRouter>


  );
}

export default App;
