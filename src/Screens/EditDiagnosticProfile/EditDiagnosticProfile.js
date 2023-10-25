import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { showError } from '../../Utils/helperFunction';
import validator from '../../Utils/validations';
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
// import ImagePicker from 'react-native-image-crop-picker';
import ModalComp from '../../Components/ModalComp';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../Navigations/navigationStrings'
import { Diaganostic_ProfileAction, EditDiaganosticProfileAction } from '../../redux/Action/Diagnostic_CenterAction'

const EditDiagnosticProfile = (props) => {
    console.log(props, 'propspropsss')
    // const [selectedImage, setSelectedImage] = useState(null);


    const toggleModal = () => {
        setIsVisible(!isVisible);
    };


    const Id = props?.props?.route?.params?.id
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);

    const [input, setInput] = useState({
        name: '',
        Degree: '',
        mobileNum: '',
        State: '',
        district: '',
        city: '',
        sector: '',
        address: '',
        regNumber: '',
        //    img:'',
        desc
    })


    const { name, Degree, mobileNum, State, district, city, sector, address, regNumber, desc } = input
    const updateState = (data) => setInput(() => ({ ...input, ...data }))


    const isValidData = () => {
        const error = validator({
            name,
            Degree,
            mobileNum,
            State,
            district,
            city,
            sector,
            address,
            regNumber,
            // img,
            desc: input.desc
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
            console.log(checkValid, 'alidcheckValid')
        }
    }




    const saveData = () => {

        const payload = {
            name: input.name,
            degree: input.Degree,
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
        // console.log(payload, "datadata2222EDIT")
        // console.log("IDDDDDDDDDDDDDD",Id)
        var formData = new FormData();
        formData.append({
            "LoginData": JSON.stringify({ payload, Id }),
        });
        dispatch(EditDiaganosticProfileAction(payload, Id)).then(async (response) => {
            console.log(response, "EditesponseEditDiaganosticProfileAction")
            if (response?.message === "Diaganostic successfully created") {
                dispatch(Diaganostic_ProfileAction(payload)).then(async (response) => {
                    // console.log("Laboratory_ProfileActionddddd", response)
                    toggleModal()
                })
            } else {
                console.log("email_passwordemail", response);
            }
        })


    }



    // const openImagePicker = () => {
    //     ImagePicker.openPicker({
    //       width: 300,
    //       height: 400,
    //       // cropping: true,
    //     }).then(image => {
    //       console.log(image);
    //       setSelectedImage({ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreepngimg.com%2Fpng%2F20723-mario-image&psig=AOvVaw2NL6rjTE6uTDZO3suSFssk&ust=1697394080463000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjeh4uU9oEDFQAAAAAdAAAAABAE" });
    //     }).catch(error => {
    //       console.log(error,'errorerrorerror');
    //     });
    //   };


    return (

        <>
            <View style={{justifyContent: 'center',left:moderateScaleVertical(40) }}>
                <TouchableOpacity
                    onPress={() => setIsVisible(true)} activeOpacity={0.7}
                    style={styles.doctorPageBtn}>
                    <Text
                        style={{
                            fontFamily: fontFamily.semiBold,
                            fontSize: textScale(16),
                            color: colors.whiteColor,
                        }}>
                        Edit
                    </Text>
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
                                    <TouchableOpacity>
                                        <Text style={{ alignSelf: "center", color: colors.grayColor, fontFamily: fontFamily.medium, fontSize: textScale(15) }}>updoad</Text>
                                    </TouchableOpacity>
                                    {/* <Button title="Pick an Image" onPress={openImagePicker} /> */}
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

export default EditDiagnosticProfile

const styles = StyleSheet.create({
    doctorPageBtn: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScaleVertical(5),
        backgroundColor: colors.blueColor,
        borderRadius: moderateScale(10)

    },
})