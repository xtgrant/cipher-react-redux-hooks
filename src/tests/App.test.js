
import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import App from '../App';
import Shift from '../components/Shift';
import PlainText from '../components/PlainText';
import CipherText from '../components/CipherText';

configure({ adapter: new Adapter() });

it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

describe("<App />", () => {

  const root = shallow(<App />);
  it('should render Shift', () => {
    expect(root.find(Shift).text()).toEqual('<Shift />');
  });
  it('should render PlainText', () => {
    expect(root.find(PlainText).text()).toEqual('<PlainText />');
  });
  it('should render CipherText', () => {
    expect(root.find(CipherText).text()).toEqual('<CipherText />');
  });
});
