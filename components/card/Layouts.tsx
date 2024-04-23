import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import CheckAction from '../Global-Horror/Global/selections/CheckAction';
const Window =  require('../Global-Horror/Global/Modals/Window').default;
const RadioButtons =
  require('../Global-Horror/Global/selections/RadioButtons').default;
const Radio = require('../Global-Horror/Global/selections/Radio').default;
const ImageAvatar =
  require('../Global-Horror/Global/avatars/ImageAvatar').default;
const Spinner = require('../Global-Horror/Global/loadings/Spinner').default;
const FloatInput = require('../Global-Horror/inputs/FloatInput').default;
const Input = require('../Global-Horror/inputs/Input').default;
const Layout = require('../Global-Horror/Global/Views/Layout').default;

const Layouts = () => {
  const gender = [
    {
      id: 2,
      title: 'خانم',
    },
    {
      id: 1,
      title: 'آقا',
    },
  ];
  const [sex, setSex] = useState(1);
  const [modal, setModal] = useState(false);
  return (
    <>
      {/* <Layout style={{alignSelf:'center',top: 50,}}> */}
      {/* <Input />  */}
      {/* <FloatInput /> */}
      {/* <Spinner /> */}
      {/* <ImageAvatar
        uri={
          'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        }
        style={{marginTop: 100,}}
        imgS={120}
        imgH={120}
      /> */}
      {/* <CheckAction /> */}
      {/* <RadioButtons />
      {gender.map((item, index) => (
        <Radio
          style={{width: undefined}}
          key={index}
          title={item.title}
          onPress={() => setSex(item.id)}
          selected={item.id === sex}
        />
      ))} */}
      <Pressable onPress={() => setModal(true)}>
        <Text>open modal</Text>
      </Pressable>
      <View>
        <Window
          modalVisible={modal}
          onRequestClose={() => setModal(false)}
          backgroundColor="rgb(187, 185, 252)"
          elevation={20}
          shWidth={100}
          shHeight={50}
          animationType={'slide'}
          shadowColor="white">
          <Text>hellooooooooooooo IM here</Text>
        </Window>
      </View>

      {/* </Layout> */}
    </>
  );
};

export default Layouts;
