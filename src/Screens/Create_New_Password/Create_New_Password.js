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
import { NewPasswordAction } from '../../redux/Action/NewPasswordAction';
import AsyncStorage from "@react-native-async-storage/async-storage"

const Forgot_Password = (props) => {
  // console.log(navigation,'navigationnavigation')

  // const value = route?.key
  // const [email, setEmail] = useState('')
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email:'',
    password: '',
    passwordConfirm: '',

  })

  const {email, password, passwordConfirm } = state
  const updateState = (data) => setState(() => ({ ...state, ...data }))

  const isValidData = () => {
    const error = validator({
      email,
      password,
      passwordConfirm
    })
    if (error) {
      showError(error)
      return false
    }
    return true
  }

  const newPassword = () => {

    const checkValid = isValidData()
    if (checkValid) {
      NewPasswordData();
      // navigation.navigate(navigationStrings.LOGIN)

    }
  }

  const NewPasswordData = () => {
    const data = {
      email:state.email,
      password: state.password,
      password_confirmation: state.passwordConfirm,
    }
    // console.log(data, "datadata")
    dispatch(NewPasswordAction(data)).then(async (response) => {
      console.log(response, 'NewPasswordActionNewPasswordAction')

      if (response?.success === true) {
        try {
          await AsyncStorage.setItem("token", response?.token);
          Alert.alert("Password Reset Success")
          props?.navigation?.navigate(navigationStrings.LOGIN);
      } catch (error) {
          console.error('Error saving item:', error);

      }
      } else {
        Alert.alert("Invalid Password")
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
              <Text style={styles.LoginText}>Create new</Text>
              <Text style={styles.LoginText}>password</Text>
            </View>
            <View style={{ flex: 0.50, top: moderateScale(20) }}>


            <TextInputComp
                value={email}
                placeholder='Email Address'
                // onChangeText={(value) => setEmail(value)}
                onChangeText={(email) => updateState({ email })}
              />

              <TextInputComp
                value={password}
                placeholder='New Password'
                // onChangeText={(value) => setEmail(value)}
                onChangeText={(password) => updateState({ password })}
              />
              <TextInputComp
                value={passwordConfirm}
                placeholder='Confirm Password'
                // onChangeText={(value) => setEmail(value)}
                onChangeText={(passwordConfirm) => updateState({ passwordConfirm })}
              />
              <TouchableOpacity style={{ top: moderateScale(30) }} onPress={newPassword} activeOpacity={0.7}>
                <ButtonComp
                  text='Reset Password'
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
