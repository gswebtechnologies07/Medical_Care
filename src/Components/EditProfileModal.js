import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Keyboard, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import ModalComp from './ModalComp'
import { height, moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import imagePath from '../constants/imagePath'
import ButtonComp from './ButtonComp'
import { useDispatch } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { EditProfileModalAction } from '../redux/Action/EditProfileModalAction';

const EditProfileModal = () => {

    const [isVisible, setIsVisible] = useState(false)
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        mobNumber: '',
        country: '',
        district: '',
        state: '',
        city: '',
        pin: '',
        changePassword: ''
    });

    { console.log(inputs, 'inputsinputs') }
    const [errors, setErrors] = useState({});


    const UpdateProfile = (inputs) => {
        Keyboard.dismiss();
        let isValid = true;


        if (!inputs.name) {
            handleError('Please input name', 'name');
            isValid = false;
        }
        if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError('Please input a valid email', 'email');
            isValid = false;
        }
        if (!inputs.mobNumber) {
            handleError('Please input mobNumber', 'mobNumber');
            isValid = false;
        }
        if (!inputs.country) {
            handleError('Please input country', 'country');
            isValid = false;
        }
        if (!inputs.district) {
            handleError('Please input district', 'district');
            isValid = false;
        }
        if (!inputs.state) {
            handleError('Please input state', 'state');
            isValid = false;
        }
        if (!inputs.city) {
            handleError('Please input city', 'city');
            isValid = false;
        }
        if (!inputs.pin) {
            handleError('Please input pin', 'pin');
            isValid = false;
        }
        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        } else if (inputs.password.length < 5) {
            handleError('Min password length of 5', 'password');
            isValid = false;
        }
        if (!isValid) {
            register();
        }
    };

    // const register = () => {

    //     const payload = {
    //         name: inputs.name,
    //         image: inputs.img,
    //         reg_number: inputs.reg_number,
    //         drug_lic_number: inputs.Drug_license_number,
    //         email: inputs.email,
    //         mobile: inputs.mobile,
    //         street: inputs.street,
    //         city: inputs.city,
    //         sector: inputs.sector,
    //         district: inputs.dist,
    //         state: inputs.state,
    //         country: inputs.country
    //     }
    //     console.log(payload, inputs, "datadata")
    //     var formData = new FormData();
    //     formData.append({
    //         "LoginData": JSON.stringify(payload),
    //     });
    //     dispatch(EditProfileModalAction(payload)).then(async (response) => {
    //         console.log(response, "response_EditProfileModalAction", payload)
    //         // if (response?.success === true) {
    //         //     setLoader(false);
    //         //     await AsyncStorage.setItem("token", response?.token);
    //         //     Alert.alert("Login success")
    //         //     props?.navigation?.navigate(navigationStrings.TAB_ROUTES);
    //         // } else {
    //         //     setLoader(false);
    //         //     console.log("email_passwordemail", response);
    //         // }
    //     })
    // }


    

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };
    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };

    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: moderateScale(20),
                    paddingVertical: moderateScaleVertical(30),
                }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={imagePath.icRectangle3}
                        style={{
                            height: moderateScale(70),
                            width: moderateScale(70),
                            borderRadius: moderateScale(15),
                        }}
                    />
                    <View style={{ justifyContent: 'center', left: moderateScale(10) }}>
                        <Text
                            style={{ fontSize: textScale(18), fontFamily: fontFamily.bold }}>
                            Sonal
                        </Text>
                        <Text
                            style={{
                                fontSize: textScale(14),
                                fontFamily: fontFamily.regular,
                            }}>
                            sonal2001@gmail.com
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => setIsVisible(true)} activeOpacity={0.7} >
                    <Text style={{ fontSize: textScale(14), fontFamily: fontFamily.medium }}>
                        Edit
                    </Text>
                    <View style={{ borderWidth: 0.7, color: colors.blackColor }} />
                </TouchableOpacity>
            </View>

            <View>
                <ModalComp
                    isVisible={isVisible}
                    onBackdropPress={() => setIsVisible(false)}
                    style={{ justifyContent: 'center', paddigHorizontal: moderateScale(10), paddingVertical: moderateScale(120) }}
                >

                    <View
                        style={{ height:height/1.45, backgroundColor: colors.whiteColor, borderRadius: moderateScale(25), paddingHorizontal: moderateScale(10), top: moderateScale(60) }} >
                        <KeyboardAwareScrollView>
                            <View>
                                <TextInput
                                    error={errors.name}
                                    placeholder='Name'
                                    onChangeText={text => handleOnchange(text, 'Name')}
                                    onFocus={() => handleError(null, 'Name')}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    error={errors.email}
                                    placeholder='Email'
                                    onChangeText={text => handleOnchange(text, 'Email')}
                                    onFocus={() => handleError(null, 'Email')}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    error={errors.mobNumber}
                                    placeholder='Mobile Number'
                                    maxLength={10}
                                    onChangeText={text => handleOnchange(text, 'Mobile Number')}
                                    onFocus={() => handleError(null, 'Mobile Number')}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    error={errors.country}
                                    placeholder='Country'
                                    onChangeText={text => handleOnchange(text, 'Country')}
                                    onFocus={() => handleError(null, 'Country')}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>

                            <View>
                                <TextInput
                                    error={errors.district}
                                    placeholder='District'
                                    onChangeText={text => handleOnchange(text, 'District')}
                                    onFocus={() => handleError(null, 'District')}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    error={errors.state}
                                    placeholder='State'
                                    onChangeText={text => handleOnchange(text, 'State')}
                                    onFocus={() => handleError(null, 'State')}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    error={errors.city}
                                    placeholder='City'
                                    onChangeText={text => handleOnchange(text, 'City')}
                                    onFocus={() => handleError(null, 'City')}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    error={errors.pin}
                                    placeholder='Pin Code'
                                    onChangeText={text => handleOnchange(text, 'Pin Code')}
                                    onFocus={() => handleError(null, 'Pin Code')}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    error={errors.changePassword}
                                    placeholder='Change Password'
                                    onChangeText={text => handleOnchange(text, 'Change Password')}
                                    onFocus={() => handleError(null, 'Change Password')}
                                    maxLength={10}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View style={{ height: moderateScale(100), justifyContent: "center" }}>
                                <TouchableOpacity activeOpacity={0.7} onPress={UpdateProfile}>
                                    <ButtonComp
                                        text='Update'
                                    />
                                </TouchableOpacity>
                            </View>
                        </KeyboardAwareScrollView>
                    </View>
                </ModalComp>
            </View>
        </>
    )
}

export default EditProfileModal

const styles = StyleSheet.create({})