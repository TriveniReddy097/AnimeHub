import {masterDataActions} from 'actionTypes';

const initialState = {
  animeList: [],
  selected: null,
  loading: false,
  selectedUrl: null,
};

const appState = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case masterDataActions.SET_VALUE.SUCCESS:
      const {field, value} = payload;
      return {
        ...state,
        [field]: value,
      };
    default:
      return state;
  }
};

export default appState;
