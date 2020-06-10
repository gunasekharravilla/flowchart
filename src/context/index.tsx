import React, {useReducer} from 'react';
import sidebarLeftReducer, {defaultSidebarLeft} from './reducer/sidebarLeft/index';
import flowchartReducer from './reducer/center/index';
import {initState} from './reducer/center/defaultData';

const context = React.createContext<Partial<ContextProps>>({});

const Provider = (props: JSX.ElementChildrenAttribute) => {
  const [slState, slDispatch] = useReducer(sidebarLeftReducer, defaultSidebarLeft);
  const [flowchartState, flowchartDispatch] = useReducer(flowchartReducer, initState);
  const combined: ContextProps = {
    sidebarLeft: {
      state: slState,
      dispatch: slDispatch,
    },
    flowchart: {
      state: flowchartState,
      dispatch: flowchartDispatch,
    },
  };
  return <context.Provider value={combined}>{props.children}</context.Provider>;
};
export {context};
export default Provider;
