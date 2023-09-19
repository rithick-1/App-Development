import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import './assets/css/Login.css';
import './assets/css/App.css';
import Signup from './components/Signup';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

export default function RouteApp(){
    return(
      <div className='App'> 

        <Router>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/sign" element={<Signup/>}></Route>
            </Routes>
        </Router>
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);
