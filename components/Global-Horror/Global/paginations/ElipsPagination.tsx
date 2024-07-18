import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {paginationType} from '../../../../types';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  pageRangeDisplayed?: number; // Optional prop to define how many pages to show around current page
}

const ElipsPagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  borderColor,
  paginationColor,
  currentPageButtonColor,
  pageTextStyle,
  pageRangeDisplayed = 5, // Default number of pages to display around current page
}: paginationType) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(
      1,
      currentPage - Math.floor(pageRangeDisplayed / 2),
    );
    const endPage = Math.min(totalPages, startPage + pageRangeDisplayed - 1);

    // Add ellipsis at the beginning if necessary
    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push('...');
      }
    }

    // Add page numbers within range
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Add ellipsis at the end if necessary
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <View style={styles.pagination}>
      {getPageNumbers().map((page, index) => (
        <TouchableOpacity
          key={index}
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
                ? 'white'
                : currentPageButtonColor,
            },
            ,
            typeof page === 'string' && styles.ellipsisButton,
          ]}
          onPress={() => typeof page === 'number' && onPageChange(page)}
          disabled={typeof page === 'string'}>
          <Text
            style={[
              styles.pageText,
              typeof page === 'string' && styles.ellipsisText,
            ]}>
            {page}
          </Text>
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
  },
  pageButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#FFFFFF',
  },
  currentPageButton: {
    backgroundColor: '#007BFF',
  },
  ellipsisButton: {
    width: 'auto', // Adjust width for ellipsis buttons as needed
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ellipsisText: {
    fontSize: 20,
  },
});

export default ElipsPagination;
