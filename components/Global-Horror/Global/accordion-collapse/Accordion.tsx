import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AccordionType} from '../../../../types/Type';
import {useLayoutAnimation} from '../../../Animation';

const Accordion = ({children, title}: AccordionType) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [show, setShow] = useState(false);
  const openWithAnimation = useCallback(() => {
    useLayoutAnimation();
    setShow(!show);
  }, [show]);

  return (
    <View>
      <TouchableOpacity onPress={openWithAnimation}>
        <Text>{title}</Text>
      </TouchableOpacity>
      {show ? <Animated.View>{children}</Animated.View> : <View></View>}
    </View>
  );
};

export default Accordion;
