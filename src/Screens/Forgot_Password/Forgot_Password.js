import { StyleSheet, Text, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import fontFamily from '../../styles/fontFamily'
import WrapperContainer from '../../Components/WrapperContainer'
import ButtonComp from '../../Components/ButtonComp'
import HeaderComp from '../../Components/HeaderComp'
import TextInputComp from '../../Components/TextInputComp'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import navigationStrings from '../../Navigations/navigationStrings'
import colors from '../../styles/colors'
import validator from '../../Utils/validations';
import { showError } from '../../Utils/helperFunction';
import { useDispatch } from 'react-redux';
import { ForgotPasswordAction } from '../../redux/Action/ForgotPasswordAction'

const Forgot_Password = (props) => {
  console.log(props,"ppropspropspropsprops")

  // const [email, setEmail] = useState('')
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
  })

  const { email } = state
  const updateState = (data) => setState(() => ({ ...state, ...data }))

  const isValidData = () => {
    const error = validator({
      email,
    })
    if (error) {
      showError(error)
      return false
    }
    return true
  }

  const onOtpVerify = () => {

    const checkValid = isValidData()
    if (checkValid) {
      ForgotPasswordData()
    }
  }

  const ForgotPasswordData = () => {
    const data = {
      email: state.email,
    }
    dispatch(ForgotPasswordAction(data)).then(async (response) => {
      console.log(response, 'eresponseresponse')
      if (response?.success === true) {
        console.log('trueee')
        props?. navigation?.navigate(navigationStrings.OTP_VERIFICATION)
      } else {
        Alert.alert("Invalid Email")
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
          <View style={{ height: height / 1.4, justifyContent: 'center' }}>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.LoginText}>Forgot</Text>
              <Text style={styles.LoginText}>password ?</Text>
            </View>
            <View style={{ flex: 0.50, top: moderateScale(20) }}>
              <TextInputComp
                value={email}
                placeholder='Enter Your Email Address'
                // onChangeText={(value) => setEmail(value)}
                onChangeText={(email) => updateState({ email })}
              />
              <TouchableOpacity style={{ top: moderateScale(30) }} onPress={onOtpVerify} activeOpacity={0.7}>
                <ButtonComp
                  text='Send Code '
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}
export default Forgot_Password

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:'100%',
    backgroundColor: '#fff'
  },
  accText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  forgotPassText: {
    color: '#3F6791',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(10)
  },
  LoginText: {
    fontSize: textScale(32),
    color: colors.blackColor,
    fontFamily: fontFamily.semiBold
  }
})
