import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {spinner} from '../../../../types/Type';

const Spinner = ({
  style,
  size,
  color,
  Animating,
  hidesWhenStopped,
}: spinner) => {
  return (
    <ActivityIndicator
      animating={!Animating ? true : Animating}
      size={!size ? 'large' : size}
      color={!color ? 'black' : color}
      hidesWhenStopped={!hidesWhenStopped ? true : !hidesWhenStopped}
      style={{...style}}
    />
  );
};

export default Spinner;
