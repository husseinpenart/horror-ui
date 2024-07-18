// import React, {useCallback, useState, useRef, useEffect} from 'react';
// import {
//   Pressable,
//   StyleSheet,
//   Text,
//   View,
//   Animated,
//   Dimensions,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');

// const Drawer = () => {
//   const [open, setOpen] = useState(false);
//   const animation = useRef(new Animated.Value(-width)).current; // start off-screen to the left

//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: open ? 0 : -width,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   }, [open, animation]);

//   const toggleDrawer = useCallback(() => {
//     setOpen(prevOpen => !prevOpen);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Pressable onPress={toggleDrawer} style={styles.button}>
//         <Text>open</Text>
//       </Pressable>
//       <Animated.View
//         style={[styles.drawerView, {transform: [{translateX: animation}]}]}>
//         <Pressable onPress={toggleDrawer} style={styles.closeButton}>
//           <Text>close</Text>
//         </Pressable>
//         <Text>ewfew</Text>
//         <Text>ewfew</Text>
//         <Text>ewfew</Text>
//         <Text>ewfew</Text>
//         <Text>ewfew</Text>
//         <Text>ewfew</Text>
//         <Text>ewfew</Text>
//         <Text>ewfew</Text>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     zIndex: 10000,
//   },
//   button: {
//     marginTop: 50,
//     padding: 10,
//     backgroundColor: 'lightgray',
//     alignSelf: 'center',
//   },
//   drawerView: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: 300,
//     height: height, // Full screen height
//     backgroundColor: 'white',
//     shadowOpacity: 0.58,
//     shadowRadius: 16.0,
//     zIndex: 10000,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 12,
//     },
//     elevation: 24,
//   },
//   closeButton: {
//     padding: 10,
//     backgroundColor: 'lightgray',
//   },
// });

// export default Drawer;
import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {DrawerType} from '../../../../types';

const {width} = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;

const Drawer = ({
  isOpen,
  onClose,
  children,
  backgroundColor,
  style,
}: DrawerType) => {
  const drawerAnimation = useRef(new Animated.Value(-DRAWER_WIDTH)).current;

  const openDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: -DRAWER_WIDTH,
      duration: 300,
      useNativeDriver: false,
    }).start(() => onClose());
  };

  const drawerStyles = [
    styles.drawer,
    {
      backgroundColor: backgroundColor,
      transform: [
        {
          translateX: drawerAnimation,
        },
      ],
    },
  ];

  if (isOpen) {
    openDrawer();
  } else {
    closeDrawer();
  }

  return (
    <Animated.View style={drawerStyles}>
      <TouchableOpacity
        style={{
          ...StyleSheet.absoluteFillObject,
          //   backgroundColor: !backgroundColor
          //     ? 'rg'
          //     : backgroundColor,
          zIndex: 99,
          ...style,
        }}
        onPress={closeDrawer}
      />
      <View style={styles.content}>{children}</View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: DRAWER_WIDTH,

    zIndex: 100,
    flexDirection: 'row',
  },

  content: {
    paddingTop: 50,
    paddingLeft: 20,
  },
});

export default Drawer;
