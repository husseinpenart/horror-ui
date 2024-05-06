import {View, Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import {TextViewProps} from '../../../../types/Type';

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
        fontSize: !fs ? 12 : fs,
        fontFamily: !fF ? 'sans-serif' : fF,
        fontWeight: !fW ? null : fW,
        textAlign: !txp ? 'justify' : txp,
        color: !cl ? '#000' : cl,
        ...style,
      }}
      numberOfLines={!numLine ? 0 : numLine}>
      {children}
    </Text>
  );
};

export default memo(TextView);
