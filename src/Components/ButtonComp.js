//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, textScale } from '../styles/responsiveSize';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const ButtonComp = ({
    onPress = () => { },
    text = '',
    style = {},
    textStyle = {},
    Img = null,
    Img2= null,
    imgStyle =''
}) => {
    return (
        // <TouchableOpacity activeOpacity={0.5}>
        <LinearGradient
            colors={['#3F6791', '#FFFFFF']}
            style={{ ...styles.container, ...style }}
            start={{ x: 0.25, y: 0 }}
            end={{ x: 1.3, y: 1 }}
        >
            <Image source={Img} style={imgStyle}/>
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.7}>
                <Text style={{ ...styles.textStyle, ...textStyle }}>{text}</Text>
                <View />
            </TouchableOpacity>
            <Image source={Img2} style={imgStyle}/>
        </LinearGradient>
        // </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blueColor,
        // height: moderateScale(35),
        // width: moderateScale(150),
        paddingHorizontal:moderateScale(40),
        paddingVertical: moderateScale(7),
        borderRadius: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    textStyle: {
        fontFamily: fontFamily.medium,
        color: colors.whiteColor,
        fontSize: textScale(18)
    }
});

//make this component available to the app
export default ButtonComp;