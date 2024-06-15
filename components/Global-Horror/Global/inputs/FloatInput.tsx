
import React, {useState, useRef} from 'react';
import {Animated, Easing, TextInput, StyleSheet} from 'react-native';
import {LInput} from '../../../../types/Type';
import { Theme } from '../../../../Styles/size/Theme';

const LabelInput = ({
    label ,
    titleActiveSize,
    titleInActiveSize,
    titleActiveColor,
    titleInactiveColor ,
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
    bg,
  }:LInput
) => {
    const [text, onChangeText] = React.useState('');
    const animatedValue = useRef(new Animated.Value(0));
  
    const returnAnimatedTitleStyles = {
      transform: [
        {
          translateY: animatedValue?.current?.interpolate({
            inputRange: [0, 1],
            outputRange: [22, -4],
            extrapolate: 'clamp',
          }),
        },
      ],
      fontSize: animatedValue?.current?.interpolate({
        inputRange: [0, 1],
        outputRange: [!titleInActiveSize ? 14 : titleInActiveSize, !titleActiveSize ? 12 : titleActiveSize],
        extrapolate: 'clamp',
      }),
      color: animatedValue?.current?.interpolate({
        inputRange: [0, 1],
        outputRange: [!titleInactiveColor ? '#c2c2c2' : titleInactiveColor, !titleActiveColor ? '#444444' : titleActiveColor],
      }),
      zIndex:animatedValue?.current?.interpolate({
        inputRange: [0, 1],
        outputRange: [!titleInActiveSize ? 14 : titleInActiveSize, !titleActiveSize ? 12 : titleActiveSize],
        extrapolate: 'clamp',
      }),
    };
  
    const viewStyles = {
      borderBottomColor: animatedValue?.current?.interpolate({
        inputRange: [0, 1],
        outputRange: [!titleInactiveColor ? '#c2c2c2' : titleInactiveColor, !titleActiveColor ? '#444444' : titleActiveColor],
      }),
      borderBottomWidth: 0.8,
    }
    const onFocus = () => {
      Animated.timing(animatedValue?.current, {
        toValue: 1,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    };
  
    const onBlur = () => {
      if (!text) {
        Animated.timing(animatedValue?.current, {
          toValue: 0,
          duration: 500,
          easing: Easing.bezier(0.4, 0.0, 0.2, 1),
          useNativeDriver: false,
        }).start();
      }
    };
  
    return (
      <Animated.View style={[styles.subContainer, viewStyles]}>
        <Animated.Text style={[returnAnimatedTitleStyles]}>{!label ? 'your input lable' : label}</Animated.Text>
        <TextInput
        style={{
            fontSize: !fs ? 10 : fs,
            fontFamily: !fF ? 'sans-serif' : fF,
            fontWeight: !fW ? 'normal' : fW,
            textAlign: !txp ? 'justify' : txp,
            color: !cl ? 'black' : cl,
            width: !wsize ? 'auto' : wsize,
            height: !hsize ? 40 : hsize,  
            backgroundColor:!bg ? Theme.activeColors.light : bg,
            ...style,
          }}
          autoComplete={!autoComplete ? 'off' : autoComplete}
          defaultValue={!defaultVal ? '' : defaultVal}
          placeholderTextColor={!cColor ? 'gray' : cColor}
          editable={!read ? true : read}
          keyboardType={!inputType ? 'default' : inputType}
          numberOfLines={!numLine ? 50 : numLine}
          secureTextEntry={!hide ? false : hide}
          autoCapitalize={!cap ? 'none' : cap}
        //   value={text}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </Animated.View>
    );
  };
const styles = StyleSheet.create({
    subContainer:{
        zIndex:10
    }
    
  });
export default LabelInput