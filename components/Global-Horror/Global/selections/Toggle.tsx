import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { toggle } from "../../../../types/Type";

const Toggle = ({
  style,
  trackColor,
  thumbColor,
  onValueChange,
  value
}: toggle) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      trackColor={trackColor}
      thumbColor={thumbColor}
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={{ ...style }}
    />
  );
};

const styles = StyleSheet.create({});

export default Toggle;
