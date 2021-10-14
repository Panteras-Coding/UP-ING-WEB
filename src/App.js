import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Messages from './Components/Messages/Messages';
import Notifications from './Components/Notifications/Notifications';
import Upload from './Components/Upload/Upload';
import Calendar from './Components/Calendar/Calendar';
import Configuration from './Components/Configuration/Configuration';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./Components/Login/Login";
import React, {useState} from 'react';
function App() {
  const [isLoggedIn, setLogState] = useState(false);
  if (isLoggedIn === true)
  {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/messages" component={Messages}/>
          <Route path="/notifications" component={Notifications}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/configuration" component={Configuration}/>
        </Switch>
      </div>
    </Router>
  );
}
else{
    return (
        <Router>
            <div>
                <Login changeLog={() => setLogState(true)}/>
            </div>
        </Router>
    );
}
}

export default App;
