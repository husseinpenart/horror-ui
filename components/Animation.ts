import React, { useEffect, useRef } from 'react';
import { Animated, UIManager, LayoutAnimation } from 'react-native';

export const useAnimation = (value = 0, toValue = 1, delay = 0, duration = 500, useNativeDriver = true) => {
    const animation = useRef(new Animated.Value(value)).current;
    const startAnimation = () => {
        Animated.timing(animation, {
            toValue,
            delay,
            duration,
            useNativeDriver
        }).start();
    };
    useEffect(() => {
        startAnimation();
    }, []);
    return [animation];
};

export const useAnimationXY = (xValue:any = 0, yValue:any = 0,  toValue = { x: 1, y: 1 }, delay = 1000, duration = 500) => {
    const animation = useRef(new Animated.ValueXY(xValue, yValue)).current;
    const startAnimation = () => {
        Animated.timing(animation, {
            toValue,
            delay,
            duration
        }).start();
    }
    useEffect(() => {
        startAnimation();
    }, []);
    return [animation];
};

export const useLayoutAnimation = (duration = 250) => {
    UIManager.setLayoutAnimationEnabledExperimental && 
    UIManager.setLayoutAnimationEnabledExperimental(true);
    const CONFIG = {
        duration,
        create: {
            type: LayoutAnimation.Types.easeOut,
            property: LayoutAnimation.Properties.opacity
        },
        update: {
            type: LayoutAnimation.Types.easeInEaseOut
        }
    };
    LayoutAnimation.configureNext(CONFIG);
};

export const enableAnimation = () => {
    UIManager.setLayoutAnimationEnabledExperimental && 
    UIManager.setLayoutAnimationEnabledExperimental(true);
};
