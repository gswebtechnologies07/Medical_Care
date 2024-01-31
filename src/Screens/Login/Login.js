import {
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import fontFamily from '../../styles/fontFamily';
import WrapperContainer from '../../Components/WrapperContainer';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputComp from '../../Components/TextInputComp';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import navigationStrings from '../../Navigations/navigationStrings';
import colors from '../../styles/colors';
import validator from '../../Utils/validations';
import {showError} from '../../Utils/helperFunction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {LoginAction} from '../../redux/Action/LoginAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import imagePath from '../../constants/imagePath';
import {useSelector} from 'react-redux';
import * as Types from '../../redux/Types/Types';

const Login = props => {
  const dispatch = useDispatch();
  const [secureText, setSecureText] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [loader, setLoader] = useState(false);
  // {console.log(userToken,'userTokenuserTokenuserToken')}
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  console.log('_Props', props);
  const {email, password} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const profileId = useSelector(state => state?.LoginReducer?.Login);

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };

  const isValidData = () => {
    const error = validator({
      email,
      password,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };
  const onLogin = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      await LoginData();
      console.log('_login', profileId);
      // navigation.navigate(navigationStrings.TAB_ROUTES);
    }
  };

  const LoginData = () => {
    setLoader(true);
    const data = {
      email: state.email,
      password: state.password,
    };

    dispatch(LoginAction(data)).then(async response => {
      console.log(data, 'response_inlogins', response);
      if (response?.success === true) {
        console.log(' userId ', response);
        // .user?.id
        console.log(' profile ', profileId);
        setLoader(false);
        await AsyncStorage.setItem('token', response?.token);
        // Alert.alert("Login success")
        // props?.navigation?.navigate(navigationStrings.TAB_ROUTES);
      } else {
        setLoader(true);
        Alert.alert('Invalid Email or password');
        console.log('email_passwordemail', response);
      }
    });
  };

  return (
    <WrapperContainer>
      <View style={styles.HeaderContainer}>
        <Image source={imagePath.icLogo} style={{}} />
      </View>

      <KeyboardAvoidingView
        style={{flex: 1, margin: moderateScale(16)}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{height: height / 1.4}}>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.LoginText}>Log in</Text>
              <Text style={styles.mainText}>
                For log in, please enter your phone number
              </Text>
              <Text style={styles.mainText2}>and password</Text>
            </View>
            <View style={{flex: 0.5, top: moderateScale(20)}}>
              <TextInputComp
                value={email}
                placeholder="Enter Your Email Address"
                // onChangeText={(value) => setEmail(value)}
                onChangeText={email => updateState({email})}
              />

              <View style={{flexDirection: 'row', left: moderateScale(20)}}>
                <TextInputComp
                  value={password}
                  maxLength={10}
                  placeholder="Password"
                  // onChangeText={(value) => setPassword(value)}
                  onChangeText={password => updateState({password})}
                  secureTextEntry={!secureText}
                />
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={{right: moderateScale(40)}}>
                  <FontAwesome
                    name={secureText ? 'eye' : 'eye-slash'}
                    size={24}
                    color={colors.blackColor}
                    style={{top: moderateScale(12)}}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  bottom: moderateScale(10),
                  alignSelf: 'center',
                  top: moderateScale(30),
                }}
                activeOpacity={0.7}
                onPress={() => onLogin()}>
                <Text
                  style={{
                    paddingHorizontal: moderateScale(35),
                    paddingVertical: moderateScaleVertical(10),
                    backgroundColor: colors.blueColor,
                    borderRadius: moderateScale(10),
                    color: colors.whiteColor,
                    fontSize: moderateScale(16),
                  }}>
                  Log in
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{flex: 0.3}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: colors.blueColor,
                    marginHorizontal: 20,
                  }}
                />
                <Text>or</Text>
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: colors.blueColor,
                    marginHorizontal: 20,
                  }}
                />
              </View>

              <View style={styles.accText}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() =>
                    props?.navigation?.navigate(navigationStrings.SIGNUP)
                  }>
                  <Text
                    style={{color: '#3F6791', marginLeft: moderateScale(6)}}>
                    Sign up
                  </Text>
                  <View
                    style={{
                      height: 1,
                      backgroundColor: colors.blueColor,
                      marginLeft: moderateScale(6),
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={styles.forgotPassText}
                onPress={() =>
                  props?.navigation.navigate(navigationStrings.Forgot_Password)
                }>
                Forgot password?
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:'100%',
    backgroundColor: '#fff',
  },
  accText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  forgotPassText: {
    color: '#3F6791',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
  LoginText: {
    fontSize: textScale(32),
    color: 'black',
    fontFamily: fontFamily.bold,
  },
  mainText: {
    fontSize: textScale(12),
    color: 'black',
    paddingHorizontal: moderateScaleVertical(60),
    alignSelf: 'center',
    fontFamily: fontFamily.regular,
  },
  mainText2: {
    fontSize: textScale(12),
    color: 'black',
    fontFamily: fontFamily.regular,
  },
  HeaderContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScaleVertical(20),
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
});
