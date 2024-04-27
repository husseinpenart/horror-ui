import React, {useState} from 'react';
import {radio} from '../../../../types/Type';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const RadioButton = ({
  label,
  selected,
  onSelect,
  bgColor,
  color,
  title,
  onPress,
  style,
  radioSection,
  width,
  backgroundColor,
  alignSelf,
  marginBottom,
  flexDirection,
  alignItems,
  justifyContent,
  height,
  paddingHorizontal,
  borderRadius,
  elevation,
  bColor,
  borderWidth,
  marginHorizontal,
  marginVertical,
  fontSize,
  textAlign,
  paddingVertical,
  flex
}: radio) => (
  <TouchableOpacity
    style={[
      {
        paddingVertical: !paddingVertical  ? 12 :paddingVertical,
        paddingHorizontal: !paddingHorizontal ? 16 : paddingHorizontal,
        borderRadius: !borderRadius ? 8 :borderRadius,
        marginVertical: !marginVertical ? 8 : marginVertical,
        borderWidth: !borderWidth ? 1 :borderWidth,
        borderColor: !bColor ? '#007BFF' : bColor,
        width: !width ?180  :width,
		height: !height ? 45 : height 
      },
      {backgroundColor: selected && !bgColor ? '#726EFF' : bgColor},
    ]}
    onPress={onSelect}>
    <Text
      style={[{fontSize: !fontSize ? 11 : fontSize}, {color: selected && !color ? '#FFF' : color}]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default RadioButton

// const RadioButtons:unknown = ({
// 	flex,
// 	label
// }:radio) => {
//   const [selectedValue, setSelectedValue] = useState(null);

//   return (
//     <View style={{
// 		flex: !flex  ? 1 : flex,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5F5F5',
// 	}}>
//       <RadioButton
//         label={!label ? "ReactJS" : label}
//         selected={selectedValue === 'option1'}
//         onSelect={() => setSelectedValue('option1')}
//       />
//       <RadioButton
//         label={!label ? "ReactJS" : label}
//         selected={selectedValue === 'option2'}
//         onSelect={() => setSelectedValue('option2')}
//       />
//       <RadioButton
//         label={!label ? "ReactJS" : label}
//         selected={selectedValue === 'option3'}
//         onSelect={() => setSelectedValue('option3')}
//       />
//     </View>
//   );
// };

// export default RadioButtons;
