import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../home/Home";
import Notfound from "../nomatch/Notfound";
import "../app/App.css";

import Logout from "../logout/Logout";
import Createclass from "../classc/Createclass";
import LoginPage from "../auth/LoginPage";
import RegistrationPage from "../auth/RegistrationPage";



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/profile" element={<Home />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/add" element={<Createclass/>} />
            <Route path="/register" element={<RegistrationPage/>} />

           
          <Route path="*" element={<Notfound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
