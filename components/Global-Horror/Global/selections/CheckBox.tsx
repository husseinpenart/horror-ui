import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// @ts-ignore

const CheckBox = ({Pressing, icons,title}: any) => {
  // const iconName = props.isChecked ?
  // 	"checkbox-marked" : "checkbox-blank-outline";

  return (
    <View style={styles.container}>
      <Pressable onPress={Pressing}>
        {/* <MaterialCommunityIcons
          name={props.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={props.size}
          color={props.color}
        />
         */}
      {Pressing ? icons : icons}
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    marginTop: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
    fontWeight: '600',
  },
});
