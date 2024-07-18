import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {paginationType} from '../../../../types';

const ButtonPagination = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
  currentPageButtonColor,
  pageTextStyle,
  prevStyle,
  nextStyle,
  PrevTextStyle,
  NextTextStyle,
  prevText,
  nextText,
}: paginationType) => {
  const nextPage = () => {
    if (currentPage < totalPages) {
      onNextPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      onPrevPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Render Previous button */}
      <TouchableOpacity onPress={prevPage} style={prevStyle}>
        <Text style={PrevTextStyle}>{!prevText ? '<' : prevText}</Text>
      </TouchableOpacity>

      {/* Render page numbers */}
      <View style={styles.pagination}>
        {[...Array(totalPages).keys()].map(index => (
          <TouchableOpacity
            key={index + 1}
            style={[
              styles.pageNumber,
              currentPage === index + 1 && {
                backgroundColor: !currentPageButtonColor
                  ? 'blue'
                  : currentPageButtonColor,
              },
              ,
            ]}
            onPress={() => onNextPage(index + 1)}>
            <Text style={pageTextStyle}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Render Next button */}
      <TouchableOpacity onPress={nextPage} style={nextStyle}>
        <Text style={NextTextStyle}>{!nextText ? '>' : nextText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  pageNumber: {
    padding: 10,
  },
  currentPage: {
    backgroundColor: 'blue', // Highlight current page number
  },
  pageText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default ButtonPagination;
