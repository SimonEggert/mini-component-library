import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({value, size}) => {
  const SIZES = {
    large: {
      barHeight: '24px',
      wrapperPadding: '4px',
      wrapperBorderRadius: '8px',
    },
    medium: {
      barHeight: '12px',
      wrapperPadding: '0',
      wrapperBorderRadius: '4px',
    },
    small: {
      barHeight: '8px',
      wrapperPadding: '0',
      wrapperBorderRadius: '4px',
    },
  };

  const sizeAttributes = SIZES[size];

  return (
    <Wrapper 
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      sizeAttributes={sizeAttributes}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarBox>
        <Bar sizeAttributes={sizeAttributes} value={value} />
      </BarBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: ${props => props.sizeAttributes.wrapperBorderRadius};
  padding: ${props => props.sizeAttributes.wrapperPadding};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarBox = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  height: ${props => props.sizeAttributes.barHeight};
  width: ${props => props.value}%;
  background-color: ${COLORS.primary};
`

export default ProgressBar;
