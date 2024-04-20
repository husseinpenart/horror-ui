import { View, Text } from 'react-native'
import React from 'react'
import { Theme } from './size/Theme';
import provider from '../types/Type';
export const ThemeContext = React.createContext('light');

const ThemeProvider = ({children}:provider) => {
    const isLightTheme = true; 

    const theme:any = {
      colors: isLightTheme ? Theme.activeColors.light : Theme.activeColors.dark,
      typography:Theme.sizes || Theme.percentSizes
    };
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider