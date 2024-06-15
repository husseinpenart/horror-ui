# react-native-horror-ui

react-native-horror-ui package as component and style base component

## Installation

Install my-project with npm

```bash
npm i react-native-horror
```

## Documentation

[Documentation](https://linktodocumentation) hi everyone this is base ui
component and section to defined pre complete ui structure and and ui components
for you you can use this package for your application in react-native

## Tips

1:use react-native vector icon if you want to add icons

2:more styles are available on source of component and will update soon 3:This
package try to give you best and best 4:This package made by love for you 5:do
not compare this package with other I'll do my best to keep this package
uptodate

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://huabb.ir)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hussain-asadi-1157221b9/)

## Usage/Examples

```javascript
//APP.TSX config
import React, { memo } from "react";
const ThemeProvider = require("./Styles/ThemeProvider").default;
const App = () => {
  return (
    <ThemeProvider value={theme}>
      <AllPack />
    </ThemeProvider>
  );
};
export default memo(App);
```

```javascript
//BLOG CARD
const BlogCard = () => {
  return (
    <Layout>
      <Heading txp="center">blog Cards</Heading>

      <CardView
        bg={Theme.activeColors.light}
        ws={200}
        hs={200}
        el={10}
        sR={5}
        sc="red"
        style={{ margin: 10, alignSelf: "center" }}
      >
        <Images
          uri={
            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          }
          imgS={150}
          imgH={100}
          style={{ margin: 10 }}
        />
        <Heading txp="center" cl={Theme.activeColors.success}>
          beauty of nature
        </Heading>
        <TextView
          numLine={1}
          cl={Theme.activeColors.primary}
          style={{ padding: 10 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur
          officiis consequatur necessitatibus veritatis natus sit adipisci nisi
          enim quos!
        </TextView>
        <RoundedButton
          align="center"
          bw={0.2}
          bc={Theme.activeColors.info}
          Pressing={() => console.log("helllooooo")}
        >
          <TextView>more...</TextView>
        </RoundedButton>
      </CardView>
    </Layout>
  );
};

export default BlogCard;
```

```javascript
//ACCORDION BOX

const data = [
  {
    title: "accordion1",
    name: "Hussein ",
    lastName: "Asadi",
    job: "just nothing",
    jobImage:
      "https://media.licdn.com/dms/image/C4D08AQF7dT4Xu9Mdlw/croft-frontend-shrinkToFit1024/0/1598293904802?e=2147483647&v=beta&t=DNhQO0ro-yffBiu1QvhnBtt5IxzPpFPw19yUZXvE6ZA"
  },
  {
    title: "accordion2",
    name: "John ",
    lastName: "Den",
    job: "just working",
    jobImage:
      "https://assets-global.website-files.com/6509fe179d7033a278a05268/652771a2ad43d990a8837c07_Blog-feature-HR-Pillar.png"
  },
  {
    title: "accordion3",
    name: "Sara ",
    lastName: "Alarez",
    job: "just makeup",
    jobImage:
      "https://blog-imgs-169.fc2.com/g/i/a/giadinhdoisongvn/makeup-artist.jpg"
  }
];
const AccordionBox = () => {
  return (
    <Layout>
      <FlashScreen
        data={images}
        disableVertical
        style={{ marginBottom: "15%" }}
        renderItem={(item) => (
          <View style={styles.container}>
            <Accordion
              title={item.title}
              style={styles.accordTitle}
              cl="white"
              icon={<Icon name="down" size={20} style={styles.icon} />}
            >
              <View style={styles.accordionButton}>
                <Images uri={item.image} style={styles.BackImg} />
                <View style={styles.viewInfo}>
                  <TextView style={styles.infoText}>{item.title}</TextView>
                  <TextView style={styles.infoText}>{item.score}</TextView>
                  <TextView style={styles.infoText}> {item.year}</TextView>
                  <TextView style={styles.infoText}>{item.style}</TextView>
                </View>
              </View>
            </Accordion>
          </View>
        )}
      />
    </Layout>
  );
};

export default AccordionBox;
```

```javascript
//BUTTONS
const Buttons = () => {
  return (
    <Layout ws={"100%"} style={{ flexDirection: "row", flexWrap: "wrap" }}>
      <Heading txp="center">Buttons </Heading>
      <Button>
        <TextView cl={Theme.activeColors.light}>simple Button</TextView>
      </Button>
      <RoundedButton>
        <TextView>Rounded button</TextView>
      </RoundedButton>
      <LoadingButton>
        <TextView cl={Theme.activeColors.light}> loading </TextView>
      </LoadingButton>
      <IconButton>
        <TextView cl={Theme.activeColors.light}>user (your icon)</TextView>
      </IconButton>
    </Layout>
  );
};

export default Buttons;
```

```javascript
//IMAGE GALLERY
const GalleryImages = () => {
  const objects = [
    {
      images:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      images:
        "https://y4v9k2m9.rocketcdn.me/pictures/google-on-stock-photography-authenticity.jpg"
    },
    {
      images:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      images:
        "https://y4v9k2m9.rocketcdn.me/pictures/google-on-stock-photography-authenticity.jpg"
    },
    {
      images:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
      images:
        "https://y4v9k2m9.rocketcdn.me/pictures/google-on-stock-photography-authenticity.jpg"
    },
    {
      images:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    }
  ];
  return (
    <Layout>
      <Heading>image gallery</Heading>
      <Gallery
        data={objects}
        renderItem={(item: any) => (
          <Images
            uri={item.images}
            imgH={100}
            imgS={100}
            style={{ margin: 5 }}
          />
        )}
      />
    </Layout>
  );
};

export default GalleryImages;
```

```javascript
//INPUTS
const Inputs = () => {
  return (
    <Layout>
      <LabelInput
        label="this is label"
        wsize={200}
        bg={Theme.activeColors.info}
      />
      <Input holder="simple form" />
    </Layout>
  );
};

export default Inputs;
```

```javascript
//LOADINGS
const Loadings = () => {
  return (
    <>
      <Heading txp="center">Loading spinners</Heading>
      <Layout style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Spinner size={Theme.sizes.full} color={Theme.activeColors.danger} />
        <Spinner size={Theme.sizes.xxl} color={Theme.activeColors.dark} />
        <Spinner size={Theme.sizes.xl} color={Theme.activeColors.info} />
        <Spinner size={Theme.sizes.lg} color={Theme.activeColors.primary} />
        <Spinner size={Theme.sizes.md} color={Theme.activeColors.secondary} />
        <Spinner size={Theme.sizes.sm} color={Theme.activeColors.danger} />
      </Layout>
    </>
  );
};

export default Loadings;
```

```javascript
//MODAL
const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button Pressing={() => setOpenModal(true)}>
        <TextView cl="white">open modal</TextView>
      </Button>
      <Window
        modalVisible={openModal}
        onRequestClose={() => setOpenModal(false)}
        backStyle={"red"}
        animationType={"slide"}
        backgroundColor="green"
        modalBack={Theme.activeColors.secondary}
      >
        <Heading txp="center">Hi! I'm Here </Heading>
        <Images
          uri={"https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg"}
          imgS={200}
          imgH={200}
        />
      </Window>
    </>
  );
};

export default Modal;
```

```javascript
//SELECTIONS

const Selection = () => {
  const [music, setMusic] = useState(false);
  const [dancing, setDancing] = useState(false);
  const [reading, setReading] = useState(false);
  const [pricing, setPricing] = useState(0);

  const price = [
    {
      name: 100,
      id: 1
    },
    {
      name: 200,
      id: 2
    },
    {
      name: 300,
      id: 3
    }
  ];
  return (
    <>
      <Layout style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <CheckBox
          onPress={() => setMusic(!music)}
          title="Music"
          isChecked={music}
          icons={<Text>icon</Text>}
        />
        <CheckBox
          onPress={() => setDancing(!dancing)}
          title="Dancing"
          isChecked={dancing}
          size={25}
          color="red"
        />
        <CheckBox
          onPress={() => setReading(!reading)}
          title="Reading"
          isChecked={reading}
          size={25}
          color="red"
        />
        {price.map((e, i) => (
          <Radio
            key={i}
            title={e.name}
            onPress={() => setPricing(e.id)}
            selected={e.id === pricing}
          />
        ))}
      </Layout>
      {price.map((e, i) => (
        <RadioButton
          label={e.name}
          key={i}
          selected={pricing === e.id}
          onSelect={() => setPricing(e.id)}
        />
      ))}
      <Toggle
        trackColor={{ false: "red", true: "green" }}
        thumbColor="red"
        value={"huuu"}
      />
    </>
  );
};

export default Selection;
```

```javascript
//PRODUCT CARD

const SmallCard = () => {
  const product = [
    {
      name: "T-shirt",
      price: 100,
      image:
        "https://a.cdn-hotels.com/gdcs/production157/d1079/b215ff33-0c46-4f08-8d34-cd992d722e9d.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    },
    {
      name: "jeans",
      price: 50,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Souk_in_Tunisia_1.jpg/640px-Souk_in_Tunisia_1.jpg"
    },
    {
      name: "shoes",
      price: 200,
      image:
        "https://a.cdn-hotels.com/gdcs/production157/d1079/b215ff33-0c46-4f08-8d34-cd992d722e9d.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    },
    {
      name: "Boot",
      price: 300,
      image:
        "https://www.cuddlynest.com/blog/wp-content/uploads/2022/08/shopping-in-san-francisco-scaled.jpg"
    }
  ];
  return (
    <Layout>
      <Heading txp="center">Flash Screen and Small Cards</Heading>
      <FlashScreen
        data={product}
        horizontal
        disableHorizontal={false}
        renderItem={(item: any) => (
          <CardView el={4} sc="black" ws={100} ht="auto" style={{ margin: 10 }}>
            <Images
              uri={item.image}
              imgS={80}
              imgH={80}
              style={{ margin: 10 }}
            />
            <TextView txp="center" fs={14}>
              {item.name}
            </TextView>
            <TextView txp="center" fs={12}>
              {item.price}
            </TextView>
          </CardView>
        )}
      />
    </Layout>
  );
};

export default SmallCard;
```

```javascript
//TOAST MESSAGE

const ToastMessage = () => {
  return (
    <View>
      <Toast
        long
        message="hi this is toast"
        style={{ backgroundColor: "red", width: 200, height: 50 }}
      >
        <TextView>message</TextView>
      </Toast>
    </View>
  );
};

export default ToastMessage;
```

```javascript
//TOAST MESSAGE
const ToastMessage = () => {
  return (
    <View>
      <Toast
        long
        message="hi this is toast"
        style={{ backgroundColor: "red", width: 200, height: 50 }}
      >
        <TextView>message</TextView>
      </Toast>
    </View>
  );
};

export default ToastMessage;
```

```javascript
//BACKGROUND IMAGE
<ImgBack
  uri={
    "https://husseinpenart.github.io/horror-ui-doc/assets/images/first-5cbe12ae3f6ba8d5998d163feb8eb4a0.webp"
  }
  imgH={300}
  imgS={300}
>
  <TextView>Hellooooo</TextView>
</ImgBack>
```

## Tech Stack

**Tech:** react-native, **language:** typescript,

## API Reference

#### components

| Parameter       | Type                   | Description                                                                    |
| :-------------- | :--------------------- | :----------------------------------------------------------------------------- |
| `Toast`         | `Alert`                | name of using components .                                                     |
| `CardView`      | `View for cards`       | name of using components .                                                     |
| `ThemeProvider` | `theme`                | this need to be in App.js or tsx or jsx to access colors and themes and more . |
| `ImageAvatar`   | `profile`              | name of using components .                                                     |
| `Button`        | `components`           | name of using components .                                                     |
| `IconButton`    | `button with icons`    | name of using components .                                                     |
| `LoadingButton` | `button with loading`  | name of using components .                                                     |
| `RoundedButton` | `border button`        | name of using components .                                                     |
| `Divider`       | `line`                 | name of using components .                                                     |
| `ImagesGallery` | `galllery`             | name of using components .                                                     |
| `Layout`        | `SafeArea`             | name of using as SafeArea .                                                    |
| `Spinner`       | `loading`              | Loading components .                                                           |
| `FloatInput`    | `textinput`            | animation float input .                                                        |
| `Input`         | `textinput`            | simple input .                                                                 |
| `accordion`     | `Accordion box `       | accordion element with animation                                               |
| `FlashScreen`   | `flatlist`             | flashscreen to scroll like a flatlist but with more speed .                    |
| `Scroll`        | `scrollView`           | as scroll View with more speed and flexability.                                |
| `window`        | `Modal`                | widnow use as modal .                                                          |
| `checkbox`      | `checkbox`             | using this require a icon of checked .                                         |
| `radio`         | `radio`                | customize radio but with choosing value.                                       |
| `RadioButton`   | `Radio Button`         | customized radio button .                                                      |
| `Heading`       | `imageBackground`      | for background images and element inside.                                      |
| `ImgBack`       | `Text`                 | for titles and headers .                                                       |
| `TextView`      | `Text`                 | as a text .                                                                    |
| `Theme`         | `cusomize theme usage` | customized sizes by percentage and dp active colors gradient colors .          |

#### and more components

#### Get styles

| Parameter      | Type              | Description                                                          |
| :------------- | :---------------- | :------------------------------------------------------------------- |
| `style`        | `styles`          | **optional**. all styles are optional                                |
| `blur`         | `styles`          | **optional**.blur view for images                                    |
| `theme`        | `ThemeProvider`   | **optional**. sizes, percentSizes, activeColors, Gradient            |
| `Gradient`     | `array of colors` | **optional**. primarysecondarysuccess,danger,warning,info,light,dark |
| `colors`       | `colors`          | **optional**. primarysecondarysuccess,danger,warning,info,light,dark |
| `sizes`        | `size dp`         | **optional**.sm,md,lg,xl,xxl,full                                    |
| `percentSizes` | `size percent`    | **optional**.sm,md,lg,xl,xxl,full                                    |

## Color Reference

| Color           | Hex                                                              |
| --------------- | ---------------------------------------------------------------- |
| primary Color   | ![#726EFF](https://via.placeholder.com/10/726EFF?text=+) #726EFF |
| secondary Color | ![#E6E6E6](https://via.placeholder.com/10/00E676?text=+) #00E676 |
| success Color   | ![#00E676](https://via.placeholder.com/10/00E676?text=+)#00E676  |
| danger Color    | ![#FF5252](https://via.placeholder.com/10/FF5252?text=+) #FF5252 |
| warning Color   | ![#FFC107](https://via.placeholder.com/10/FFC107?text=+) #FFC107 |
| info Color      | ![#2196F3](https://via.placeholder.com/10/2196F3?text=+) #2196F3 |
| light Color     | ![#F5F5F5](https://via.placeholder.com/10/F5F5F5?text=+) #F5F5F5 |
| lightBlue Color | ![#8CCEFF](https://via.placeholder.com/10/8CCEFF?text=+) #8CCEFF |
| orange Color    | ![#FF812B](https://via.placeholder.com/10/FF812B?text=+) #FF812B |
| pink Color      | ![#FF2BC5](https://via.placeholder.com/10/FF2BC5?text=+) #FF2BC5 |
| darkGreen Color | ![#003901](https://via.placeholder.com/10/003901?text=+) #003901 |
| yellow Color    | ![#FFE033](https://via.placeholder.com/10/FFE033?text=+) #FFE033 |

## Authors

- [@husseinAsadi](https://huabb.ir)

## License

[MIT](https://choosealicense.com/licenses/mit/)
