import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import HeaderComp2 from './HeaderComp2';
import { height, moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import fontFamily from '../styles/fontFamily'
import ButtonComp from './ButtonComp';
import validator from '../Utils/validations';
import { showError, showSucess } from '../Utils/helperFunction'
import { Chemist_ProfileAction, EditChemistProfileAction } from '../redux/Action/ChemistProfileAction';
import { androidCameraPermission } from '../../permissions';
import ImagePicker from 'react-native-image-crop-picker';
import navigationStrings from '../Navigations/navigationStrings'

const options = [
    { label: 'Alophatic', value: 'Alophatic' },
    { label: 'Ayurvedic', value: 'Ayurvedic' },
    { label: 'Homeopathic', value: 'Homeopathic' },
    { label: 'Other', value: 'Other' },
];

const ProfileCreate = () => {
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [input, setInput] = useState({
        nameOfFirm: '',
        owner_name: '',
        mobileNum: '',
        Degree: '',
        Drug_license_number: '',
        gstNumber: '',
        city: '',
        sector: '',
        district: '',
        State: '',
        address: '',
        desc: '',
        // regNumber: '',
        img: '',
        imgName: ''
    })

    const userProfileData = useSelector(state => state?.LoginReducer?.Login?.user)
    const userEmail = userProfileData?.email;
    const userMobile = userProfileData?.mobile;
    const userName = userProfileData?.name;
    const userId = userProfileData.id;

    const { nameOfFirm, Degree, gstNumber, Drug_license_number, city, sector, district, State, address, desc, img, imgName, deals_in, regNumber, } = input
    const updateState = (data) => {
        console.log("updateStateupdateState", data.imgNamee)
        setInput(() => ({ ...input, ...data }))
    }

    const toggleOption = (value) => {
        const updatedOptions = selectedOptions.includes(value)
            ? selectedOptions.filter((option) => option !== value)
            : [...selectedOptions, value];
        setSelectedOptions(updatedOptions);
    };

    const toggleModal = () => {
        console.log("toggleModal")
        setModalVisible(!isModalVisible);
    };

    const isValidData = () => {
        const error = validator({
            nameOfFirm,
            owner_name,
            mobileNum,
            user_email,
            Degree,
            gstNumber: '',
            Drug_license_number: '',
            city,
            sector,
            district,
            State,
            address,
            desc,
            img,
            //deals_in
            // regNumber,
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onSelectImage = async () => {
        const permissionStatus = await androidCameraPermission()
        if (permissionStatus || Platform.OS == 'ios') {
            Alert.alert(
                'Profile Picture',
                'Choose an option',
                [
                    { text: 'Camera', onPress: onCamera },
                    { text: 'Gallery', onPress: onGallery },
                    { text: 'Cancel', onPress: () => { } }
                ]
            )
        }
    }

    const onCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image, 'imageimage');
            const profileImg = image.path;
            updateState({ profileImg });
            showSucess("Image uploaded successfully")
        });
    }

    const onGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            // imageUpload(image?.path)
            const profileImg = image.path;
            updateState({ profileImg })
            let imgNamee = image.mime;
            updateState({ imgNamee })
            showSucess("Image uploaded successfully")
            // console.log("selected_Image", profileImg)
        });
    }

    const UpdateChemistProfile = async () => {
        // const checkValid = isValidData()
        saveData();
        // if (checkValid) {
        // navigation?.navigate(navigationStrings.Laboratory_Profile)
        // }
    }

    const saveData = () => {
        setLoader(true)
        const payload = {
            owner_name: userName,
            mobile: userMobile,
            email: userEmail,
            name_of_firm: input.nameOfFirm,
            degree: input.Degree,
            state: input.State,
            dist: input.district,
            city: input.city,
            sector: input.sector,
            address: input.address,
            drug_lic_number: input.Drug_license_number,
            desc: input.desc,
            // deals_in:   ,
            // reg_number: input.regNumber,
            img: input.img,
        }

        console.log(payload, input, "payloadpayloadpayload");

        var formData = new FormData();
        formData.append({
            "LoginData": JSON.stringify({ payload, userId }),
        });
        dispatch(EditChemistProfileAction(payload, userId)).then(async (response) => {
            setLoader(false)
            console.log(response, "response_EditChemist_ProfileAction")
            if (response?.message === 'Chemist Update Successfully') {
                dispatch(Chemist_ProfileAction(payload)).then(async (response) => {
                    console.log("Chemist_ProfileActionsdff", response)
                    // toggleModalSave()
                    showSucess(response?.data?.message);
                    navigation?.navigate(navigationStrings.ProfileCreate,)
                })
            } else {
                setLoader(false)
                console.log("email_passwordemail", response);
            }
        })
    }

    return (
        <>
            <HeaderComp2 text="Edit Profile" />
            <ScrollView
                style={{ paddingHorizontal: 10 }} >
                {/* <KeyboardAwareScrollView> */}
                <View>
                    <TextInput
                        value={nameOfFirm}
                        placeholder='Firm Name'
                        onChangeText={(nameOfFirm) => updateState({ nameOfFirm })}
                        style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                    />
                </View>
                <View>
                    <TextInput
                        // value={userName}
                        defaultValue={userName}
                        placeholder='Owner Name'
                        onChangeText={(owner_name) => updateState({ owner_name })}
                        style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                    />
                </View>
                <View>
                    <TextInput
                        value={userEmail}
                        editable={false}
                        placeholder='Email id'
                        onChangeText={(user_email) => updateState({ user_email })}
                        style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                    />
                </View>
                <View>
                    <TextInput
                        defaultValue={userMobile}
                        placeholder='Mobile Number'
                        maxLength={10}
                        onChangeText={(mobileNum) => updateState({ mobileNum })}
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
                        value={gstNumber}
                        placeholder='GST Number'
                        onChangeText={(gstNumber) => updateState({ gstNumber })}
                        style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                    />
                </View>
                <View>
                    <TextInput
                        value={Drug_license_number}
                        placeholder='Drug_license_number'
                        onChangeText={(Drug_license_number) => updateState({ Drug_license_number })}
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
                        value={district}
                        placeholder='District'
                        onChangeText={(district) => updateState({ district })}
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
                        value={address}
                        placeholder='Address'
                        onChangeText={(address) => updateState({ address })}
                        style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                    />
                </View>

                <View>
                    <TextInput
                        value={desc}
                        placeholder='About your self'
                        onChangeText={(desc) => updateState({ desc })}
                        style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                    />
                </View>

                <View>
                    {console.log("first", nameOfFirm)}
                    {/* <View style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }} /> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: moderateScaleVertical(8) }}>
                        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={{ alignSelf: "center", color: colors.grayColor, fontFamily: fontFamily.medium, fontSize: textScale(15), width: '82%' }}>{input.imgName ? input.imgName : "Upload profile Image"}</Text>
                            <TouchableOpacity onPress={() => onSelectImage()}>
                                <Text style={{ alignSelf: "center", color: colors.grayColor, fontFamily: fontFamily.medium, fontSize: textScale(15), backgroundColor: colors.pinkColor, padding: 7, borderRadius: 5 }}>updoad</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }} />
                </View>

                <View style={{ height: moderateScale(100), justifyContent: "center" }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={UpdateChemistProfile}>
                        {
                            loader ?
                                <View style={styles.loaderView}>
                                    <ActivityIndicator
                                        size={'small'}
                                        color={colors.blackColor} />
                                </View> :
                                <ButtonComp
                                    text='Save'
                                />
                        }
                    </TouchableOpacity>
                </View>
                {/* </KeyboardAwareScrollView> */}
            </ScrollView>
        </>
    )
}

