import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Label>
        <VisuallyHidden>{label}</VisuallyHidden>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
      </Label>
      {displayedValue}
      <Chevron id="chevron-down" size={24} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  width: fit-content;
  font-size: 1rem;
  color: ${COLORS.gray700};
  background: ${COLORS.transparentGray15};

  &:focus-within {
    outline: 2px solid;
  }

  &:hover {
    color: ${COLORS.black}
  }
`;

const Label = styled.label`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const NativeSelect = styled.select`
  width: 100%;
  height: 100%;
`;

const Chevron = styled(Icon)`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  pointer-events: none;
`;

export default Select;
