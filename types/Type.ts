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
    cap:any,
    autoComplete:any,
    holder:string
    defaultVal:string
    cColor:string,
    read:boolean,
    inputType:any
    numLine:number,
    hide:boolean
    bg:string
    br:number
    bWidth:number
    bColor:string

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
    cap:any,
    autoComplete:any,
    holder:string
    defaultVal:string
    cColor:string,
    read:boolean,
    inputType:any
    numLine:number,
    hide:boolean
    bg:string
    br:number
    bWidth:number
    bColor:string
    label:string,
    titleActiveSize : number,
    titleInActiveSize : number,
    titleActiveColor : string,
    titleInactiveColor : string,

}