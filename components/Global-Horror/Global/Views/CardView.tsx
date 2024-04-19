import { View, Text, StyleSheet } from 'react-native'
import React, { Children, memo } from 'react'
import CardViewProps from '../../../../types/Type'


const CardView = ({ 
    children,
    bg,
    ws,
    ht,
    bd,
    el,
    sc,
    sfw,
    sfh,
    style,
    sho,
    sR,

 }: CardViewProps) => {
    return (
        <View style={{
            backgroundColor: bg,
            width: ws,
            height: ht,
            borderRadius: bd,
            shadowColor: sc,
            shadowOffset: {
                width: sfw,
                height: sfh,
            },
            shadowOpacity:sho,
            shadowRadius: sR,
            elevation: el,
            ...style
        } }>
            {children}

        </View>
    )
}

export default memo(CardView)