import {View, Text, TouchableHighlight, ActivityIndicator} from 'react-native';
import React from 'react';
import loadingButton from '../../../../types/Type';

const LoadingButton = ({
  children,
  style,
  bc,
  bw,
  bg,
  align,
  br,
  underlay,
  Pressing,
  cl,
  size,
}: loadingButton) => {
  return (
    <TouchableHighlight
      style={[
        {
          borderColor: !bc ? 'transparent' : bc,
          borderWidth: !bw ? 0 : bw,
          backgroundColor: !bg ? '#A55AFA' : bg,
          alignSelf: !align ? 'center' : align,
          borderRadius: !br ? 5 : br,
          ...style,
        },
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
      underlayColor={!underlay ? 'transparent' : underlay}
      onPress={Pressing}>
      <>
        <ActivityIndicator
          size={!size ? 20 : size}
          color={!cl ? '#F5EDFF' : cl}
        />
        {children}
      </>
    </TouchableHighlight>
  );
};

export default LoadingButton;
