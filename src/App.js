import './App.css';
import Dashboard from './Components/Dashboard';
import Loading from './Components/Loading';
import Login from './Components/Login';
import PatiantLog from './Components/PatiantLog';
import WaitingPage from './Components/WaitingPage';
import UseFetch from './Components/useFetch';
import Header from './Components/Header';
import Archief from './Components/Archief';
import Post from './Components/Post';
import PostLogin from './Components/PostLogin'
import { BrowserRouter as Router , Routes   , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <Router>

     {/* <Login/>      */}
     {/* <Loading /> */}
     {/* <PatiantLog /> */}
     {/* <WaitingPage /> */}
     {/* <Dashboard/> */}
     {/* <UseFetch /> */}
     {/* <Header /> */}
     {/* <Archief /> */}
     {/* <Post /> */}


         <Routes  >
           <Route path="/PatiantLog" exact element={<PatiantLog/>}/>
           <Route path="/login"  exact element={<Login/>}/>
           <Route path="/register"  exact element={<Post/>}/>
           <Route path="/Dashboard" exact element={<Dashboard/>}/>
           <Route path="/Archief" exact element={<Archief/>}/>
           <Route path="/waiting" exact element={<WaitingPage/>}/>
           <Route path="/loading" exact element={<Loading/>}/>

        </Routes  >           
     </Router>
    </div>
  );
}

export default App;