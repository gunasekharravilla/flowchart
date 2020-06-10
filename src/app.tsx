import React from 'react';
import Provider from './context';
import SidebarLeft from './views/SidebarLeft';
import CenterArea from './views/Center'
import SidebarRight from './views/SidebarRight'
import './index.css'
const App = () => {
  return (
    <div className="wrapped-app">
      <Provider>
        <SidebarLeft />
        <CenterArea/>
        <SidebarRight/>
      </Provider>
    </div>
  );
};

export default App;
