import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizeAttributes = {
  small: {
    fontSize: 14,
    iconSize: 14,
    padding: 4,
    paddingLeft: 24,
    underlineHeight: 1,
  },
  large: {
    fontSize: 18,
    iconSize: 22,
    padding: 8,
    paddingLeft: 32,
    underlineHeight: 2,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = sizeAttributes[size];

  return (
    <Wrapper width={width} underlineHeight={styles.underlineHeight}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput 
        placeholder={placeholder}
        fontSize={styles.fontSize}
        padding={styles.padding}
        paddingLeft={styles.paddingLeft}
      />
      <IconWrapper id={icon} size={styles.iconSize}/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: ${props => props.width}px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${props => props.underlineHeight}px;
    background-color: ${COLORS.black};
    border-radius: 2px;
  }
`;

const TextInput = styled.input`
  width: 100%;
  border: none;
  padding: ${props => props.padding}px;
  padding-left: ${props => props.paddingLeft}px;
  font-size: ${props => props.fontSize / 16}rem;
  font-weight: 700;
  color: inherit;
  background-color: ${COLORS.white};

  &:focus {
    outline-offset: 0.25em;
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  ::-moz-placeholder { /* Firefox 19+ */
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  :-ms-input-placeholder { /* IE 10+ */
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  :-moz-placeholder { /* Firefox 18- */
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2px;
  margin-top: auto;
  margin-bottom: auto;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

export default IconInput;
