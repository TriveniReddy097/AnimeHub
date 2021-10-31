import {appStateActions} from 'actionTypes';

export const setValue = (field, value) => (dispatch) => {
  try {
    dispatch({
      type: appStateActions.SET_VALUE.SUCCESS,
      payload: {field, value},
    });
  } catch (error) {
    console.log(error);
  }
};
