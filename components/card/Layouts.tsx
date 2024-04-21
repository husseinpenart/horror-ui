import {View, Text} from 'react-native';
import React from 'react';
const FloatInput  =  require('../Global-Horror/inputs/FloatInput').default;
const Input = require('../Global-Horror/inputs/Input').default;
const Layout = require('../Global-Horror/Global/Views/Layout').default;

const Layouts = () => {
  return (
   <>
    {/* <Layout style={{alignSelf:'center',top: 50,}}> */}
      {/* <Input />  */}
      <FloatInput />
    {/* </Layout> */}
   </>
  );
};

export default Layouts;
