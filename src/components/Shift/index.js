import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { OnShiftChange } from '../../core/Actions';

export const Shift = (props) => {
  const state = useSelector((state) => state.shiftState);
  const dispatch = useDispatch();

  const onChange = (evt) => {
    dispatch(OnShiftChange(evt.target.value));
  };

  return (
    <Wrapper>
      <Select
        autoWidth={true}
        onChange={onChange}
        value={state.value}
        displayEmpty>
        <MenuItem value="" disabled>Enter shift amount</MenuItem>
        {Array(26).fill().map((_, i) =>
          (
            <MenuItem value={i + 1}>{i + 1}</MenuItem>
          )
        )}
      </Select>
    </Wrapper>
  );
};

export default Shift;

const Wrapper = styled.div`
  margin: 50px;
  text-align: center;
`;
