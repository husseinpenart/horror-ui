import React from 'react';
import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';
import toast from '../../../../types/Type';

const Toast = ({message, title, short, long, gravity}: toast) => {
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
    <View style={styles.container}>
      <Button
        title={!title ? 'short toast' : title}
        onPress={() =>
          short
            ? ToastAndroid.show(message, ToastAndroid.SHORT)
            : ToastAndroid.showWithGravity(
                message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              )
        }
      />
      <Button
        title={!title ? 'gravity toast' : title}
        onPress={() =>
          gravity
            ? ToastAndroid.showWithGravity(
                message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              )
            : ToastAndroid.show(message, ToastAndroid.SHORT)
        }
      />
      <Button
        title={!title ? 'gravity with offset and long toast' : title}
        onPress={() =>
          long
            ? ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
              )
            : ToastAndroid.show(message, ToastAndroid.SHORT)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#888888',
    padding: 8,
  },
});

export default Toast;
