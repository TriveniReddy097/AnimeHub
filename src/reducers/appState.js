import {appStateActions} from 'actionTypes';

const initialState = {
  counter: 0,
};

const appState = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case appStateActions.SET_VALUE.SUCCESS:
      const {field, value} = payload;
      if (field === 'counter') {
        return {
          ...state,
          counter: state.counter + value,
        };
      }
      return {
        ...state,
        [field]: value,
      };
    default:
      return state;
  }
};

export default appState;
