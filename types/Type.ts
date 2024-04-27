import React from "react";

export interface CardViewProps {
    children?: React.ReactNode,
    ws?: number,
    ht?: number | undefined
    bd?: number,
    bg?: string,
    el?: number,
    sc?: string,
    sfw?: number
    sfh?: number
    style?: any,
    sho?: number
    sR?: number

}
export interface TextViewProps {
    children?: React.ReactNode,
    style?: any
    fs?: number
    fF?: string
    fW?: string | number
    txp?: string,
    numLine?: number
    cl?: string
}

export interface ImageViewProps {
    children?: React.ReactNode,
    uri?: any,
    imgS?: number,
    imgH?: number,
    style?: any | {},
    alignSelf?: string,
    borderRadius?: number,
}
export interface HeadingProps {
    children?: React.ReactNode,
    style?: any | {},
    fs?: number
    fF?: string
    fW?: string | number
    txp?: string,
    cl?: string

}
export interface BorderButton {
    children?: React.ReactNode,
    style?: any
    bc?: string
    bw?: number
    bg?: string,
    align?: string,
    br?: number,
    Pressing?: any
    pd?: number | unknown
    mr?: number | unknown
    underlay?:string


}
export interface divider {
    style?: any
    wSize?: number,
    hSize?: number,
    align?: string
    bg?: string
    change?: boolean
    opacity?: number,
    underlay?: string
}
export interface button {
    children?: React.ReactNode,
    style?: any
    bc?: string
    bw?: number
    bg?: string,
    align?: string,
    br?: number,
    Pressing?: any,
    underlay?:string
    pd?:number
    mr?:number


}
export interface loadingButton {
    children?: React.ReactNode,
    style?: any
    bc?: string
    bw?: number
    bg?: string,
    align?: string,
    br?: number,
    Pressing?: any,
    cl?: string,
    size?: number
    pd?: number | unknown
    mr?: number | unknown
    underlay?:string

}
export interface Icon_button {
    children?: React.ReactNode,
    style?: any
    bc?: string
    bw?: number
    bg?: string,
    align?: string,
    br?: number,
    Pressing?: any,
    icon?: any,
    size?: number
    pd?: number | unknown
    mr?: number | unknown
    underlay?:string
}
export interface provider {
    children?: React.ReactNode,
}
export interface layout {
    children?: React.ReactNode,
    ws?: number | number | string,
    ht?: number | number,
    bd?: number,
    bg?: string,
    el?: number,
    sc?: string,
    sfw?: number
    sfh?: number
    style?: any,
    sho?: number
    sR?: number
}

export interface input {
    style?: any
    fs?: number
    fF?: string
    fW?: string | number
    txp?: string,
    cl?: string,
    wsize?: number | string
    hsize?: number | undefined
    cap?: any,
    autoComplete?: any,
    holder?: string
    Val?: string
    cColor?: string,
    read?: boolean,
    inputType?: any
    numLine?: number,
    hide?: boolean
    bg?: string
    br?: number
    bWidth?: number
    bColor?: string
    defaultVal?:string | undefined

}
export interface LInput {
    style?: any
    fs?: number
    fF?: string
    fW?: string | number
    txp?: string,
    cl?: string,
    wsize?: number | string
    hsize?: number | undefined
    cap?: any,
    autoComplete?: any,
    holder?: string
    Val?: string
    cColor?: string,
    read?: boolean,
    inputType?: any
    numLine?: number,
    hide?: boolean
    bg?: string
    br?: number
    bWidth?: number
    bColor?: string
    label?: string,
    titleActiveSize?: number,
    titleInActiveSize?: number,
    titleActiveColor?: string,
    titleInactiveColor?: string,
    defaultVal?:string

}

export interface spinner {
    style?: any
    size?: number | 'small' | 'large' | undefined;
    color?: string
    Animating?: boolean
    hidesWhenStopped?: boolean
}

export interface avatarImage {
    children?: React.ReactNode,
    uri?: any,
    imgS?: number,
    imgH?: number,
    style?: any | {},
    alignSelf?: string,
    borderRadius?: number,
}
export interface radio {
    selected?: any
    title?:string |{}
    onPress?: any
    style?: any
    radioSection?: any
    label?: string | {},
    onSelect?: any
    width?: any
    backgroundColor?: string
    alignSelf?: string
    marginBottom?: number
    flexDirection?: string
    alignItems?: string
    justifyContent?: string
    height?: number
    paddingHorizontal?: number
    borderRadius?: number
    elevation?: number,
    bColor?: string,
    bgColor?: string
    borderWidth?: number
    marginHorizontal?: number
    fontSize?: number
    textAlign?: any
    color?: string
    marginVertical?: number,
    paddingVertical?: number
    flex?: number,

}
export interface modal {
    modalVisible?: boolean,
    onRequestClose?: any,
    children?: React.ReactNode,
    style?: any,
    title?: string,
    titleOnclick?: boolean,
    noIcon?: boolean,
    extraStyle?: boolean,
    hasInfo?: boolean,
    noTitleStyle?: boolean,
    animationType?: any
    transparent?: boolean
    position?: any,
    top?: number
    right?: number
    zIndex?: number
    backgroundColor?: string
    modalBack?: string
    borderRadius?: number
    name?: string
    size?: number
    color?: string
    flex?: number
    justifyContent?: string
    alignItems?: string
    marginTop?: number
    height?: number
    margin?: number
    shadowColor?: string
    shWidth?: number
    shHeight?: number
    shadowOpacity?: number
    shadowRadius?: number
    elevation?: number
    modalStyle?: any
    backStyle?: any
    width?: number | undefined;
}
export interface splash {
    style?: any
    inverted?: boolean
    horizontal?: boolean
    disableVertical?: boolean,
    disableHorizontal?: boolean
    data?: any
    renderItem?: any
    numColumns?: number
    invertStickyHeaders?: any
    store?: any
    keyExtractor?: any
}

export interface scroll {
    children?: React.ReactNode
    style?: any,
    horizontal?: boolean
    fadeEdge?: number
    showsHorizontalScrollIndicator?: boolean
    showsVerticalScrollIndicator?: boolean
    contentContainerStyle?: any
    onScroll?: any
    endColor?: string
    pagingEnabled?: boolean
}

export interface toggle {
    style?: any
    trackColor?: any
    thumbColor?: string
    onValueChange?: any
    value?: any
}

export interface toast {
    message?: string
    title?: string | {}
    short?: any
    long?: any
    gravity?: any
    style?: any,
    children?: React.ReactNode
}
export interface gallery {
    objects?: [] | {},
    nativeEvent?: any,
    dot?: boolean
    line?: string
    cl?: string
    ws?: number
    hs?: number | undefined
    children?: React.ReactNode
}