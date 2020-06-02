import React, {useReducer} from 'react';
import sidebarLeftReducer, {defaultSidebarLeft} from './reducer/sidebarLeft/index';

const context = React.createContext<Partial<ContextProps>>({});

const Provider = (props: JSX.ElementChildrenAttribute) => {
  const [slState, slDispatch] = useReducer(sidebarLeftReducer, defaultSidebarLeft);
  const combined: ContextProps = {
    sidebarLeft: {
      state: slState,
      dispatch: slDispatch,
    },
  };
  return <context.Provider value={combined}>{props.children}</context.Provider>;
};
export {context}
export default Provider;
