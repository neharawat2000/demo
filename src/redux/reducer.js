import { SET_SELECTED_TAB, SET_ROLE } from './action';

const initialState = {
  selectedTab: 'Dashboard',
  childSelectedTab: 'account-settings',
  role: 'agent',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };
    case SET_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
