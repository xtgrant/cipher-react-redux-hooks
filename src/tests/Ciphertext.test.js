import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import * as ReactReduxHooks from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import TextField from '@material-ui/core/TextField';
import CipherText from '../components/CipherText';
import * as ActionHooks from '../core/Actions';

configure({ adapter: new Adapter() });

describe("<CipherText />", () => {
  const initialState = {
    cipherState: {
      value: 'test',
    },
    shiftValue: {
      value: 1,
    },
  };
  const mockStore = configureMockStore([thunk]);
  const store = mockStore(initialState);
  // listen to redux hooks being called
  jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(() =>
    store.getState().cipherState
  );
  jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation((f) =>
    store.dispatch
  );

  const root = mount(
    <Provider store={store}>
      <CipherText />
    </Provider>
  );
  it('should have Textfield with props', () => {
    expect(root.find(TextField).props().value).toEqual('test');
  });
});
