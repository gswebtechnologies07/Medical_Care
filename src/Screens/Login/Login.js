import { StyleSheet, Text, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, TouchableOpacity, View, ActivityIndicator } from 'react-native'
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
import { showError, showSucess } from '../../Utils/helperFunction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux'
import { LoginAction } from '../../redux/Action/LoginAction';
import AsyncStorage from "@react-native-async-storage/async-storage"

const Login = (props) => {
    const dispatch = useDispatch();
    const [secureText, setSecureText] = useState(false)
    const [loader, setLoader] = useState(false);
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const { email, password } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const togglePasswordVisibility = () => {
        setSecureText(!secureText);
    };

    const isValidData = () => {
        const error = validator({
            email,
            password
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onLogin = async () => {
        const checkValid = isValidData()
        if (checkValid) {
            LoginData();
        }
    }

    const LoginData = () => {
        setLoader(true);
        const data = {
            email: state.email,
            password: state.password,
        }
        dispatch(LoginAction(data)).then(async (response) => {
            console.log(data, "response_inlogins", response?.user)
            if (response?.success === true) {
                setLoader(false);
                await AsyncStorage.setItem("token", response?.token);
                showSucess("Login success")
            } else {
                setLoader(false);
                console.log("email_passwordemail", response);
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
                    <View style={{ height: height / 1.4 }}>
                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.LoginText}>Log in</Text>
                            <Text style={styles.mainText}>For log in, please enter your phone number</Text>
                            <Text style={styles.mainText2}>and password</Text>
                        </View>
                        <View style={{ flex: 0.50, top: moderateScale(20) }}>
                            <TextInputComp
                                value={email}
                                placeholder='Enter Your Email Address'
                                onChangeText={(email) => updateState({ email })}
                            />

                            <View style={{ flexDirection: 'row', left: moderateScale(20) }}>
                                <TextInputComp
                                    value={password}
                                    maxLength={10}
                                    placeholder='Password'
                                    onChangeText={(password) => updateState({ password })}
                                    secureTextEntry={!secureText}
                                />
                                <TouchableOpacity onPress={togglePasswordVisibility} style={{ right: moderateScale(40) }}>
                                    <FontAwesome name={secureText ? "eye" : "eye-slash"}
                                        size={24} color={colors.blackColor} style={{ top: moderateScale(12) }} />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={{ top: moderateScale(30) }} onPress={onLogin} activeOpacity={0.7}>
                                {loader ?
                                    <View style={styles.loaderView}>
                                        <ActivityIndicator
                                            size={'small'}
                                            color={colors.blackColor} />
                                    </View> :
                                    <ButtonComp
                                        text='Log in'
                                    />}
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 0.3 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: colors.blueColor, marginHorizontal: 20 }} />
                                <Text>or</Text>
                                <View style={{ flex: 1, height: 1, backgroundColor: colors.blueColor, marginHorizontal: 20 }} />
                            </View>

                            <View style={styles.accText}>
                                <Text>Don't have an account?</Text>
                                <TouchableOpacity
                                    onPress={() => props?.navigation?.navigate(navigationStrings.SIGNUP)}
                                >
                                    <Text style={{ color: '#3F6791', marginLeft: moderateScale(6) }}>Sign up</Text>
                                    <View style={{ height: 1, backgroundColor: colors.blueColor, marginLeft: moderateScale(6) }} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.forgotPassText} onPress={() => props?.navigation.navigate(navigationStrings.Forgot_Password)}>Forgot password?</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}
export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        color: 'black',
        fontFamily: fontFamily.bold
    },
    mainText: {
        fontSize: textScale(12),
        color: 'black',
        paddingHorizontal: moderateScaleVertical(60),
        alignSelf: 'center',
        fontFamily: fontFamily.regular
    },
    mainText2: {
        fontSize: textScale(12),
        color: 'black',
        fontFamily: fontFamily.regular
    },
    loaderView: {
        backgroundColor: colors.blueColor,
        paddingHorizontal: moderateScale(40),
        paddingVertical: moderateScale(7),
        borderRadius: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
})
