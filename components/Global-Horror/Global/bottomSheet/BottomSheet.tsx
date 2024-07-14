import React, {useCallback, useState} from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import {useLayoutAnimation} from '../../../Animation';
import Button from '../buttons/Button';
import TextView from '../Text/TextView';
import Box from '../Views/Box';
import Divider from '../common/Divider';
import {buttomSheetType} from '../../../../types';

const BottomSheet = ({
  children,
  divider,
  backgroundColor,
  borderRadius,
  style,
}: buttomSheetType) => {
  const [show, setShow] = useState(false);
  const OpenBottom = useCallback(() => {
    useLayoutAnimation();
    setShow(!show);
  }, [show]);
  const {height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <View>
      <Button Pressing={OpenBottom}>
        <TextView>bottomSheet</TextView>
      </Button>
      {show ? (
        <>
          <Box
            style={{
              width: '100%',
              height: SCREEN_HEIGHT,
              position: 'absolute',
              top: SCREEN_HEIGHT / 1.5,
              zIndex: 99999999999,
              paddingHorizontal: 10,
              backgroundColor: !backgroundColor ? '#00f8' : backgroundColor,
              borderRadius: !borderRadius ? 25 : borderRadius,
              opacuty: 1,
              ...style,
            }}>
            <Pressable onPress={() => setShow(false)}>
              {!divider ? (
                <Divider
                  wSize={50}
                  bg="gray"
                  style={{
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                  hSize={3}
                />
              ) : (
                divider
              )}
            </Pressable>
            {children}
          </Box>
        </>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default BottomSheet;
