import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import scroll from '../../../../types/Type';

const Scroll = ({
  children,
  style,
  horizontal,
  fadeEdge,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,
  contentContainerStyle,
  onScroll,
  endColor,
  pagingEnabled,
}: scroll) => {
  return (
    <ScrollView
      contentContainerStyle={{...style}}
      horizontal={horizontal}
      fadingEdgeLength={fadeEdge}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      onScroll={onScroll}
      endFillColor={endColor}
      pagingEnabled={pagingEnabled}
      
      >
      {children}
    </ScrollView>
  );
};

export default Scroll;
