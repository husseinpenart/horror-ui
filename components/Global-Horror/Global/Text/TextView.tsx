import {View, Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import TextViewProps from '../../../../types/Type';

const TextView = ({
  children,
  style,
  fs,
  fF,
  fW,
  txp,
  numLine,
  cl,
}: TextViewProps) => {
  return (
    <Text
      style={{
        fontSize: !fs ? 20 : fs,
        fontFamily: !fF ? 'sans-serif' : fF,
        fontWeight: !fW ? 'normal' : fW,
        textAlign: !txp ? 'justify' : txp,
        color: !cl ? 'black' : cl,
        ...style,
      }}
      numberOfLines={!numLine ? 0 : numLine}>
      {children}
    </Text>
  );
};

export default memo(TextView);
