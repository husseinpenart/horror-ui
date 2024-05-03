import {View, Text} from 'react-native';
import React from 'react';
import Layout from '../../components/Global-Horror/Global/Views/Layout';
import Images from '../../components/Global-Horror/Global/Images/Images';
import FlashScreen from '../../components/Global-Horror/Global/Lists/FlashScreen';
import {layout} from '../../types/Type';
import TextView from '../../components/Global-Horror/Global/Text/TextView';
import CardView from '../../components/Global-Horror/Global/Views/CardView';
import Heading from '../../components/Global-Horror/Global/Text/Heading';

const SmallCard = () => {
  const product = [
    {
      name: 'T-shirt',
      price: 100,
      image:
        'https://a.cdn-hotels.com/gdcs/production157/d1079/b215ff33-0c46-4f08-8d34-cd992d722e9d.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    },
    {
      name: 'jeans',
      price: 50,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Souk_in_Tunisia_1.jpg/640px-Souk_in_Tunisia_1.jpg',
    },
    {
      name: 'shoes',
      price: 200,
      image:
        'https://a.cdn-hotels.com/gdcs/production157/d1079/b215ff33-0c46-4f08-8d34-cd992d722e9d.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    },
    {
      name: 'Boot',
      price: 300,
      image:
        'https://www.cuddlynest.com/blog/wp-content/uploads/2022/08/shopping-in-san-francisco-scaled.jpg',
    },
  ];
  return (
    <Layout>
    <Heading txp='center'>Flash Screen and Small Cards</Heading>
    <FlashScreen
      data={product}
      horizontal
      disableHorizontal={false}
      renderItem={(item: any) => (
        <CardView el={4} sc="black" ws={100} ht="auto" style={{margin:10}}>
          <Images uri={item.image}  imgS={80} imgH={80} style={{margin:10,}} />
          <TextView txp='center' fs={14}>{item.name}</TextView>
          <TextView txp='center' fs={12}>{item.price}</TextView>
        </CardView>
      )}
    />
    </Layout>
  );
};

export default SmallCard;
