import {View, Text, StyleSheet} from 'react-native';
import React, {Children, memo} from 'react';
import {CardViewProps} from '../../../../types/Type';

const CardView = ({
  children,
  bg,
  ws,
  ht,
  bd,
  el,
  sc,
  sfw,
  sfh,
  style,
  sho,
  sR,
}: CardViewProps) => {
  return (
    <View
      style={{
        backgroundColor: !bg ? '#fff' : bg,
        width: !ws ? 200 : ws,
        height: !ht ? 'auto' : ht,
        borderRadius: !bd ? 5 : bd,
        shadowColor: !sc ? '#000' : sc,
        shadowOffset: {
          width: !sfw ? 0 : sfw,
          height: !sfh ? 5 : sfh,
        },
        shadowOpacity: !sho ? 1 : sho,
        shadowRadius: !sR ? 0 : sR,
        elevation: !el ? 1 : el,
      
        ...style,
      }}>
      {children}
    </View>
  );
};

export default (CardView);
