import {View, Text} from 'react-native';
import React from 'react';
import Toast from '../../components/Global-Horror/Global/Alerts/Toast';
import TextView from '../../components/Global-Horror/Global/Text/TextView';

const ToastMessage = () => {
  return (
    <View>
      <Toast
        long
        message="hi this is toast"
        style={{backgroundColor: 'red', width: 200, height: 50}}>
        <TextView>message</TextView>
      </Toast>
    </View>
  );
};

export default ToastMessage;
