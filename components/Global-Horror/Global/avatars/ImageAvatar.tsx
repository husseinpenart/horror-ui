import {View, Text, Image} from 'react-native';
import React from 'react';
import {avatarImage} from '../../../../types/Type';

const ImageAvatar = ({
  uri,
  imgS,
  imgH,
  style,
  alignSelf,
  borderRadius,
  mode,
  require
}: avatarImage) => {
  return (
    <Image
    source={!uri ? require : {uri:uri}}
      resizeMode={!mode ? null : mode}
      style={[
        {
          width: !imgS ? 80 : imgS,
          height: !imgH ? 80 : imgH,
          alignSelf: !alignSelf ? 'center' : alignSelf,
          borderRadius: !borderRadius ? 100 : borderRadius,
          ...style,
        },
      ]}
    />
  );
};

export default ImageAvatar;
