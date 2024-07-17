export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';
export const SET_ROLE = 'SET_ROLE';

export const setSelectedTab = (tab) => ({
  type: SET_SELECTED_TAB,
  payload: tab,
});

export const setRole = (role) => ({
  type: SET_ROLE,
  payload: role,
});
