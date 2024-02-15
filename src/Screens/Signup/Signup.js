import { StyleSheet, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import HeaderComp from '../../Components/HeaderComp'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import TextInputComp from '../../Components/TextInputComp'
import fontFamily from '../../styles/fontFamily'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../styles/colors'
import navigationStrings from '../../Navigations/navigationStrings'
import validator from '../../Utils/validations';
import { showError } from '../../Utils/helperFunction';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignupAction } from '../../redux/Action/SignupAction';
import { List } from 'react-native-paper';


const Signup = (props) => {

  const [expanded, setExpanded] = useState(false);

  const [value, setValue] = useState('')
  console.log(value, 'valuevalue')


  const handlePress = () => {
    setExpanded(!expanded);
  };

  const sendDataToOtherPage = (data) => {
    console.log(data, 'woooohhooo')

    setValue(data)
    setExpanded(false);
  };


  const dispatch = useDispatch();
  const [secureText, setSecureText] = useState(false)
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
  })

  const { name, email, password, mobile } = state
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
    setLoading(true);
    const data = {
      name: state.name,
      mobile: state.mobile,
      email: state.email,
      password: state.password,
      user_type: value
    }
    console.log(data, 'datadatadata')
    dispatch(SignupAction(data)).then(async (response) => {
      console.log("response_in_signup", response)
      setLoading(false);
      if (response?.status === "success") {
        await AsyncStorage.setItem("token", response?.token);
        Alert.alert("Signup success")
        props?.navigation?.navigate(navigationStrings.LOGIN);
      } else {
        setLoader(false);
        Alert.alert("Email already exists")
      }
    })
  }

  return (
    <WrapperContainer>
      <HeaderComp />

      <KeyboardAwareScrollView>
        <View style={{ height: height / .75 }}>
          <View style={styles.container}>
            <Text style={styles.mainText}>Registration </Text>
            <Text style={styles.mainText2}>For the easiest healthcare & consultation let's</Text>
            <Text style={styles.mainText3}>create an account</Text>
          </View>

          <View style={{ flex: 0.60, top: moderateScale(10) }}>
            <TextInputComp
              value={name}
              placeholder='Name'
              onChangeText={(name) => updateState({ name })}

            />

            <TextInputComp
              value={mobile}
              placeholder='Mobile Number'
              onChangeText={(mobile) => updateState({ mobile })}
            />

            <TextInputComp
              value={email}
              placeholder='Email Address'
              onChangeText={(email) => updateState({ email })}
            />

            <View style={{ flexDirection: 'row', left: moderateScale(20) }}>
              <TextInputComp
                value={password}
                maxLength={10}
                placeholder="Password"
                onChangeText={password => updateState({ password })}
                secureTextEntry={!secureText}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={{ right: moderateScale(40) }}>
                <FontAwesome
                  name={secureText ? 'eye' : 'eye-slash'}
                  size={24}
                  color={colors.blackColor}
                  style={{ top: moderateScale(12) }}
                />
              </TouchableOpacity>
            </View>


            <View
              style={styles.AccordionMainView}
            >
              <List.Accordion
                title={`${value || 'Select your Type'}`}
                expanded={expanded}
                onPress={handlePress}
                style={styles.AccordionListView}
              >
                <List.Item
                  title="Other"
                  onPress={() => sendDataToOtherPage("Other")}
                />

                <List.Item
                  title="Chemist"
                  onPress={() => sendDataToOtherPage('Chemist')}
                />
                <List.Item
                  title="Doctor"
                  onPress={() => sendDataToOtherPage('Doctor')}
                />
                <List.Item
                  title="Physiotherapist"
                  onPress={() => sendDataToOtherPage('Physiotherapist')}
                />
                <List.Item
                  title="Laboratory"
                  onPress={() => sendDataToOtherPage('Laboratory')}
                />
                <List.Item
                  title="Diagnostic"
                  onPress={() => sendDataToOtherPage('Diagnostic')}
                />
              </List.Accordion>
            </View>


            <View style={{ top: moderateScale(30) }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: colors.blueColor, marginHorizontal: moderateScaleVertical(30) }} />
                <Text style={styles.orText}>or</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: colors.blueColor, marginHorizontal: moderateScaleVertical(30) }} />
              </View>

              <View style={styles.bottomText}>
                <Text style={styles.accText}>Already have an account?</Text>
                <TouchableOpacity
                  onPress={() => props?.navigation?.navigate(navigationStrings.LOGIN)}
                >
                  <Text style={styles.signinText}>Sign in</Text>
                  <View style={{ height: 1, backgroundColor: colors.blueColor, marginLeft: moderateScale(8) }} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={{ justifyContent: 'center', bottom: moderateScale(10), alignSelf: "center", top: moderateScale(40) }} activeOpacity={0.7} onPress={() => onSignup()}>
                {loading ? (
                  <ActivityIndicator size="large" color={colors.blackColor} />
                ) : (
                  <Text style={styles.signUpBtn}>Sign up</Text>
                )}
              </TouchableOpacity>

            </View>
          </View>

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
  AccordionMainView: {
    width: '90%',
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: colors.blueColor,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    padding: moderateScale(2)
  },
  AccordionListView: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(20),
    borderColor: colors.whiteColor,
    borderWidth: moderateScale(1)
  },
  signUpBtn: {
    paddingHorizontal: moderateScale(35),
    paddingVertical: moderateScaleVertical(10),
    backgroundColor: colors.blueColor,
    borderRadius: moderateScale(10),
    color: colors.whiteColor,
    fontSize: moderateScale(16)
  },
})

