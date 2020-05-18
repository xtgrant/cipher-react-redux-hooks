import c from '../constants';
import { decrypt, parseStr } from '../../utils/cipher';

const initialState = {
  value: '',
};

const PlainTextReducer = (state = initialState, action) => {
  switch(action.type) {
  case c.PLAINTEXT_UPDATE: {
    const str = parseStr(action.str);
    return {
      ...state,
      value: str,
    };
  }
  case c.PLAINTEXT_DECRYPT: {
    const str = parseStr(action.str);
    return {
      ...state,
      value: decrypt(str, action.shiftValue),
    };
  }
  default:
    return state;
  }
};

export default PlainTextReducer;
