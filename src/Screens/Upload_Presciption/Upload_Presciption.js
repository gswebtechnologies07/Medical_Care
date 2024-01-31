import { Alert, StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderComp from '../../Components/HeaderComp'
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize'
import fontFamily from '../../styles/fontFamily'
import colors from '../../styles/colors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';
import { androidCameraPermission } from '../../../permissions';
import navigationStrings from '../../Navigations/navigationStrings';
import { useDispatch, useSelector } from 'react-redux'
import { OrderPlaceAction } from '../../redux/Action/OrderPlaceAction'
import { useNavigation } from '@react-navigation/native';

const Upload_Presciption = (props) => {
    console.log(props, 'propspropspropspropsprops')

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const values = useSelector((state) => state?.LoginReducer?.Login)
    console.log(values, 'valuevaluevalue')

    const username = values?.user?.name
    console.log(username, 'userData')

    const userMobile = values?.user?.mobile

    const userEmail = values?.user?.email

    const userId = values?.user?.id

    const id = props?.route?.params?.id

    const [state, setState] = React.useState({
        name: '',
    })

    const { name } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const [gallary, setGallary] = useState('')
    const [image, setImage] = useState('')

    const onSelectImage = async () => {
        const permissionStatus = await androidCameraPermission()
        if (permissionStatus || Platform.OS == 'android') {
            Alert.alert(
                'Profile Picture',
                'Choose an option',
                [
                    // { text: 'Camera', onPress: onCamera },
                    { text: 'Gallery', onPress: onGallery() },
                    { text: 'Cancel', onPress: () => { } }
                ]
            )
        }
    }

    const onGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            if (image) {
                console.log("prescription", image)
                let filename = image.path.substring(image.path.lastIndexOf('/') + 1)
                let uploadFile = {
                    type: image.mime,
                    uri: image.path,
                    name: filename
                }
                console.log(uploadFile, 'uploadFileuploadFileuploadFile')
                const img = image?.path
                setGallary(uploadFile)
                setImage(img)
            }
        });
    }

    const imageUpload = (items) => {
      const formData = new FormData();
      formData.append('prescription', {
        uri: items.uri,
        type: items.type,
        name: items.name,
      });
      formData.append('user_name', username);
      formData.append('user_email', userEmail);
      formData.append('user_mobile', userMobile);
      formData.append('order_detail', state.name);
      formData.append('chemist_id', id);
      formData.append('user_id', userId);

      dispatch(OrderPlaceAction(formData)).then(async response => {
        console.log(' responseresponseresponse', response);
        if (response?.status === 'Order created successfully') {
          Alert.alert(
            'Order Created',
            'Your order has been successfully created!',
            [{text: 'OK', onPress: () => {}}],
          );
          props?.navigation?.navigate(navigationStrings.MY_ORDER);
        } else {
          console.log('Order creation failed. Response:', response);
          Alert.alert(
            'Order Creation Failed',
            'There was an error while creating your order. Please try again later.',
            [{text: 'OK', onPress: () => {}}],
          );
          console.log('email_passwordemail', response);
        }
      });
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComp />
            <KeyboardAwareScrollView>
                <View style={{ height: height / 2.6, paddingHorizontal: moderateScale(20) }}>
                    <Text style={{ fontSize: textScale(20), fontFamily: fontFamily.bold, color: colors.blackColor }}>Upload  Prescription</Text>
                    <View style={{ justifyContent: 'center', height: moderateScale(230), backgroundColor: colors.grayColor03, top: moderateScale(25), borderRadius: moderateScale(10) }}>
                        <TouchableOpacity style={{ alignSelf: "center", alignItems: 'center' }} onPress={() => onSelectImage()}>
                            {!image ? <AntDesign name="camera" color={colors.grayColor} size={50} /> : <Image source={{ uri: image }} style={{ height: height / 3.1, width: width / 1.12, borderRadius: 10 }} />}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: height / 3.2, paddingHorizontal: moderateScale(20) }}>
                    <Text style={{ fontSize: textScale(20), fontFamily: fontFamily.bold, color: colors.blackColor }}>Medicine</Text>
                    <View style={{}} >
                        <TextInput
                            style={{ height: moderateScale(150), top: moderateScale(15), borderRadius: moderateScale(10), borderWidth: 1, borderColor: colors.blueColor, paddingHorizontal: moderateScale(20), textAlignVertical: 'top', paddingVertical: moderateScale(15) }}
                            value={name}
                            placeholder='Type medicine name...'
                            onChangeText={(name) => updateState({ name })}
                            multiline={true}
                            numberOfLines={5}
                        />
                    </View>
                </View>
                <TouchableOpacity style={{ justifyContent: 'center', bottom: moderateScale(10), alignSelf: "center" }} activeOpacity={0.7} onPress={() => imageUpload(gallary)}>
                    <Text style={{ paddingHorizontal: moderateScale(20), paddingVertical: moderateScaleVertical(10), backgroundColor: colors.blueColor, borderRadius: moderateScale(10), color: colors.whiteColor, fontSize: moderateScale(16) }}>Confirm Order</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>

        </SafeAreaView>
    )
}

export default Upload_Presciption

const styles = StyleSheet.create({})




