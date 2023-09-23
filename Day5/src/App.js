import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import './assets/css/App.css';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import './assets/css/Dashboard.css';
import Orders from './components/Orders';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Menu from './components/Menu';
import Deserts from './components/Deserts';
import { UserProvider } from './components/Context/UserContext';
import './assets/css/Signup.css';

export default function RouteApp(){
    return(
      <div className='App'> 
      <UserProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/sign" element={<Signup/>}></Route>
                <Route path="/dash" element={<Dashboard/>}></Route>
                <Route path="/order" element={<Orders/>}></Route>
                <Route path='/menu' element={<Menu/>}></Route>
                <Route path='/desert' element={<Deserts/>}></Route>
            </Routes>
        </Router>
      </UserProvider>
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);
