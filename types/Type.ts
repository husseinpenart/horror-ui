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
    txp: string
}

export default interface ImageViewProps {
    children: React.ReactNode,
    uri: string,
    imgS: number,
    imgH: number,
    style: any | {},
    alignSelf: string,
    borderRadius: number,
    resizeMode: string
}

