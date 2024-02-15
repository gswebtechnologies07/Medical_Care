//import liraries
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import { useNavigation } from '@react-navigation/native';

// create a component
const HeaderComp = ({
    style = {},
}) => {
    const navigation = useNavigation()

    return (
        <View style={{ ...styles.container, ...style }}>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ right: moderateScale(55), top: moderateScale(3) }}
            >
                <Image source={imagePath.icCheckBlack} />
            </TouchableOpacity>
            <Image source={imagePath.icLogo} style={{}} />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        height: moderateScale(80),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(10)
    },
});

//make this component available to the app
export default HeaderComp;