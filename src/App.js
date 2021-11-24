import React from 'react';
import RightSideBar from "./pages/RightSideBar";
import Dashboard from "./pages/Dashbord";
import './asset/css/App.css'

function App() {

  return (
      <div className={'container'}>
          <div className={'boxRightSideBar'}>
              <RightSideBar/>
          </div>
          <div className={'boxDashboard'}>
              <div className={'navBar'}>
                  <p style={{color:'white'}}>داشبورد</p>
              </div>
              <Dashboard/>
          </div>
      </div>
  );
}

export default App;
