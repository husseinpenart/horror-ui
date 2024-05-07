import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import React, {memo} from 'react';
import {ImageViewProps} from '../../../../types/Type';

const ImgBack = ({
  uri,
  imgS,
  imgH,
  style,
  alignSelf,
  borderRadius,
  mode,
  require,
  blur,
  children
}: ImageViewProps) => {
  return (
    <View>
      <ImageBackground
        source={!uri ? require : {uri: uri}}
        resizeMode={!mode ? null : mode}
        blurRadius={!blur ? 0 : blur}
        style={[
          {
            width: !imgS ? 200 : imgS,
            height: !imgH ? 100 : imgH,
            alignSelf: !alignSelf ? 'center' : alignSelf,
            borderRadius: !borderRadius ? 0 : borderRadius,
            ...style,
          },
        ]}
      >{children}</ImageBackground>
    </View>
  );
};

export default memo(ImgBack);
