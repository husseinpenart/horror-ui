// <<<<<<<<<<<<<<  ✨ comments for Command 🌟 >>>>>>>>>>>>>>>>
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import {memo} from 'react';
import {radio} from '../../../../types/Type';

/**
 * Radio component for selecting one option from a group.
 * @param {Object} props  The properties passed to the component.
 * @param {boolean} props.selected  Whether the radio is selected or not.
 * @param {string} props.title  The title of the radio.
 * @param {Function} props.onPress  The function to be called on press.
 * @param {Object} props.style  The style object for the container.
 * @param {boolean} props.radioSection  Whether the radio is part of a radio section or not.
 * @param {Function} props.onSelect  The function to be called when an option is selected.
 * @param {string} props.width  The width of the container.
 * @param {string} props.backgroundColor  The background color of the container.
 * @param {string} props.alignSelf  The alignSelf style for the container.
 * @param {string} props.marginBottom  The marginBottom style for the container.
 * @param {string} props.flexDirection  The flexDirection style for the container.
 * @param {string} props.alignItems  The alignItems style for the container.
 * @param {string} props.justifyContent  The justifyContent style for the container.
 * @param {string} props.height  The height of the container.
 * @param {string} props.paddingHorizontal  The paddingHorizontal style for the container.
 * @param {string} props.borderRadius  The borderRadius style for the container.
 * @param {string} props.elevation  The elevation style for the container.
 * @param {string} props.bColor  The border color of the container.
 * @param {string} props.bgColor  The background color of the container.
 * @param {string} props.borderWidth  The border width of the container.
 * @param {string} props.marginHorizontal  The marginHorizontal style for the container.
 * @param {string} props.marginVertical  The marginVertical style for the container.
 * @param {string} props.fontSize  The fontSize style for the text.
 * @param {string} props.textAlign  The textAlign style for the text.
 * @param {string} props.color  The color style for the text.
 */
const Radio = ({
  selected,
  title,
  onPress,
  style,
  radioSection,
  label,
  onSelect,
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
  bgColor,
  borderWidth,
  marginHorizontal,
  marginVertical,
  fontSize,
  textAlign,
  color,
}: radio) => {
 // Return the radio component based on whether it is part of a radio section or not
  if (radioSection) {
    // ...
    return (
      <TouchableHighlight underlayColor={'transparent'} onPress={onPress}>
        <View
          style={[
            {
              width: !width ? '90%' : width,
              backgroundColor: !backgroundColor ? '#fff' : backgroundColor,
              alignSelf: !alignSelf ? 'center' : alignSelf,
              marginBottom: !marginBottom ? 0 : marginBottom,
              flexDirection: !flexDirection ? 'row' : flexDirection,
              alignItems: alignItems ? 'center' : alignItems,
              justifyContent: !justifyContent
                ? 'spacebetween'
                : justifyContent,
              height: !height ? 45 : height,
              paddingHorizontal: !paddingHorizontal ? 0 : paddingHorizontal,
              borderRadius: !borderRadius ? 10 : borderRadius,
              elevation: !elevation ? 2 : elevation,
            },
            style,
          ]}>
          <View
            style={[
              {
                width: !width ? 20 : width,
                height: !height ? 20 : height,
                borderWidth: !borderWidth ? 1 : borderWidth,
                borderRadius: !borderRadius ? 20 : borderRadius,
              },

              {borderColor: selected && !bColor ? '#061DDB' : bColor},
            ]}>
            {selected ? (
              <View
                style={[
                  {
                    width: !width ? 14 : width,
                    height: !height ? 14 : height,
                    borderRadius: !borderRadius ? 20 : borderRadius,
                  },
                  {
                    borderColor: selected && !bColor ? '#061DDB' : bColor,
                    backgroundColor: selected && !bgColor ? '#061DDB' : bgColor,
                  },
                ]}
              />
            ) : null}
          </View>

          <Text
            style={{
              marginHorizontal: !marginHorizontal ? 10 : marginHorizontal,
              fontSize: !fontSize ? 14 : fontSize,
              textAlign: !textAlign ? 'right' : textAlign,
              color: !color ? '#424242' : color,
            }}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  } else {
    // ...
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            {
              width: !width ? '90%' : width,
              alignSelf: !alignSelf ? 'center' : alignSelf,
              marginVertical: !marginVertical ? 10 : marginVertical,
              flexDirection: !flexDirection ? 'row' : flexDirection,
              alignItems: alignItems ? 'center' : alignItems,
              justifyContent: !justifyContent ? 'flexend' : justifyContent,
            },
            style,
          ]}>
          <Text
            style={{
              marginHorizontal: !marginHorizontal ? 10 : marginHorizontal,
              fontSize: !fontSize ? 14 : fontSize,
              textAlign: !textAlign ? 'right' : textAlign,
              color: !color ? '#424242' : color,
            }}>
            {title}
          </Text>

          <View
            style={[
              {
                width: !width ? 20 : width,
                height: !height ? 20 : height,
                borderWidth: !borderWidth ? 1 : borderWidth,
                borderRadius: !borderRadius ? 20 : borderRadius,
                alignItems: 'center',
                justifyContent: 'center',
              },
              {borderColor: selected && !bColor ? '#EB5757' : bColor},
            ]}>
            {selected ? (
              <View
                style={[
                  {
                    width: 14,
                    height: 14,
                    borderRadius: 20,
                  },
                  {
                    borderColor: selected && !bColor ? '#EB5757' : bColor,
                    backgroundColor: selected && !bgColor ? '#EB5757' : '#fff',
                  },
                ]}
              />
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

export default memo(Radio);

