import React, {useContext} from 'react';

import SidebarTop from './top';
import SidebarBottom from './bottom'
import './index.css';

const SidebarLeft = () => {
  return (
    <div className="sidebar-left">
      <SidebarTop/>
      <SidebarBottom/>
    </div>
  );
};

export default SidebarLeft;
