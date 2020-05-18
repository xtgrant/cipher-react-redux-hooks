import c from '../constants';
import { encrypt, parseStr } from '../../utils/cipher';

const initialState = {
  value: '',
};

const CipherTextReducer = (state = initialState, action) => {
  switch(action.type) {
  case c.CIPHERTEXT_UPDATE: {
    const str = parseStr(action.str);
    return {
      ...state,
      value: str,
    };
  }
  case c.CIPHERTEXT_ENCRYPT: {
    const str = parseStr(action.str);
    return {
      ...state,
      value: encrypt(str, action.shiftValue),
    };
  }
  default:
    return state;
  }
};

export default CipherTextReducer;
