// import logo from './logo.svg';
// import './App.css';
// import Login from './pages/Login';
// import Ambulance from './pages/Ambulance';
// import Sidebar from './components/Sidebar';

// function App() {
//   return (
//    <>
//    {/* <Sidebar/> */}
//    <Login/>
//    <Ambulance/>
//    </>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Users from './pages/User';
import Hospitals from './pages/Hospitals';
import Points from './pages/Points';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';

const App = () => {
  return (
    <Router>
      <div className="grid grid-cols-5 gap-4">
        <Sidebar />
        <div className=" col-span-4">
           {/* <Header />  */}
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/points" element={<Points />} />
              <Route path="/createuser" element={<CreateUser />} />
              <Route path="/login" element={<Login />} />  {/*is ko set krna ha k sidebar na show ho isme*/}
            </Routes> 
            {/* <Home /> */}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
