import { Alert, StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderComp from '../../Components/HeaderComp'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import fontFamily from '../../styles/fontFamily'
import colors from '../../styles/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Payment = () => {

  const [value, onChangeText] = React.useState('');


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComp />
      <KeyboardAwareScrollView>
        <View style={{ height: height / 2.6, paddingHorizontal: moderateScale(20) }}>
          <Text style={{ fontSize: textScale(20), fontFamily: fontFamily.bold, color: colors.blackColor }}>Upload  Prescription</Text>
          <View style={{ justifyContent: 'center', height: moderateScale(230), backgroundColor: colors.grayColor03, top: moderateScale(15), borderRadius: moderateScale(10) }}>
            {/* <TouchableOpacity style={{ alignSelf: "center", alignItems: 'center' }} onPress={() => onSelectImage()}>
                            <AntDesign name="camera" color={colors.grayColor} size={50} />
                        </TouchableOpacity> */}
          </View>
        </View>
        <View style={{ height: height / 3.2, paddingHorizontal: moderateScale(20) }}>
          <Text style={{ fontSize: textScale(20), fontFamily: fontFamily.bold, color: colors.blackColor }}>Medicine</Text>
          <View style={{ height: moderateScale(150), top: moderateScale(15), borderRadius: moderateScale(10), borderWidth: 1, borderColor: colors.blueColor, paddingHorizontal: moderateScale(20), textAlignVertical: 'top', paddingVertical: moderateScale(15) }} >
            {/* <TextInput
                            style={{ height: moderateScale(150),  top: moderateScale(15), borderRadius: moderateScale(10), borderWidth: 1, borderColor: colors.blueColor, paddingHorizontal: moderateScale(20),textAlignVertical:'top',paddingVertical:moderateScale(15) }}
                            placeholder='Type medicine name...'
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            multiline={true}
                            numberOfLines={5}
                        /> */}
          </View>
        </View>

        <View style={{ justifyContent: "center", bottom: moderateScale(20) }}>
          <Text style={{ fontSize: textScale(18), fontFamily: fontFamily.semiBold, color: colors.blackColor }}> Total Payable Amount : 550</Text>
        </View>


        <TouchableOpacity style={{ justifyContent: "center", alignItems: 'center' }} onPress={() =>
          Alert.alert('Order Confirm')
        }>
          <Text style={{ paddingHorizontal: moderateScale(20), paddingVertical: moderateScaleVertical(10), backgroundColor: colors.blueColor, borderRadius: moderateScale(10) }}>Pay Now</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>

    </SafeAreaView>
  )
}

export default Payment

const styles = StyleSheet.create({})