import {View, Text, StyleSheet, Image} from 'react-native';
import React, {memo} from 'react';
const IconButton =
  require('../Global-Horror/Global/buttons/IconButton').default;
const LoadingButton =
  require('../Global-Horror/Global/buttons/LoadingButton').default;
const Button = require('../Global-Horror/Global/buttons/Button').default;
const Divider = require('../Global-Horror/Global/common/Divider').default;
const RoundedButton =
  require('../Global-Horror/Global/buttons/RoundedButton').default;
const CardView = require('../Global-Horror/Global/Views/CardView').default;
const TextView = require('../Global-Horror/Global/Text/TextView').default;
const Heading = require('../Global-Horror/Global/Text/Heading').default;
const Images = require('../Global-Horror/Global/Images/Images').default;

const Card = () => {
  return (
    <CardView>
      {/* // for using borderRadius u most disable resize modes */}
      <Images
        uri={
          'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        }
        imgS={100}
        imgH={100}
        alignSelf={'center'}
        borderRadius={25}
        style={{alignSelf: 'center'}}
      />
      <Heading fs={10}>this is heading</Heading>
      <Divider />
      <TextView fs={11}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, soluta.
      </TextView>
      <RoundedButton
        br={20}
        style={{padding: 10}}
        underlay={'red'}
        Pressing={() => console.log('clicked22222')}>
        <TextView fs={10}>Click Me</TextView>
      </RoundedButton>
      <Button
        style={{padding: 10}}
        underlay={'red'}
        Pressing={() => console.log('33333')}>
        <TextView fs={10} cl={'white'}>
          Click Me
        </TextView>
      </Button>
      <LoadingButton
        style={{padding: 10}}
        underlay={'red'}
        Pressing={() => console.log('33333')}>
        <TextView fs={10} cl={'white'}>
          Click
        </TextView>
      </LoadingButton>
      <IconButton
        style={{padding: 10}}
        underlay={'red'}
        Pressing={() => console.log('33333')}>
        <Images
          uri={
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
          }
          imgS={20}
          imgH={20}
          alignSelf={'center'}
          borderRadius={1}
          style={{left: -5,}}
        />
        <TextView fs={10} cl={'white'}>
          Click icon
        </TextView>
      </IconButton>
    </CardView>
  );
};

export default memo(Card);
