import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Patients from './pages/Patients/Patients';
import Settings from './pages/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import './App.module.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Topbar />
        <Sidebar />
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/patients" component={Patients} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;