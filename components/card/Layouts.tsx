import {Text, View} from 'react-native';
import Toggle from '../Global-Horror/Global/selections/Toggle';
import Toast from '../Global-Horror/Global/Alerts/Toast';
const  Scroll  =  require('../Global-Horror/Global/Lists/Scroll').default;
const Layout = require('../Global-Horror/Global/Views/Layout').default;

const FlashScreen =
  require('../Global-Horror/Global/Lists/FlashScreen').default;

const Layouts = () => {

  return (
    <>
     <Toast 
     title='short toast'
     message='hello toast'
     gravity
     />
    </>
  );
};

export default Layouts;
