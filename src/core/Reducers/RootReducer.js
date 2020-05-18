import { combineReducers } from 'redux';
import CipherTextReducer from './ReducerCipherText';
import PlainTextReducer from './ReducerPlainText';
import ShiftReducer from './ReducerShift';

const RootReducer = combineReducers({
  cipherState: CipherTextReducer,
  plainState: PlainTextReducer,
  shiftState: ShiftReducer,
});

export default RootReducer;
