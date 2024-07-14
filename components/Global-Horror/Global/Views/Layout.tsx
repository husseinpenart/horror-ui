import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {layout} from '../../../../types';

const Layout = ({
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
}: layout) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: !bg ? 'transparent' : bg,
        width: ws,
        height: !ht ? 'auto' : ht,
        borderRadius: !bd ? 0 : bd,
        shadowColor: !sc ? '#000' : sc,
        shadowOffset: {
          width: !sfw ? 0 : sfw,
          height: !sfh ? 5 : sfh,
        },
        shadowOpacity: !sho ? 1 : sho,
        shadowRadius: !sR ? 0 : sR,
        elevation: !el ? 0 : el,
        ...style,
      }}>
      {children}
    </SafeAreaView>
  );
};

export default Layout;
