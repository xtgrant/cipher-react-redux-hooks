import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import * as ReactReduxHooks from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Select from '@material-ui/core/Select';
import Shift from '../components/Shift';
import * as ActionHooks from '../core/Actions';

configure({ adapter: new Adapter() });

describe('<Shift />', () => {
  const initialState = {
    shiftState: {
      value: 1,
    }
  };
  const mockStore = configureMockStore([thunk]);
  const store = mockStore(initialState);
  // listen to redux hooks being called
  jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(() =>
    store.getState().shiftState
  );
  jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation((f) =>
    store.dispatch
  );

  const root = mount(
    <Provider store={store}>
      <Shift />
    </Provider>
  );
  it('should have Select with props', () => {
    expect(root.find(Select).props().value).toEqual(1);
  });
});
