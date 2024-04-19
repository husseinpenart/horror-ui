import { View , Text } from "react-native";
import React, { memo } from "react";
const Card  =require('./components/card/Card').default;

const App = () => {
    return (
        <View>
            <Card /> 
        </View>
    );
};
export default memo(App)