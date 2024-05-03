import {View, Text} from 'react-native';
import React from 'react';
import Accordion from '../../components/Global-Horror/Global/accordion-collapse/Accordion';
import Heading from '../../components/Global-Horror/Global/Text/Heading';
import Layout from '../../components/Global-Horror/Global/Views/Layout';
import TextView from '../../components/Global-Horror/Global/Text/TextView';
import ImageAvatar from '../../components/Global-Horror/Global/avatars/ImageAvatar';
import {Theme} from '../../Styles/size/Theme';
import CardView from '../../components/Global-Horror/Global/Views/CardView';
const data = [
  {
    title: 'accordion1',
    name: 'Hussein ',
    lastName: 'Asadi',
    job: 'just nothing',
    jobImage:
      'https://media.licdn.com/dms/image/C4D08AQF7dT4Xu9Mdlw/croft-frontend-shrinkToFit1024/0/1598293904802?e=2147483647&v=beta&t=DNhQO0ro-yffBiu1QvhnBtt5IxzPpFPw19yUZXvE6ZA',
  },
  {
    title: 'accordion2',
    name: 'John ',
    lastName: 'Den',
    job: 'just working',
    jobImage:
      'https://assets-global.website-files.com/6509fe179d7033a278a05268/652771a2ad43d990a8837c07_Blog-feature-HR-Pillar.png',
  },
  {
    title: 'accordion3',
    name: 'Sara ',
    lastName: 'Alarez',
    job: 'just makeup',
    jobImage:
      'https://blog-imgs-169.fc2.com/g/i/a/giadinhdoisongvn/makeup-artist.jpg',
  },
];
const AccordionBox = () => {
  return (
    <CardView style={{alignSelf:'center', alignItems:'center', padding: 20,margin:10}}>
      {data.map((e, i) => (
        <Accordion title={e.title}>
          <Layout bg={Theme.activeColors.light} ws={200} ht={150} bd={20}>
            <ImageAvatar uri={e.jobImage} style={{top: 10}} />
            <Heading txp="center" style={{top: 10}}>
              {e.name + ' ' + e.lastName}
            </Heading>
            <TextView txp="center" style={{top: 10}}>
              {e.job}
            </TextView>
          </Layout>
        </Accordion>
      ))}
    </CardView>
  );
};

export default AccordionBox;
