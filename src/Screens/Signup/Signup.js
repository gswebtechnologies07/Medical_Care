import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import HeaderComp from '../../Components/HeaderComp'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import TextInputComp from '../../Components/TextInputComp'
import ButtonComp from '../../Components/ButtonComp'
import fontFamily from '../../styles/fontFamily'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../styles/colors'
import navigationStrings from '../../Navigations/navigationStrings'
import validator from '../../Utils/validations';
import { showError } from '../../Utils/helperFunction';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { SignupAction } from '../../redux/Action/SignupAction'


const Signup = (props) => {

  const dispatch = useDispatch();
  const [secureText, setSecureText] = useState(false)
  const [loader, setLoader] = useState(false);

  const [state, setState] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const { name, email, password, password_confirmation, mobile, } = state
  const updateState = (data) => setState(() => ({ ...state, ...data }))

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };


  const isValidData = () => {
    const error = validator({
      name,
      mobile,
      email,
      password,
      password_confirmation
    })
    if (error) {
      showError(error)
      return false
    }
    return true
  }

  const onSignup = () => {

    const checkValid = isValidData()
    if (checkValid) {
      SignupData();
      // alert("hit api")
    }
  }

  const SignupData = () => {
    setLoader(true);
    const data = {
      name: state.name,
      mobile: state.mobile,
      email: state.email,
      password: state.password,
      password_confirmation: state.password_confirmation,
    }
    dispatch(SignupAction(data)).then(async (response) => {
      console.log( "response_in_signup", response)
      if (response?.status === "success") {
        setLoader(false);
        await AsyncStorage.setItem("token",response?.token);
        Alert.alert("Signup success")
       props?. navigation?.navigate(navigationStrings.LOGIN);
      } else {
        setLoader(false);
        // console.log("email_passwordemail_passwordemail_password", response);
        Alert.alert("Email already exists")
      }
    })
  }

  return (
    <WrapperContainer>
      <HeaderComp />

      <KeyboardAwareScrollView>
        <View style={{ height: height / 1.05 }}>
          <View style={styles.container}>
            <Text style={styles.mainText}>Registration </Text>
            <Text style={styles.mainText2}>For the easiest healthcare & consultation let's</Text>
            <Text style={styles.mainText3}>create an account</Text>
          </View>

          <View style={{ flex: 0.60, top: moderateScale(10) }}>
            <TextInputComp
              value={name}
              placeholder='Name'
              // onChangeText={(value) => setName(value)}
              onChangeText={(name) => updateState({ name })}

            />

            <TextInputComp
              value={mobile}
              placeholder='Mobile Number'
              // onChangeText={(value) => setMobileNum(value)}
              onChangeText={(mobile) => updateState({ mobile })}
            />

            <TextInputComp
              value={email}
              placeholder='Email Address'
              // onChangeText={(value) => setEmail(value)}
              onChangeText={(email) => updateState({ email })}
            />


            <View style={{ flexDirection: 'row', left: moderateScale(20) }}>
              <TextInputComp
                value={password}
                maxLength={10}
                placeholder='Password'
                // onChangeText={(value) => setPassword(value)}
                onChangeText={(password) => updateState({ password })}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={{ right: moderateScale(40) }}>
                <FontAwesome name={secureText ? "eye" : "eye-slash"}
                  size={24} color={colors.blackColor} style={{ top: moderateScale(12) }} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', left: moderateScale(20) }}>
              <TextInputComp
                value={password_confirmation}
                maxLength={10}
                placeholder='Confirm Password'
                // onChangeText={(value) => setPassword(value)}
                onChangeText={(password_confirmation) => updateState({ password_confirmation })}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={{ right: moderateScale(40) }}>
                <FontAwesome name={secureText ? "eye" : "eye-slash"}
                  size={24} color={colors.blackColor} style={{ top: moderateScale(12) }} />
              </TouchableOpacity>
            </View>

            <View style={{ top: moderateScale(30) }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: colors.blueColor, marginHorizontal: moderateScaleVertical(30) }} />
                <Text style={styles.orText}>or</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: colors.blueColor, marginHorizontal: moderateScaleVertical(30) }} />
              </View>

              <View style={styles.bottomText}>
                <Text style={styles.accText}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => props?.navigation?.navigate(navigationStrings.LOGIN)}
                >
                  <Text style={styles.signinText}>Sign in</Text>
                  <View style={{ height: 1, backgroundColor: colors.blueColor, marginLeft: moderateScale(8) }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 0.2, justifyContent: 'center', bottom: moderateScale(10) }} activeOpacity={0.7} onPress={onSignup}>
            <ButtonComp
              text='Sign up'
            />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>

    </WrapperContainer >
  )
}

export default Signup

const styles = StyleSheet.create({
  container:
  {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    fontSize: textScale(28),
    color: 'black',
    fontFamily: fontFamily.bold
  },
  mainText2: {
    fontSize: textScale(12),
    color: 'black',
    paddingHorizontal: moderateScaleVertical(60),
    alignSelf: 'center',
    fontFamily: fontFamily.regular,
    top: moderateScale(8)
  },
  mainText3: {
    fontSize: textScale(12),
    color: 'black',
    fontFamily: fontFamily.regular,
    top: moderateScale(8)
  },
  accText: {
    color: 'black',
    fontSize: textScale(14),
    fontFamily: fontFamily.semiBold
  },
  signinText: {
    color: '#3F6791',
    fontSize: textScale(14),
    fontFamily: fontFamily.bold,
    marginLeft: moderateScale(8)
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    top: moderateScale(20)
  },
  orText: {
    fontSize: textScale(16),
    fontFamily: fontFamily.semiBold
  },
})

