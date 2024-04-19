import { View, Text, StyleSheet } from "react-native";
import React, { FunctionComponent, memo } from "react";
const CardView  = require('../Global-Horror/Global/Views/CardView').default;
const TextView = require('../Global-Horror/Global/Text/TextView').default 
import CardViewProps from '../../types/Type';
import TextViewProps from '../../types/Type';
const Images  = require("../Global-Horror/Global/Images/Images").default;

const Card: FunctionComponent<CardViewProps> | FunctionComponent<TextViewProps> = () => {
    return (

        <CardView
            bg={'white'}
            el={10}
            sR={20}
            ws={200}
            ht={200}
            bd={20}
            sc={'black'}
            sfw={0}
            sfh={0}
            sho={0.5}
            fs={20}
            fF={'sans-serif'}
            fW={'bold'}
            txp={'center'}
            style={{ alignSelf: 'center' }}
        >
            {/* // for using borderRadius u most disable resize modes */}
             <Images uri={'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'}
            imgS={100}
            imgH={100}
            alignSelf={'center'}
            borderRadius={25}
            // resizeMode={'contain'}
            style={{alignSelf:'center'}}
             
             /> 
            <TextView fs={20} fF={'sans-serif'} fW={'bold'} txp={'center'} style={{}}>Card</TextView> 

        </CardView>

    );
};


export default memo(Card)