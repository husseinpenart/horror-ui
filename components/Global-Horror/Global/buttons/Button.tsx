import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import { button } from '../../../../types/Type';

const Button = ({
  children,
  style,
  bc,
  bw,
  bg,
  align,
  br,
  underlay,
  Pressing,
  pd,
  mr
}: button) => {
  return (
    <TouchableHighlight
      style={{
        borderColor: !bc ? 'transparent' : bc,
        borderWidth: !bw ? 0 : bw,
        backgroundColor: !bg ? '#A55AFA' : bg,
        alignSelf: !align ? 'center' : align,
        borderRadius: !br ? 5 : br,
        padding: !pd ? 10 :pd,
        margin: !mr ? 10 : mr,
        ...style,
      }}
      underlayColor={!underlay ? 'transparent' : underlay}
      onPress={Pressing}>
      {children}
    </TouchableHighlight>
  );
};

export default Button;
