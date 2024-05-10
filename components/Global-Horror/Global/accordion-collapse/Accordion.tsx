import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AccordionType} from '../../../../types/Type';
import {useLayoutAnimation} from '../../../Animation';

const Accordion = ({children, title,cl,style,icon}: AccordionType) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [show, setShow] = useState(false);
  const openWithAnimation = useCallback(() => {
    useLayoutAnimation();
    setShow(!show);
  }, [show]);

  return (
    <View>
      <TouchableOpacity onPress={openWithAnimation} style={styles.flexAlign}>
        {icon}
        <Text  style={[
        {
          color: !cl ? 'black' : cl,
          ...style,
        },
      ]}>{title}</Text>
      </TouchableOpacity>
      {show ? <Animated.View>{children}</Animated.View> : <View></View>}
    </View>
  );
};
const styles = StyleSheet.create({
  flexAlign:{
    flexDirection:'row'
  }
})

export default Accordion;
