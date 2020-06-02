import * as actionTypes from './types';
import {deepCopy} from '../../../utils/data';

export const defaultSidebarLeft = {
  type: 'top/bottom',
  ports: {
    port1: {
      id: 'port1',
      type: 'top',
      properties: {
        custom: 'property',
      },
    },
    port2: {
      id: 'port1',
      type: 'bottom',
      properties: {
        custom: 'property',
      },
    },
  },
  properties: {
    custom: 'property',
  },
};

export default (state: StateSidebar, action: ActionSidebar) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEBAR_LEFT:
      const newPanel = deepCopy(state) as StateSidebar;
      newPanel.type = action.data.type;
      newPanel.properties.custom = action.data.properties.custom;
      newPanel.ports = action.data.ports;
      return newPanel;
    default:
      return state;
  }
};
