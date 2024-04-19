import {View, Text} from 'react-native';
import React from 'react';
import divider from '../../../../types/Type';

const Divider = ({
  style,
  wSize,
  hSize,
  align,
  bg,
  change,
  opacity,
}: divider) => {
  return (
    <View
      style={{
        ...style,
        width: !wSize ? 100 : wSize,
        height: !hSize ? 1 : hSize,
        alignSelf: !align ? 'center' : align,
        backgroundColor: !bg ? 'black' : bg,
        opacity: !opacity ? 1 : opacity,
        transform: !change ? [{rotate: '0deg'}] : change,
      }}
    />
  );
};

export default Divider;
