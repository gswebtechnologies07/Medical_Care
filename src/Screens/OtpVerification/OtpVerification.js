import { View, Text, StyleSheet, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import OTPTextView from 'react-native-otp-textinput';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import colors from '../../styles/colors';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../Navigations/navigationStrings';
import TextComp from '../../Components/TextComp';
import { useDispatch } from 'react-redux'
import { OtpVerificationAction } from '../../redux/Action/OtpVerificationAction';
import validator from '../../Utils/validations';


const OtpVerification = ({navigation}) => {
    // console.log(props, 'acd')
    const dispatch = useDispatch();

    // const data = props?.route?.key
    const [timer, setTimer] = useState(59);


    useEffect(() => {
        const timeout = setTimeout(() => {
            if (timer > 0) setTimer(timer - 1)
        }, 1000);
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [timer])

    const [otpInput, setOtpInput] = useState("");

    const input = useRef(null)

    const onResendCode = () => {
        setTimer(59)
    }


    const handleCellTextChange = async (text, i) => {

    };

    const isValidData = () => {
        const error = validator({
            otp: otpInput
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }
    const OtpVerificationData = async () => {

        const checkValid = isValidData()
        if (checkValid) {
            OtpVerify();
        }
    }
    const OtpVerify = () => {
        const data = {
            token:otpInput
          }
        //   console.log(data,"datadata")
        dispatch(OtpVerificationAction(data)).then(async (response) => {
            console.log(response, 'responseresponse')
            if(response?.data.success === true){
                console.log("trueeeeeeeee")
                navigation.navigate(navigationStrings.Create_New_Password)
            }
        })
    }

    return (
        <WrapperContainer>
            <HeaderComp />
            <KeyboardAvoidingView
                style={{ flex: 1, margin: moderateScale(16) }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ height: height / 1.3 }}>

                        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', top: moderateScale(30) }}>
                            <Text style={styles.OtpText}>OTP</Text>
                            <Text style={styles.mainText}>Please enter the OTP send to your Email </Text>
                        </View>

                        <View style={{ flex: 0.1, paddingHorizontal: moderateScaleVertical(50) }}>
                            <OTPTextView
                                ref={input}
                                textInputStyle={styles.textInputContainer}
                                handleTextChange={setOtpInput}
                                handleCellTextChange={handleCellTextChange}
                                inputCount={6}
                                keyboardType="numeric"
                                autoFocus
                                tintColor={colors.blackColor}
                                offTintColor={colors.grayColor}
                            />
                        </View>
                        <View style={{ flex: 0.5 }}>

                            <View style={{ flex: 0.4, alignItems: 'center', top: moderateScale(30) }}>
                                <Text style={{ fontSize: textScale(14), fontFamily: fontFamily.regular }}>Didn't receive an OTP ?</Text>

                                {/* <TouchableOpacity style={{ top: moderateScale(10) }}> */}

                                <View style={{ top: moderateScale(5) }}>
                                    {timer > 0 ?
                                        <Text style={{ fontSize: textScale(18), fontFamily: fontFamily.semiBold, color: colors.blackColor }}
                                        //  text={"Resend" + 'In'}
                                        >Resend <Text style={{ fontSize: textScale(18), fontFamily: fontFamily.semiBold, color: colors.blueColor }}>{-timer}</Text> </Text>
                                        :
                                        <TouchableOpacity onPress={onResendCode} activeOpacity={0.7}>
                                            <Text style={{ fontSize: textScale(18), fontFamily: fontFamily.semiBold, color: colors.blueColor }}>Resend OTP</Text>
                                            <View style={{ height: 1.5, backgroundColor: colors.blueColor }} />
                                        </TouchableOpacity>
                                    }

                                </View>

                                {/* 
                                    <Text style={{ fontSize: textScale(18), fontFamily: fontFamily.semiBold, color: colors.blueColor }}>Resend OTP</Text>
                                    <View style={{ height: 1.5, backgroundColor: colors.blueColor }} /> */}
                                {/* </TouchableOpacity> */}
                            </View>

                            <TouchableOpacity activeOpacity={0.7} onPress={() => OtpVerificationData()}>
                                <ButtonComp
                                    text='Verify'
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        backgroundColor: colors.grayColor,
        borderBottomWidth: 0,
        borderRadius: 8,
        color: colors.whiteColor,
        width: '12%',
        gap: 10,


    },
    OtpText: {
        fontSize: textScale(32),
        color: 'black',
        fontFamily: fontFamily.bold,
    },
    mainText: {
        fontSize: textScale(13),
        color: colors.blackColor,
        paddingHorizontal: moderateScaleVertical(40),
        alignSelf: 'center',
        fontFamily: fontFamily.regular,
        top: moderateScale(8)
    }

});

export default OtpVerification