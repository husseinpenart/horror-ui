import {View, Text, Alert} from 'react-native';
import React from 'react';
import CardView from '../../components/Global-Horror/Global/Views/CardView';
import {Theme} from '../../Styles/size/Theme';
import Images from '../../components/Global-Horror/Global/Images/Images';
import Heading from '../../components/Global-Horror/Global/Text/Heading';
import TextView from '../../components/Global-Horror/Global/Text/TextView';
import RoundedButton from '../../components/Global-Horror/Global/buttons/RoundedButton';
import Layout from '../../components/Global-Horror/Global/Views/Layout';
import ImgBack from '../../components/Global-Horror/Global/Images/ImgBack';

const BlogCard = () => {
  return (
    <Layout>
      <Heading txp="center"> blog Cards</Heading>

      <CardView
        bg={Theme.activeColors.light}
        ws={200}
        el={10}
        sR={5}
        sc="red"
        style={{margin: 10, alignSelf: 'center'}}>
        <Images
          require={require('./pepsi-messi-poster.png')}
          imgS={150}
          imgH={100}
          style={{margin: 10}}
        />
        <Heading txp="center" cl={Theme.activeColors.success}>
          beauty of nature
        </Heading>
        <TextView
          numLine={1}
          cl={Theme.activeColors.primary}
          style={{padding: 10}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur
          officiis consequatur necessitatibus veritatis natus sit adipisci nisi
          enim quos!
        </TextView>
        <RoundedButton
          align="center"
          bw={0.2}
          bc={Theme.activeColors.info}
          Pressing={() => Alert.alert('hellooo')}>
          <TextView>more...</TextView>
        </RoundedButton>
      </CardView>
      <ImgBack
        require={require('./pepsi-messi-poster.png')}
        imgH={300}
        imgS={300}
      />
    </Layout>
  );
};

export default BlogCard;
