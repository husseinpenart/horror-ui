import {View, Text, FlatList} from 'react-native';
import React from 'react';
import splash from '../../../../types/Type';

const Gallery = ({
  style,
  inverted,
  horizontal,
  disableVertical,
  disableHorizontal,
  data,
  renderItem,
  numColumns,
  invertStickyHeaders,
  store,
  keyExtractor
}: splash) => {
  return (
    <FlatList
      data={data}
      horizontal={horizontal}
      numColumns={!numColumns ? 2 : numColumns}
      renderItem={({item, index}) => renderItem(item, index)}
      invertStickyHeaders={invertStickyHeaders}
      inverted={inverted}
      showsHorizontalScrollIndicator={disableHorizontal}
      showsVerticalScrollIndicator={disableVertical}
      contentContainerStyle={{...style}}
      keyExtractor={keyExtractor}
    />
  );
};

export default Gallery;
