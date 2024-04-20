import {View, Text} from 'react-native';
import React, {memo} from 'react';
import Layouts from './components/card/Layouts';
const ThemeProvider = require('./Styles/ThemeProvider').default;
const Card = require('./components/card/Card').default;

const App = () => {
  return (
    <ThemeProvider>
      {/* <Card /> */}
      <Layouts /> 
    </ThemeProvider>
  );
};
export default memo(App);
