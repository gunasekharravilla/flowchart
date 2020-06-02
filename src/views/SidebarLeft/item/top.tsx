import React, { useContext } from 'react'
import DragBlock from '../../../components/BlockCenter';
import {context} from '../../../context';

const SidebarItemTop = () => {
  const {sidebarLeft} = useContext(context);
  const stateSidebar = sidebarLeft?.state;  
  
  return (
    <div className="wrapped-sidebbar-item-Top">
      <DragBlock data={JSON.stringify(stateSidebar)} border="1px solid gray" draggable width="100px" height="50px" text="item-block"/>
    </div>
  )
}

export default SidebarItemTop