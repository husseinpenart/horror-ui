export default interface CardViewProps {
    children: React.ReactNode,
    ws: number,
    ht: number,
    bd: number,
    bg: string,
    el: number,
    sc: string,
    sfw: number
    sfh: number
    style: any,
    sho: number
    sR: number

}
export default interface TextViewProps {
    children: React.ReactNode,
    style: any
    fs: number
    fF: string
    fW: string | number
    txp: string,
    numLine: number
    cl: string
}

export default interface ImageViewProps {
    children: React.ReactNode,
    uri: string,
    imgS: number,
    imgH: number,
    style: any | {},
    alignSelf: string,
    borderRadius: number,
}
export default interface HeadingProps {
    children: React.ReactNode,
    style: any
    fs: number
    fF: string
    fW: string | number
    txp: string,
    cl: string

}
export default interface BorderButton {
    children: React.ReactNode,
    style: any
    bc: string
    bw: number
    bg: string,
    align: string,
    br: number,
    Pressing: any

}
export default interface divider {
    style: any
    wSize: number,
    hSize: number,
    align: string
    bg: string
    change: boolean
    opacity: number,
    underlay: string
}
export default interface button {
    children: React.ReactNode,
    style: any
    bc: string
    bw: number
    bg: string,
    align: string,
    br: number,
    Pressing: any,


}
export default interface loadingButton {
    children: React.ReactNode,
    style: any
    bc: string
    bw: number
    bg: string,
    align: string,
    br: number,
    Pressing: any,
    cl: string,
    size: number
}
export default interface Icon_button {
    children: React.ReactNode,
    style: any
    bc: string
    bw: number
    bg: string,
    align: string,
    br: number,
    Pressing: any,
    icon: any,
    size: number
}
export default interface provider {
    children: React.ReactNode,
}
export default interface layout {
    children: React.ReactNode,
    ws: number,
    ht: number,
    bd: number,
    bg: string,
    el: number,
    sc: string,
    sfw: number
    sfh: number
    style: any,
    sho: number
    sR: number
}

export default interface input {
    style: any
    fs: number
    fF: string
    fW: string | number
    txp: string,
    cl: string,
    wsize: number | string
    hsize: number | string
    cap: any,
    autoComplete: any,
    holder: string
    defaultVal: string
    cColor: string,
    read: boolean,
    inputType: any
    numLine: number,
    hide: boolean
    bg: string
    br: number
    bWidth: number
    bColor: string

}
export default interface LInput {
    style: any
    fs: number
    fF: string
    fW: string | number
    txp: string,
    cl: string,
    wsize: number | string
    hsize: number | string
    cap: any,
    autoComplete: any,
    holder: string
    defaultVal: string
    cColor: string,
    read: boolean,
    inputType: any
    numLine: number,
    hide: boolean
    bg: string
    br: number
    bWidth: number
    bColor: string
    label: string,
    titleActiveSize: number,
    titleInActiveSize: number,
    titleActiveColor: string,
    titleInactiveColor: string,

}

export default interface spinner {
    style: any
    size: number
    color: string
    Animating: boolean
    hidesWhenStopped: boolean
}
export default interface spinner {
    style: any
    size: number
    color: string
    Animating: boolean
    hidesWhenStopped: boolean
}
export default interface avatarImage {
    children: React.ReactNode,
    uri: string,
    imgS: number,
    imgH: number,
    style: any | {},
    alignSelf: string,
    borderRadius: number,
}
export default interface radio {
    selected: any
    title: string
    onPress: any
    style: any
    radioSection: any
    label: string,
    onSelect: any
    width: any
    backgroundColor: string
    alignSelf: string
    marginBottom: number
    flexDirection: string
    alignItems: string
    justifyContent: string
    height: number
    paddingHorizontal: number
    borderRadius: number
    elevation: number,
    bColor: string,
    bgColor: string
    borderWidth: number
    marginHorizontal: number
    fontSize: number
    textAlign: any
    color: string
    marginVertical: number,
    paddingVertical: number
    flex: number
}
export default interface modal {
    modalVisible: boolean,
    onRequestClose: any,
    children: React.ReactNode,
    style: any,
    title: string,
    titleOnclick: boolean,
    noIcon: boolean,
    extraStyle: boolean,
    hasInfo: boolean,
    noTitleStyle: boolean,
    animationType: any
    transparent: boolean
    position: any,
    top: number
    right: number
    zIndex: number
    backgroundColor: string
    modalBack: string
    borderRadius: number
    name: string
    size: number
    color: string
    flex: number
    justifyContent: string
    alignItems: string
    marginTop: number
    height: number
    margin: number
    shadowColor: string
    shWidth: number
    shHeight: number
    shadowOpacity: number
    shadowRadius: number
    elevation: number
    modalStyle: any
    backStyle: any
}
export default interface splash {
    style: any
    inverted: boolean
    horizontal: boolean
    disableVertical: boolean,
    disableHorizontal: boolean
    data: any
    renderItem: any
    numColumns: number
    invertStickyHeaders: any
    store: any
}

export default interface scroll {
    children: React.ReactNode
    style: any,
    horizontal: boolean
    fadeEdge: number
    showsHorizontalScrollIndicator: boolean
    showsVerticalScrollIndicator: boolean
    contentContainerStyle: any
    onScroll: any
    endColor: string
    pagingEnabled: boolean
}

export default interface toggle {
    style: any
    trackColor: any
    thumbColor: string
    onValueChange: any
    value: any
}

export default interface toast{
    message:string
    title:string
    short:any
    long:any
    gravity:any
}