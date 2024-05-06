import { View, Text } from "react-native";
import React from "react";
import Layout from "../../components/Global-Horror/Global/Views/Layout";
import LabelInput from "../../components/Global-Horror/Global/inputs/FloatInput";
import { Theme } from "../../Styles/size/Theme";
import Input from "../../components/Global-Horror/Global/inputs/Input";

const Inputs = () => {
  return (
    <Layout>
      <LabelInput
        label="this is label"
        wsize={200}
        bg={Theme.activeColors.info}
      />
      <Input holder="simple form" />
    </Layout>
  );
};

export default Inputs;
