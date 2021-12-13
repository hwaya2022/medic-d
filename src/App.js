// import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Loading from './Components/Loading';
import Login from './Components/Login';
import PatiantLog from './Components/PatiantLog';
import WaitingPage from './Components/WaitingPage';
// import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     {/* <Login/>      */}
     {/* <Loading /> */}
     {/* <PatiantLog /> */}
     {/* <WaitingPage /> */}
     <Dashboard/>
    </div>
  );
}

export default App;
