import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import toggle from '../../../../types/Type';

const Toggle = ({
    style,
trackColor,
thumbColor,
onValueChange,
value,
}:toggle) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={trackColor}
        thumbColor={thumbColor}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{...style}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Toggle;