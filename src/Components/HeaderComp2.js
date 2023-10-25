//import liraries
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { moderateScale, textScale } from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const HeaderComp = ({
    text = '',
    style = {},
    textStyle = {},
}) => {
    const navigation = useNavigation()

    return (
        <LinearGradient
            colors={['#3F6791', '#FFFFFF']}
            style={{ ...styles.container, ...style }}
            start={{ x: 0.25, y: 0 }}
            end={{ x: 1.3, y: 1 }}
        >
            <TouchableOpacity
                onPress={() => navigation.goBack()} >
                <Image source={imagePath.icBack} />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                <Text style={{ ...styles.textStyle, ...textStyle }}>{text}</Text>
            </View>

        </LinearGradient>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: moderateScale(80),
        flexDirection: 'row',
        paddingHorizontal: moderateScale(10),
        alignItems: 'center',
        backgroundColor: colors.blueColor,
    },
    textStyle: {
        fontFamily: fontFamily.medium,
        color: colors.whiteColor,
        fontSize: textScale(20),
        alignSelf: 'center',
    }
});

export default HeaderComp;