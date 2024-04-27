import {View, Text, TouchableHighlight, ActivityIndicator} from 'react-native';
import React from 'react';
import {loadingButton} from '../../../../types/Type';
import { Theme } from '../../../../Styles/size/Theme';

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
  mr,
  pd
}: loadingButton) => {
  return (
    <TouchableHighlight
      style={[
        {
          borderColor: !bc ? 'transparent' : bc,
          borderWidth: !bw ? 0 : bw,
          backgroundColor: !bg ? Theme.activeColors.success : bg,
          alignSelf: !align ? 'center' : align,
          borderRadius: !br ? 10 : br,
          padding: !pd ? 10 :pd,
          margin: !mr ? 10 : mr,
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
