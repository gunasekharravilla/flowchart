import * as actionTypes from './types';


export const initBlockDrop = (isShow:boolean): ActionSidebar => ({
    type: actionTypes.TOGGLE_SIDEBAR_LEFT,
    data: {
        isShow,
    }
});