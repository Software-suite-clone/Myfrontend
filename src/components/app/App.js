import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import Notfound from "../nomatch/Notfound";
import "../app/App.css";

import Logout from "../logout/Logout";
import Createclass from "../classc/Createclass";
import OAuth2Redirect from "../oauth/OAuth2Redirect";



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
        
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/add" element={<Createclass/>} />
            <Route path="/oauth2/redirect" element={<OAuth2Redirect/>}/>
          <Route path="*" element={<Notfound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
