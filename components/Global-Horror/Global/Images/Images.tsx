import { View, Text, Image, useWindowDimensions } from 'react-native'
import React, { memo } from 'react'
import ImageViewProps from '../../../../types/Type';

const Images = ({ uri,
    imgS,
    imgH,
    style,
    alignSelf,
    borderRadius,
    resizeMode,
}: ImageViewProps) => {
    return (
        <View>

            <Image source={{ uri: uri }} style={

                [

                    {
                        width: !imgS ? 200 : imgS ,
                        height: !imgH ? 100 : imgH,
                        alignSelf: !alignSelf ? 'center' : alignSelf,
                        borderRadius: !borderRadius ? 5 : borderRadius,
                        resizeMode: !resizeMode ? '' : resizeMode,
                        ...style ,
                    }

                ]

            }
            />
        </View>
    )
}

export default memo(Images)