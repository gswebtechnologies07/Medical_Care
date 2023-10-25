//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';

// create a component
const TextInputComp = ({
    value = '',
    onChangeText,
    placeholder = '',
    secureText = false,
    onPressSecure = () => { },
    inputStyle = {},
    textStyle = {},
    placeholderTextColor = colors.blackColor,
    ...props
}) => {
    return (
        <View style={{
            ...styles.inputStyle,
            ...inputStyle,

        }}>
            <TextInput
                style={{
                    ...styles.textStyle,
                    ...textStyle,
                }}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}

                {...props}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputStyle: {
        height: moderateScale(50),
        width: '90%',
        borderRadius: moderateScale(10),
        borderColor: colors.blueColor,
        borderWidth: moderateScale(1),
        justifyContent: 'center',
        paddingHorizontal: moderateScale(16),
        alignSelf: 'center',
        backgroundColor: colors.whiteColor,
        marginBottom: moderateScaleVertical(16)
    },
    textStyle: {
        fontSize: textScale(14),
        fontFamily: fontFamily.regular,
        flex: 1,
        color: colors.blackColor
    }
});

export default TextInputComp;
