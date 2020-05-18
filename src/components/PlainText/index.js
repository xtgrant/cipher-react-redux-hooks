import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { OnPlainTextChange } from '../../core/Actions';

const PlainText = (props) => {
  const state = useSelector((state) => state.plainState);
  const shift = useSelector((state) => state.shiftState);

  const dispatch = useDispatch();

  const onChange = (evt) => {
    dispatch(OnPlainTextChange(evt.target.value, shift.value));
  };

  return (
    <Wrapper>
      <h2>PlainText</h2>
      <TextField
        multiline
        onChange={onChange}
        rowsMax="10"
        margin="normal"
        placeholder="Enter plaintext"
        value={state.value}
      />
    </Wrapper>
  );
}

export default PlainText;

const Wrapper = styled.div`
  width: 50%;
  display: inline-block;
  text-align: center;
`;
