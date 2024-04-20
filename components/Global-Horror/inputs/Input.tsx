import {View, Text, TextInput} from 'react-native';
import React from 'react';
import input from '../../../types/Type';

const Input = ({
  style,
  fs,
  fF,
  fW,
  txp,
  cl,
  wsize,
  hsize,
  cap,
  autoComplete,
  holder,
  defaultVal,
  cColor,
  read,
  inputType,
  numLine,
  hide,
}: input) => {
  return (
    <TextInput
      style={{
        fontSize: !fs ? 10 : fs,
        fontFamily: !fF ? 'sans-serif' : fF,
        fontWeight: !fW ? 'normal' : fW,
        textAlign: !txp ? 'justify' : txp,
        color: !cl ? 'black' : cl,
        width: !wsize ? 250 : wsize,
        height: !hsize ? 40 : hsize,
        ...style,
      }}
      autoComplete={!autoComplete ? 'off' : autoComplete}
      placeholder={!holder ? 'your text' : holder}
      defaultValue={!defaultVal ? '' : defaultVal}
      placeholderTextColor={!cColor ? 'gray' : cColor}
      editable={!read ? true : read}
      keyboardType={!inputType ? 'default' : inputType}
      numberOfLines={!numLine ? 5 : numLine}
      secureTextEntry={!hide ? false : hide}
      autoCapitalize={!cap ? 'none' : cap}
    />
  );
};

export default Input;
