import {View, Text, FlatList} from 'react-native';
import React, { memo } from 'react';
import {splash} from '../../../../types/Type';

const FlashScreen = ({
  style,
  inverted,
  horizontal,
  disableVertical,
  disableHorizontal,
  data,
  renderItem,
  numColumns,
  invertStickyHeaders,
  store
}:splash) => {
  return (
    <FlatList 
    data={data}
    horizontal={horizontal}
    numColumns={numColumns}
    renderItem={({ item, index }) => renderItem(item, index)}
    invertStickyHeaders={invertStickyHeaders}
    inverted={inverted}
    showsHorizontalScrollIndicator={disableHorizontal}
    showsVerticalScrollIndicator={disableVertical}
    contentContainerStyle={{...style}}

    
    
    
    
    />
  );
};

export default memo(FlashScreen);
