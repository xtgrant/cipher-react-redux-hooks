import c from '../constants';

const initialState = {
  value: 1,
};

const ShiftReducer = (state = initialState, action) => {
  switch(action.type) {
  case c.SHIFT_UPDATE:
    return {
      ...state,
      value: parseInt(action.value),
    };
  default:
    return state;
  }
};

export default ShiftReducer;
