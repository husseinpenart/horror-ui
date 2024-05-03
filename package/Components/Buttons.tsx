import {View, Text} from 'react-native';
import React from 'react';
import Layout from '../../components/Global-Horror/Global/Views/Layout';
import Button from '../../components/Global-Horror/Global/buttons/Button';
import TextView from '../../components/Global-Horror/Global/Text/TextView';
import RoundedButton from '../../components/Global-Horror/Global/buttons/RoundedButton';
import LoadingButton from '../../components/Global-Horror/Global/buttons/LoadingButton';
import {Theme} from '../../Styles/size/Theme';
import IconButton from '../../components/Global-Horror/Global/buttons/IconButton';
//@ts-ignore
import Icon from 'react-native-vector-icons/AntDesign';
import Heading from '../../components/Global-Horror/Global/Text/Heading';

const Buttons = () => {
  return (
    <Layout ws={'100%'} style={{flexDirection: 'row' , flexWrap:'wrap'}}>
      <Heading txp='center'>Buttons </Heading>
      <Button>
        <TextView cl={Theme.activeColors.light}>simple Button</TextView>
      </Button>
      <RoundedButton>
        <TextView>Rounded button</TextView>
      </RoundedButton>
      <LoadingButton>
        <TextView cl={Theme.activeColors.light}> loading </TextView>
      </LoadingButton>
      <IconButton><TextView cl={Theme.activeColors.light}>user <Icon name="user" size={20}/></TextView></IconButton>
    </Layout>
  );
};

export default Buttons;
