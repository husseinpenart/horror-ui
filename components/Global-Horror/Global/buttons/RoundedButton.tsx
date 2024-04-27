import {View, Text, TouchableHighlight} from 'react-native';
import React, {memo} from 'react';
import {BorderButton} from '../../../../types/Type';

const RoundedButton = ({
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
}: BorderButton) => {
  return (
    <TouchableHighlight
      style={{
        borderColor: !bc ? 'black' : bc,
        borderWidth: !bw ? 1 : bw,
        backgroundColor: !bg ? 'transparent' : bg,
        alignSelf: !align ? 'center' : align,
        borderRadius: !br ? 15 : br,
        padding: !pd ? 10 : pd,
        margin: !mr ? 10 : mr,
        ...style,
      }}
      underlayColor={!underlay ? 'transparent' : underlay}
      onPress={Pressing}>
      {children}
    </TouchableHighlight>
  );
};

export default memo(RoundedButton);
