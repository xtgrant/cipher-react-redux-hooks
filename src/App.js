import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './store';
import PlainText from './components/PlainText';
import CipherText from './components/CipherText';
import Shift from './components/Shift';
import UnstyledPaper from '@material-ui/core/Paper';

const Main = () => (
  <Provider store={store}>
    <Wrapper>
      <h1>Caesar's Cipher</h1>
      <Shift />
      <Paper elevation={10}>
        <PlainText />
        <CipherText />
      </Paper>
    </Wrapper>
  </Provider>
);

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  margin: 0 auto;
  text-align: center;
`;

const Paper = styled(UnstyledPaper)`
  margin: 50px;
  padding: 25px;
`;

export default Main;