export default ProfileCreate;

// b/w address and desc

{/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: colors.grayColor }}>Deals in</Text>
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity onPress={toggleModal} style={styles.dropdownButton}>
                            {/* <Text>Open Dropdown</Text> */}
{/* <Icon name="caret-down" size={20} />
                        </TouchableOpacity>
                        <Modal isVisible={isModalVisible}>
                            <View style={styles.modalContent}>
                                {options.map((option) => (
                                    <TouchableOpacity
                                        key={option.value}
                                        onPress={() => toggleOption(option.value)}
                                        style={styles.option}
                                    >
                                        <Text>{option.label}</Text>
                                        {selectedOptions.includes(option.value) && (
                                            <Icon name="check" size={20} color={colors.blueColor} />
                                        )}
                                    </TouchableOpacity>
                                ))}
                                <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                                    <Text>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </View>
                </View>*/}

const styles = StyleSheet.create({
    doctorPageBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScaleVertical(5),
    },

    chemistPagebtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScaleVertical(5),
        backgroundColor: colors.blueColor,
        borderRadius: moderateScale(10)
    },
    chemistPageView: {
        width: moderateScale(150),
        paddingVertical: moderateScaleVertical(3),
        backgroundColor: colors.whiteColor,
        borderRadius: moderateScale(20),
        borderWidth: 0.7,
        borderColor: colors.pinkColor,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // right:20
    },
    dropdownButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        padding: 10,
        // borderRadius: 5,
        width: moderateScale(60)
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    closeButton: {
        alignItems: 'center',
        marginTop: 20,
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