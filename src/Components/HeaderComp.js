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
             >
                <Image source={imagePath.icCheckBlack} />
            </TouchableOpacity>
            <Image source={imagePath.icLogo} style={{ left: 50 }} />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: moderateScale(80),
        flexDirection: 'row',
        marginHorizontal: moderateScale(10),
        alignItems: 'center',
        marginTop:moderateScale(10)
    },
});

//make this component available to the app
export default HeaderComp;