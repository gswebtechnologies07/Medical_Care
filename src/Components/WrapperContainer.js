//import liraries
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../styles/colors';

const WrapperContainer = ({
    style = {},
    children
}) => {

    return (
        <View style={{
            ...styles.container,
            ...style,
            backgroundColor: colors.whiteColor
        }}>
            <SafeAreaView style={{ flex: 1 }}>
                {children}
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor
    },
});

export default WrapperContainer;
