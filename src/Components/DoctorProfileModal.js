import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
// import ModalComp from './ModalComp'
import { height, moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import ButtonComp from './ButtonComp'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { showError } from '../Utils/helperFunction';
import validator from '../Utils/validations';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { DoctorProfileAction } from '../redux/Action/DoctorProfileAction'
import navigationStrings from '../Navigations/navigationStrings'
import ModalComp from './ModalComp'

const DoctorProfileModal = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);

    const [input, setInput] = useState({
        name: '',
        Degree: '',
        Speciality: '',
        mobileNum: '',
        State: '',
        district: '',
        city: '',
        sector: '',
        address: '',
        regNumber: '',
        //    img:'',
        desc: ''
    })


    // const { name, Degree, Speciality, mobileNum, State, district, city, sector, address, regNumber, desc } = input
    // const updateState = (data) => setInput(() => ({ ...input, ...data }))


    const { name, Degree, Speciality, mobileNum, State, district, city, sector, address, regNumber, desc } = input
    const updateState = (data) => setInput(() => ({ ...input, ...data }))

    const isValidData = () => {
        const error = validator({
            name,
            Degree,
            Speciality,
            mobileNum,
            State,
            district,
            city,
            sector,
            address,
            regNumber,
            // img,
            desc
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }
    const UpdateProfile = async () => {

        const checkValid = isValidData()
        if (checkValid) {
            saveData();
            // navigation?.navigate(navigationStrings.Doctor_Profile)
            console.log(checkValid, 'checkValidcheckValid')
        }
    }

    const saveData = () => {

        const payload = {
            name: input.name,
            degree: input.Degree,
            speciality: input.Speciality,
            mobile: input.mobileNum,
            state: input.State,
            dist: input.district,
            city: input.city,
            sector: input.sector,
            address: input.address,
            reg_number: input.regNumber,
            // img,
            desc: input.desc
        }
        // console.log(payload, "payloadDATA")
        var formData = new FormData();
        formData.append({
            "LoginData": JSON.stringify(payload),
        });
        dispatch(DoctorProfileAction(payload)).then(async (response) => {
            console.log(response, "response_Doctor_ProfileAction")
            if (response?.message === "Add Doctor Successfully") {
                // setLoader(false);
                console.log("Chemist_created_successfully", response);
                navigation?.navigate(navigationStrings.Doctor_Profile, { id: response?.data?.id })

            } else {
                // setLoader(false);
                console.log("email_passwordemail", response);
            }
        })
    }
    return (
        <>
            <View style={{}}>
                <TouchableOpacity
                    onPress={() => setIsVisible(true)} activeOpacity={0.7}
                    style={styles.doctorPageBtn}>
                    <Text
                        style={{
                            fontFamily: fontFamily.semiBold,
                            fontSize: textScale(16),
                            color: colors.blackColor,
                        }}>
                        Doctor
                    </Text>
                    <MaterialIcons name="keyboard-arrow-right" color={colors.pinkColor2} size={22} />
                </TouchableOpacity>
            </View>

            <View>
                <ModalComp
                    isVisible={isVisible}
                    onBackdropPress={() => setIsVisible(false)}
                    style={{ justifyContent: 'center', paddigHorizontal: moderateScale(10), paddingVertical: moderateScale(80), top: moderateScale(10) }}
                >
                    <View
                        style={{ height: height / 1.45, backgroundColor: colors.whiteColor, borderRadius: moderateScale(25), paddingHorizontal: moderateScale(10), top: moderateScale(60) }} >
                        <KeyboardAwareScrollView>
                            <View>
                                <TextInput
                                    value={name}
                                    placeholder='Name'
                                    onChangeText={(name) => updateState({ name })}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    value={Degree}
                                    placeholder='Degree'
                                    onChangeText={(Degree) => updateState({ Degree })}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    value={Speciality}
                                    placeholder='Speciality'
                                    onChangeText={(Speciality) => updateState({ Speciality })}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    value={mobileNum}
                                    placeholder='Mobile Number'
                                    maxLength={10}
                                    onChangeText={(mobileNum) => updateState({ mobileNum })}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    value={State}
                                    placeholder='State'
                                    onChangeText={(State) => updateState({ State })}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>

                            <View>
                                <TextInput
                                    value={district}
                                    placeholder='District'
                                    onChangeText={(district) => updateState({ district })}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    value={city}
                                    placeholder='city'
                                    onChangeText={(city) => updateState({ city })}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    value={sector}
                                    placeholder='Sector'
                                    onChangeText={(sector) => updateState({ sector })}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>

                            <View>
                                <TextInput
                                    value={address}
                                    placeholder='Address'
                                    onChangeText={(address) => updateState({ address })}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    value={regNumber}
                                    placeholder='Registration Number'
                                    onChangeText={(regNumber) => updateState({ regNumber })}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>

                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: moderateScaleVertical(8) }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ alignSelf: "center", color: colors.grayColor, fontFamily: fontFamily.medium, fontSize: textScale(15) }}>Photo to display</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => Alert.alert('updoaded')}>
                                        <Text style={{ alignSelf: "center", color: colors.grayColor, fontFamily: fontFamily.medium, fontSize: textScale(15) }}>updoad</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }} />
                            </View>

                            <View>
                                <TextInput
                                    value={desc}
                                    placeholder='AboutYourSelf'
                                    onChangeText={(desc) => updateState({ desc })}
                                    style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                                />
                            </View>
                            <View style={{ height: moderateScale(100), justifyContent: "center" }}>
                                <TouchableOpacity activeOpacity={0.7} onPress={UpdateProfile}>
                                    <ButtonComp
                                        text='Save'
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

export default DoctorProfileModal

const styles = StyleSheet.create({
    doctorPageBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScaleVertical(5),
    },
})