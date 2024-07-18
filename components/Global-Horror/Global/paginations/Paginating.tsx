import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {paginationType} from '../../../../types';
let currentPageButtonColor;
const Paginating = ({
  totalPages,
  currentPage,
  onPageChange,
  borderColor,
  paginationColor,
  currentPageButtonColor,
  pageTextStyle,
}: paginationType) => {
  // Generate page numbers based on totalPages
  const pages = Array.from({length: totalPages}, (_, i) => i + 1);

  return (
    <View style={styles.pagination}>
      {pages.map(page => (
        <TouchableOpacity
          key={page}
          style={[
            {
              paddingVertical: 8,
              paddingHorizontal: 12,
              marginHorizontal: 4,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: !borderColor ? ' black' : borderColor,
              backgroundColor: !paginationColor ? 'blue' : paginationColor,
            },
            currentPage === page && {
              backgroundColor: !currentPageButtonColor
                ? 'red'
                : currentPageButtonColor,
            },
          ]}
          onPress={() => onPageChange(page)}>
          <Text style={pageTextStyle}>{page}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginVertical: '10%',
  },
});

export default Paginating;
