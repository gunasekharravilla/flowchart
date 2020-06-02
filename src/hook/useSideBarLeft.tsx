import {useContext} from 'react';
import {context} from '../context';
import * as sidebarLeftAction from '../context/reducer/sidebarLeft/action';

const useSidebarLeft = () => {
  const {sidebarLeft} = useContext(context)
  
  return {
    // toggleSideBar:(isShow:boolean)=>{      
    //   sidebarLeft?.dispatch(sidebarLeftAction.toggleSideBar(isShow))
    // }
  }
}
export default useSidebarLeft