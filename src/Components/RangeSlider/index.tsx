import React from 'react';
import { Wrapper, Range } from './styles';

interface RangeSliderProps {
  updateValue: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const HandleScroll = (event: any) => {
    props.updateValue(event.target.value);
  };
  return (
    <Wrapper>
      <Range type="range" defaultValue="0" onChange={HandleScroll} min="-40" max="40" />
    </Wrapper>
  );
};

export default RangeSlider;
