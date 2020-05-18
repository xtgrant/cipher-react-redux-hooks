import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { OnCipherTextChange } from '../../core/Actions';

export const CipherText = (props) => {
  const state = useSelector((state) => state.cipherState);
  const shift = useSelector((state) => state.shiftState);

  const dispatch = useDispatch();

  const onChange = (evt) => {
    dispatch(OnCipherTextChange(evt.target.value, shift.value));
  };

  return (
    <Wrapper>
      <h2>CipherText</h2>
      <TextField
        multiline
        onChange={onChange}
        rowsMax="10"
        margin="normal"
        placeholder="Enter ciphertext"
        value={state.value}
      />
    </Wrapper>
  );
}

export default CipherText;

const Wrapper = styled.div`
  width: 50%;
  display: inline-block;
  text-align: center;
`;
