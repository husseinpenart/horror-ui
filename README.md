
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
//APP.TSX config
import React, {memo} from 'react';
import { Theme } from './Styles/size/Theme';
const ThemeProvider = require('./Styles/ThemeProvider').default;
const App = () => {
  return (
    <ThemeProvider Theme={Theme}>
     <AllPack />
    </ThemeProvider>
  );
};
export default memo(App);
```
```javascript
//BLOG CARD
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

```javascript
//ACCORDION BOX
import {View, Text} from 'react-native';
import React from 'react';
import Accordion from '../../components/Global-Horror/Global/accordion-collapse/Accordion';
import Heading from '../../components/Global-Horror/Global/Text/Heading';
import Layout from '../../components/Global-Horror/Global/Views/Layout';
import TextView from '../../components/Global-Horror/Global/Text/TextView';
import ImageAvatar from '../../components/Global-Horror/Global/avatars/ImageAvatar';
import {Theme} from '../../Styles/size/Theme';
import CardView from '../../components/Global-Horror/Global/Views/CardView';
const data = [
  {
    title: 'accordion1',
    name: 'Hussein ',
    lastName: 'Asadi',
    job: 'just nothing',
    jobImage:
      'https://media.licdn.com/dms/image/C4D08AQF7dT4Xu9Mdlw/croft-frontend-shrinkToFit1024/0/1598293904802?e=2147483647&v=beta&t=DNhQO0ro-yffBiu1QvhnBtt5IxzPpFPw19yUZXvE6ZA',
  },
  {
    title: 'accordion2',
    name: 'John ',
    lastName: 'Den',
    job: 'just working',
    jobImage:
      'https://assets-global.website-files.com/6509fe179d7033a278a05268/652771a2ad43d990a8837c07_Blog-feature-HR-Pillar.png',
  },
  {
    title: 'accordion3',
    name: 'Sara ',
    lastName: 'Alarez',
    job: 'just makeup',
    jobImage:
      'https://blog-imgs-169.fc2.com/g/i/a/giadinhdoisongvn/makeup-artist.jpg',
  },
];
const AccordionBox = () => {
  return (
    <CardView style={{alignSelf:'center', alignItems:'center', padding: 20,margin:10}}>
      {data.map((e, i) => (
        <Accordion title={e.title}>
          <Layout bg={Theme.activeColors.light} ws={200} ht={150} bd={20}>
            <ImageAvatar uri={e.jobImage} style={{top: 10}} />
            <Heading txp="center" style={{top: 10}}>
              {e.name + ' ' + e.lastName}
            </Heading>
            <TextView txp="center" style={{top: 10}}>
              {e.job}
            </TextView>
          </Layout>
        </Accordion>
      ))}
    </CardView>
  );
};

export default AccordionBox;

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
| `accordion` | `Accordion box ` | accordion element with animation  |
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



## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| primary Color | ![#726EFF](https://via.placeholder.com/10/726EFF?text=+) #726EFF |
| secondary Color | ![#E6E6E6](https://via.placeholder.com/10/00E676?text=+) #00E676 |
| success Color | ![#00E676](https://via.placeholder.com/10/00E676?text=+)#00E676 |
| danger Color | ![#FF5252](https://via.placeholder.com/10/FF5252?text=+) #FF5252 |
| warning Color | ![#FFC107](https://via.placeholder.com/10/FFC107?text=+) #FFC107 |
| info Color | ![#2196F3](https://via.placeholder.com/10/2196F3?text=+) #2196F3 |
| light Color | ![#F5F5F5](https://via.placeholder.com/10/F5F5F5?text=+) #F5F5F5 |
| lightBlue Color | ![#8CCEFF](https://via.placeholder.com/10/8CCEFF?text=+) #8CCEFF |
| orange Color | ![#FF812B](https://via.placeholder.com/10/FF812B?text=+) #FF812B |
| pink Color | ![#FF2BC5](https://via.placeholder.com/10/FF2BC5?text=+) #FF2BC5 |
| darkGreen Color | ![#003901](https://via.placeholder.com/10/003901?text=+) #003901 |
| yellow Color | ![#FFE033](https://via.placeholder.com/10/FFE033?text=+) #FFE033 |


## Authors

- [@husseinAsadi](https://huabb.ir)


## License

[MIT](https://choosealicense.com/licenses/mit/)

