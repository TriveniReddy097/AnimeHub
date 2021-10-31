import {combineReducers} from 'redux';
import appState from 'reducers/appState';
import masterData from 'reducers/masterData';

const rootReducer = combineReducers({
  appState,
  masterData,
});

export default rootReducer;
