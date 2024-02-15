import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import { useDispatch, useSelector } from 'react-redux';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import colors from '../../styles/colors';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import navigationStrings from '../../Navigations/navigationStrings';
import { OtpVerificationAction } from '../../redux/Action/OtpVerificationAction';
import validator from '../../Utils/validations';
import { ForgotPasswordAction } from '../../redux/Action/ForgotPasswordAction';

const OtpVerification = ({ navigation }) => {
  const dispatch = useDispatch();
  const input = useRef(null);

  const [timer, setTimer] = useState(59);
  const [loading, setLoading] = useState(false);
  const [otpInput, setOtpInput] = useState('');

  const resendOtpData = useSelector((state) => state?.ForgotPasswordReducer?.ForgotPassword?.email);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer > 0) setTimer(timer - 1);
    }, 1000);
    return () => (timeout);
  }, [timer]);

  const onResendCode = () => {
    if (timer === 0) {
      setTimer(59);
      ResendOtp();
    }
  };

  const handleCellTextChange = async (text, i) => {
    // You can add logic for handling cell text change if needed
  };

  const isValidData = () => {
    const error = validator({ otp: otpInput });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const showError = (error) => {
    Alert.alert('Error', error);
  };

  const ResendOtp = () => {
    setLoading(true);
    const data = {
      email: resendOtpData,
    };

    dispatch(ForgotPasswordAction(data))
      .then(async (response) => {
        setLoading(false);
        console.log(response, 'ResendOtpresponse');
      })
      .catch((error) => {
        setLoading(false);
        console.error('ResendOtp Error:', error);
      });
  };

  const OtpVerificationData = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      OtpVerify();
    }
  };

  const OtpVerify = () => {
    setLoading(true);
    const data = {
      token: otpInput,
    };

    dispatch(OtpVerificationAction(data))
      .then(async (response) => {
        console.log(response, 'responseresponse');
        setLoading(false);

        if (response?.data.success === true) {
          console.log('trueeeeeeeee');
          navigation.navigate(navigationStrings.Create_New_Password);
        } else {
          setLoading(false);
          Alert.alert('Invalid OTP');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error('OtpVerification Error:', error);
      });
  };

  return (
    <WrapperContainer>
      <HeaderComp />
      <KeyboardAvoidingView
        style={{ flex: 1, margin: moderateScale(16) }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ height: height / 1.3 }}>
            <View
              style={{
                flex: 0.4,
                justifyContent: 'center',
                alignItems: 'center',
                top: moderateScale(30),
              }}>
              <Text style={styles.OtpText}>OTP</Text>
              <Text style={styles.mainText}>
                Please enter the OTP sent to your Email
              </Text>
            </View>

            <View
              style={{
                flex: 0.1,
                paddingHorizontal: moderateScaleVertical(50),
              }}>
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
              <View
                style={{
                  flex: 0.4,
                  alignItems: 'center',
                  top: moderateScale(30),
                }}>
                <Text style={{ fontSize: textScale(14), fontFamily: fontFamily.regular }}>
                  Didn't receive an OTP ?
                </Text>

                <View style={{ top: moderateScale(5) }}>
                  {timer > 0 ? (
                    <Text
                      style={{
                        fontSize: textScale(18),
                        fontFamily: fontFamily.semiBold,
                        color: colors.blackColor,
                      }}>
                      Resend{' '}
                      <Text
                        style={{
                          fontSize: textScale(18),
                          fontFamily: fontFamily.semiBold,
                          color: colors.blueColor,
                        }}>
                        {timer}
                      </Text>{' '}
                    </Text>
                  ) : (
                    <TouchableOpacity onPress={onResendCode} activeOpacity={0.7}>
                      <Text
                        style={{
                          fontSize: textScale(18),
                          fontFamily: fontFamily.semiBold,
                          color: colors.blueColor,
                        }}>
                        Resend OTP
                      </Text>
                      <View style={{ height: 1.5, backgroundColor: colors.blueColor }} />
                    </TouchableOpacity>
                  )}
                </View>
              </View>

              <TouchableOpacity style={styles.btnView} activeOpacity={0.7} onPress={OtpVerificationData}>
                {loading ? (
                  <ActivityIndicator size="large" color={colors.blackColor} />
                ) : (
                  <Text style={styles.btnText}>Verify</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

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
    top: moderateScale(8),
  },
  btnView: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: moderateScale(30),
    backgroundColor:colors.blueColor,
    borderRadius: moderateScale(10),
  },
  btnText: {
    paddingHorizontal: moderateScale(50),
    paddingVertical: moderateScaleVertical(10),
    backgroundColor: colors.skyBuleColor,
    borderRadius: moderateScale(20),
    color: colors.whiteColor,
    fontSize: moderateScale(14),
    fontFamily: fontFamily.bold,
  },
});

export default OtpVerification;
