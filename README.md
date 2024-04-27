
# react-native-horror-ui

react-native-horror-ui package as component and style base component



## Installation

Install my-project with npm

```bash
npm i react-native-horror
```
    
## Documentation

[Documentation](https://linktodocumentation)
hi everyone this is base ui component and section to defined pre complete ui structure and and ui components for you you can use this package for your application in react-native 

## Tips

1:use react-native vector icon if you want to add icons

2:more styles are available on source of component and will update soon
3:This package try to give you best and best 
4:This package made by love for you
5:do not compare this package with other I'll do my best to keep this package uptodate

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://huabb.ir)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hussain-asadi-1157221b9/)



## Usage/Examples

```javascript
import React from 'react'
import CardView from '../../components/Global-Horror/Global/Views/CardView'
import { Theme } from '../../Styles/size/Theme';
import Images from '../../components/Global-Horror/Global/Images/Images'
import Heading from '../../components/Global-Horror/Global/Text/Heading'
import TextView from '../../components/Global-Horror/Global/Text/TextView'
import RoundedButton from '../../components/Global-Horror/Global/buttons/RoundedButton';
import Layout from '../../components/Global-Horror/Global/Views/Layout';

const BlogCard = () => {
  return (
  <Layout>
      <Heading txp='center'>blog Cards</Heading>

<CardView bg={Theme.activeColors.light} ws={200} hs={200}
 el={10} sR={5} sc='red'style={{margin:10,alignSelf:'center'}}>
  <Images uri={'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'} imgS={150} imgH={100} style={{margin:10}}/>
  <Heading  txp='center' cl={Theme.activeColors.success} >beauty of nature</Heading>
  <TextView numLine={1} cl={Theme.activeColors.primary} style={{padding: 10,}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur officiis consequatur necessitatibus veritatis natus sit adipisci nisi enim quos!</TextView>
  <RoundedButton align='center' bw={0.2} bc={Theme.activeColors.info} Pressing={()=>console.log('helllooooo')}><TextView>more...</TextView></RoundedButton>
</CardView>
  </Layout>
  )
}

export default BlogCard
```


## Tech Stack

**Tech:** react-native,
**language:** typescript,



## API Reference

#### components


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Toast` | `Alert` | name of using components .  |
| `CardView` | `View for cards` | name of using components .  |
| `ThemeProvider` | `theme` | this need to be in App.js or tsx or jsx to access colors and themes and more .  |
| `ImageAvatar` | `profile` | name of using components .  |
| `Button` | `components` | name of using components .  |
| `IconButton` | `button with icons` | name of using components .  |
| `LoadingButton` | `button with loading` | name of using components .  |
| `RoundedButton` | `border button` | name of using components .  |
| `Divider` | `line` | name of using components .  |
| `ImagesGallery` | `galllery` | name of using components .  |
| `Layout` | `SafeArea` | name of using as SafeArea .  |
| `Spinner` | `loading` | Loading  components .  |
| `FloatInput` | `textinput` |animation float input .  |
| `Input` | `textinput` | simple input .  |
| `FlashScreen` | `flatlist` | flashscreen to scroll like a flatlist but with more speed .  |
| `Scroll` | `scrollView` | as scroll View with more speed and flexability.  |
| `window` | `Modal` | widnow use as modal .  |
| `checkbox` | `checkbox` | using this require a icon of checked .  |
| `radio` | `radio` | customize radio but with choosing value.  |
| `RadioButton` | `Radio Button` | customized radio button .  |
| `Heading` | `Text` | for titles and headers .  |
| `TextView` | `Text` | as a text .  |
| `Theme` | `cusomize theme usage` | customized sizes by percentage and dp active colors gradient colors .  |
#### and more components

#### Get styles



| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `style`| `styles` | **optional**. all styles are optional |
| `theme`| `ThemeProvider` | **optional**. sizes, percentSizes, activeColors, Gradient |
| `Gradient`| `array of colors` | **optional**. primarysecondarysuccess,danger,warning,info,light,dark |
| `colors`| `colors` | **optional**. primarysecondarysuccess,danger,warning,info,light,dark |
| `sizes`| `size dp` | **optional**.sm,md,lg,xl,xxl,full |
| `percentSizes`| `size percent` | **optional**.sm,md,lg,xl,xxl,full |




## Authors

- [@husseinAsadi](https://huabb.ir)


## License

[MIT](https://choosealicense.com/licenses/mit/)

