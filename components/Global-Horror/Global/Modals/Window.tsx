import {View, Modal, Pressable} from 'react-native';
import React from 'react';
import modal from '../../../../types/Type';
// @ts-ignore
import Icon from 'react-native-vector-icons/AntDesign';
const Window = ({
  modalVisible,
  onRequestClose,
  children,
  style,
  title,
  titleOnclick,
  noIcon,
  extraStyle,
  hasInfo,
  noTitleStyle,
  animationType,
  transparent,
  position,
  top,
  right,
  zIndex,
  backgroundColor,
  borderRadius,
  name,
  size,
  color,
  flex,
  justifyContent,
  alignItems,
  marginTop,
  height,
  margin,
  shadowColor,
  shWidth,
  shHeight,
  shadowOpacity,
  shadowRadius,
  elevation,
  width,
  modalBack,
  modalStyle,
  backStyle
}: modal) => {
  return (
    <Modal
      animationType={!animationType ? 'none' : animationType}
      transparent={!transparent ? false :transparent}
      onRequestClose={() => onRequestClose}
      visible={modalVisible}>
      <View
        style={{
          flex: !flex ? 1 : flex,
          justifyContent: 'flex-end'
            ? 'center'
            : 'flex-start'
            ? 'space-around'
            : 'space-between'
            ? 'space-evenly'
            : undefined,
          alignItems: !alignItems
            ? 'center'
            : alignItems
            ? 'flex-start'
            : 'flex-end',
          marginTop: !marginTop ? 22 : marginTop,
          backgroundColor: !backgroundColor
            ? 'rgba(6, 29, 219, 0.65)'
            : backgroundColor,
          width: !width ? '100%' : width,
          height: !height ? '100%' : height,
          zIndex: 100,
          ...backStyle
        }}>
        <View
          style={{
            margin: !margin ? 20 : margin,
            backgroundColor: !modalBack ? 'white' : modalBack,
            borderRadius: !borderRadius ? 20 : borderRadius,
            padding: 35,
            alignItems: !alignItems
              ? 'center'
              : alignItems
              ? 'flex-start'
              : 'flex-end',
            shadowColor: !shadowColor ? '#000' : shadowColor,
            shadowOffset: {
              width: !shWidth ? 0 : shWidth,
              height: !shHeight ? 2 : shHeight,
            },
            shadowOpacity: !shadowOpacity ? 0.25 : shadowOpacity,
            shadowRadius: !shadowRadius ? 4 : shadowRadius,
            elevation: !elevation ? 5 : elevation,
            ...modalStyle
          }}>
          <Pressable
            style={{
              position: !position ? 'absolute' : position,
              top: !top ? 10 : top,
              right: !right ? 10 : right,
              zIndex: !zIndex ? 1 : zIndex,
              backgroundColor: !backgroundColor ? 'red' : backgroundColor,
              borderRadius: !borderRadius ? 100 : borderRadius,
              ...style,
            }}
            onPress={onRequestClose}>
            <Icon
              name={!name ? 'closecircleo' : name}
              size={!size ? 20 : size}
              color={!color ? 'white' : color}
            />
          </Pressable>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default Window;
