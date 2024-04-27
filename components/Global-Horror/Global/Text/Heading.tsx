import {View, Text} from 'react-native';
import React from 'react';
import {HeadingProps} from '../../../../types/Type';

const Heading = ({children, style, fs, fF, fW, txp, cl}: HeadingProps) => {
  return (
 
        
          <Text
            style={{
              fontSize: !fs ? 20 : fs,
              fontFamily: !fF ? 'sans-serif' : fF,
              fontWeight: !fW ? 'bold' : fW,
              textAlign: !txp ? 'justify' : txp,
              color: !cl ? 'black' : cl,

              ...style,
            }}>
            {children}
          </Text>
        
  
  );
};

export default Heading;
