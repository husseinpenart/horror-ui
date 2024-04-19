import { View, Text, StyleSheet } from 'react-native'
import React, {  memo } from 'react'
import TextViewProps from '../../../../types/Type';


const TextView = ({
    children,
    style,
    fs,
    fF,
    fW,
    txp,
}: TextViewProps) => {
    return (
        <Text style={{
            fontSize: fs,
            fontFamily: fF,
            fontWeight: fW,
            textAlign: txp,
            ...style
        }}>
            {children}

        </Text>
    )
}

export default memo(TextView)