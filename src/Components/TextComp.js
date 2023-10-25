//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import { textScale } from '../styles/responsiveSize';

const TextComp = ({
    text = '',
    style = {},
    children,
    ...props
}) => {

    return (
            <Text 

            style={{
                ...styles.textStyle, 
                ...style,
        
            }}
            {...props}
            >{text} {children}</Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: fontFamily.regular,
        color: colors.blackColor,
        fontSize:textScale(12),
        textAlign:'left'
    },
});


export default TextComp;
