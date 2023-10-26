import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import HeaderComp2 from './HeaderComp2';
import { height, moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import fontFamily from '../styles/fontFamily'
import ButtonComp from './ButtonComp'


const options = [
    { label: 'Alophatic', value: 'Alophatic' },
    { label: 'Ayurvedic', value: 'Ayurvedic' },
    { label: 'Homeopathic', value: 'Homeopathic' },
    { label: 'Other', value: 'Other' },
];

const ProfileCreate = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [input, setInput] = useState({
        name: '',
        owner_name: '',
        Degree: '',
        mobileNum: '',
        State: '',
        district: '',
        city: '',
        sector: '',
        address: '',
        Drug_license_number: '',
        gstNumber: '',
        regNumber: '',
        //    img:'',
        desc: ''
    })

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

    const UpdateChemistProfile = async () => {
        const checkValid = isValidData()
        if (checkValid) {
            saveData();
            // navigation?.navigate(navigationStrings.Laboratory_Profile)
            console.log(checkValid, 'checkValidcheckValid')
        }
    }

    const { nameOfFirm, Degree, mobileNum, State, district, city, sector, address, regNumber, desc, gstNumber, Drug_license_number, owner_name } = input
    const updateState = (data) => setInput(() => ({ ...input, ...data }))

    return (
        <>
            <HeaderComp2 text="Edit Profile" />
            <ScrollView
                style={{ paddingHorizontal: 10 }} >
                {/* <KeyboardAwareScrollView> */}
                <View>
                    <TextInput
                        value={nameOfFirm}
                        placeholder='Name'
                        onChangeText={(nameOfFirm) => updateState({ nameOfFirm })}
                        style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                    />
                </View>
                <View>
                    <TextInput
                        value={owner_name}
                        placeholder='Owner Name'
                        onChangeText={(owner_name) => updateState({ owner_name })}
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
                        value={regNumber}
                        placeholder='Registration Number'
                        onChangeText={(regNumber) => updateState({ regNumber })}
                        style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: colors.grayColor }}>Deals in</Text>
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity onPress={toggleModal} style={styles.dropdownButton}>
                            {/* <Text>Open Dropdown</Text> */}
                            <Icon name="caret-down" size={20} />
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
                </View>

                <View>
                    <View style={{ borderBottomColor: colors.grayColor, borderBottomWidth: 1 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: moderateScaleVertical(8) }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ alignSelf: "center", color: colors.grayColor, fontFamily: fontFamily.medium, fontSize: textScale(15) }}>Photo to display</Text>
                        </View>
                        <TouchableOpacity onPress={() => Alert.alert('photo uploaded')}>
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
                    <TouchableOpacity activeOpacity={0.7} onPress={UpdateChemistProfile}>
                        <ButtonComp
                            text='Save'
                        />
                    </TouchableOpacity>
                </View>
                {/* </KeyboardAwareScrollView> */}
            </ScrollView>
        </>
    )
}

export default ProfileCreate;

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
})