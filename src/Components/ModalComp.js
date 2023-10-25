//import liraries
import React from 'react';
import { View, Text, StyleSheet,KeyboardAvoidingView } from 'react-native';
import Modal from "react-native-modal";

// create a component
const ModalComp = ({
    children,
    isVisible = false,
    onBackdropPress = () => { },
    style = {},
    ...props
}) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onBackdropPress}
            style={{ ...styles.style, ...style }}
            {...props}
        >
            {children}
        </Modal>

    );
};

// define your styles
const styles = StyleSheet.create({
    style: {

    }
});

//make this component available to the app
export default ModalComp;
