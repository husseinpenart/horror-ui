import React from 'react';
import {View, StyleSheet, ToastAndroid, Button, StatusBar, Pressable} from 'react-native';
import {toast} from '../../../../types/Type';

const Toast = ({message, title, short, long, gravity,style,children}: toast) => {
  const showToast = () => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
      <Pressable
      onPress={() =>
        long
          ? ToastAndroid.showWithGravityAndOffset(
              message,
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50,
            )
          : short ?  ToastAndroid.show(message, ToastAndroid.SHORT) : gravity ? ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          )
        : ToastAndroid.show(message, ToastAndroid.SHORT)
      }
      style={{...style}}
      >
{children}
      </Pressable>
  );
};



export default Toast;
