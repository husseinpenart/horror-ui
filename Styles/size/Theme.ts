import { theme } from "../../types/Type"

const sizes = {
    sm: 10,
    md: 50,
    lg: 100,
    xl: 200,
    xxl: 300,
    full: 400
}
const percentSizes = {
    sm: '10%',
    md: '20%',
    lg: '30%',
    xl: '50%',
    xxl: '80%',
    full: '100%'
}
const activeColors = {
    primary: '#726EFF',
    secondary: '#E6E6E6',
    success: '#00E676',
    danger: '#FF5252',
    warning: '#FFC107',
    info: '#2196F3',
    light: '#F5F5F5',
    dark: '#212121',
    lightBlue:'#8CCEFF',
    orange:'#FF812B',
    pink:'#FF2BC5',
    darkGreen:'#003901',
    yellow:'#FFE033'


}
const Gradient = {
    primary: ['#726EFF', '#00E676'],
    secondary: ['#E6E6E6', '#00E676'],
    success: ['#00E676', '#00E676'],
    danger: ['#FF5252', '#FF5252'],
    warning: ['#FFC107', '#FFC107'],
    info: ['#2196F3', '#2196F3'],
    light: ['#F5F5F5', '#F5F5F5'],
    dark: ['#212121', '#212121'],
}

export const Theme: theme = {
    sizes,
    percentSizes,
    activeColors,
    Gradient
}