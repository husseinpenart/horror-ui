
# react-native-horror-ui

hi everyone this is base ui component and section to defined pre complete ui structure and and ui components for you you can use this package for your application in react-native 


## Installation

Install my-project with npm

```bash
  npm install horror-ui

```
    
## Demo

demos and examples images


## Documentation

[Documentation](https://linktodocumentation)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://huabb.ir)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hussain-asadi-1157221b9/)



## Usage/Examples

```javascript
import Button from 'horro-ui';

import TextView from 'horro-ui';

import CardView from 'horro-ui';
import { Theme } from 'horro-ui/size/Theme';
import ThemeProvider 'horro-ui'

const App = ()=>{
    return(
    <ThemeProvider>
    <CardView style={{padding: 10,}} el={10} bd={20} sc={Theme.activeColors.info}>
      <Button wsize={Theme.percentSizes.full} hsize={50} br={Theme.sizes.md} style={{padding: 10,}}>
        <TextView  fs={30} cl={Theme.activeColors.light}>hi every one</TextView>
      </Button>
      <LoadingButton bg={Theme.activeColors.success} style={{padding: 10,top: 10,marginBottom:10}}>
        <TextView cl={Theme.activeColors.light} >loading</TextView>
      </LoadingButton>
    </CardView>


    </ThemeProvider>

    )
}

export default App
```


## Tech Stack

**Tech:** react-native,



## API Reference

#### components


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Toast` | `components` | name of using components **Required**.  |
| `CardView` | `components` | name of using components **Required**.  |
| `ThemeProvider` | `theme` | this need to be in App.js or tsx or jsx to access colors and themes and more **Required**.  |
| `ImageAvatar` | `components` | name of using components **Required**.  |
| `Button` | `components` | name of using components **Required**.  |
| `IconButton` | `components` | name of using components **Required**.  |
| `LoadingButton` | `components` | name of using components **Required**.  |
| `RoundedButton` | `components` | name of using components **Required**.  |
| `Divider` | `components` | name of using components **Required**.  |
| `Images` | `components` | name of using components **Required**.  |
#### and more components

#### Get styles



| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `style`      | `props` | **optional**. all styles are optional |




## Authors

- [@husseinpenart](https://huabb.ir)

