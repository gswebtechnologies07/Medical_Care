import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import { height, moderateScale, textScale, width, moderateScaleVertical } from '../../styles/responsiveSize'
import fontFamily from '../../styles/fontFamily'
import imagePath from '../../constants/imagePath'
import colors from '../../styles/colors'
import ButtonComp from '../../Components/ButtonComp'
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import EditDoctorProfile from '../EditDoctorProfile/EditDoctorProfile';
import { GetDoctorProfileAction } from '../../redux/Action/DoctorProfileAction'

const Doctor_Profile = (props) => {
  console.log(props, 'Doctor_ProfileProps')

  const ids = props?.route?.params?.id
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getDoctorData = useSelector((state) => state?.DoctorProfileReducer?.DoctorProfileRegister?.data)
  console.log("getDoctorDatagetDoctorData", getDoctorData)

  dispatch(GetDoctorProfileAction(ids)).then(async (response) => {
    console.log("GetDoctorProfileAction", response)
  })


  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image source={imagePath.icCheckBlack} />
        </TouchableOpacity>


        <View style={{ flex: 0.3 }}>
          <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
            <View style={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontFamily: fontFamily.semiBold, fontSize: textScale(20), color: colors.blackColor, alignSelf: 'center' }}>{getDoctorData.name}</Text>
            </View>
            <EditDoctorProfile props={props} />
          </View>

          <View style={{ flex: 3, padding: moderateScale(20), flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ justifyContent: 'center', top: moderateScale(10) }}>
              <Image source={imagePath.icRectangle1} style={styles.swiperImage1} />
            </View>

            <View style={{ justifyContent: 'center' }}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="time" color={colors.grayColor} size={15} style={{ alignSelf: 'center' }} />
                <Text style={{ fontFamily: fontFamily.regular, fontSize: textScale(12), color: colors.blackColor, left: moderateScale(3) }}>Open unit 9:30 pm</Text>
              </View>
              <View style={{ flexDirection: "row", top: moderateScale(3) }}>
                <EvilIcons name="location" color={colors.blackColor} size={15} style={{ alignSelf: 'center' }} />
                <Text style={{ fontFamily: fontFamily.regular, fontSize: textScale(12), color: colors.blackColor, left: moderateScale(3) }}>{getDoctorData.address}</Text>
              </View>

              <View style={{ top: moderateScale(10) }}>
                <ButtonComp text={getDoctorData.mobile}
                  style={{ borderRadius: moderateScale(6), flexDirection: 'row', paddingHorizontal: moderateScale(10), paddingVertical: moderateScale(4) }}
                  Img={imagePath.icPhone}
                  imgStyle={{ right: moderateScale(5) }}
                />
              </View>
            </View>
          </View>
        </View>


        <View style={{ flex: 0.7 }}>
          <View style={{ paddingHorizontal: moderateScale(20), justifyContent: 'center', paddingVertical: moderateScale(5) }}>
            <Text style={{ fontFamily: fontFamily.semiBold, fontSize: textScale(18), color: colors.blackColor }}>About</Text>
            <View>
              <Text style={{ top: moderateScale(3), fontFamily: fontFamily.regular, fontSize: textScale(12), color: colors.blackColor }}>
                {getDoctorData.desc}
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. */}
              </Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: moderateScale(20), justifyContent: 'center', paddingVertical: moderateScale(5) }}>
            <Text style={{ fontFamily: fontFamily.semiBold, fontSize: textScale(18), color: colors.blackColor }}>Info</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: colors.blackColor, alignSelf: 'center' }} />
                <Text style={{ fontFamily: fontFamily.medium, fontSize: textScale(16), color: colors.blackColor, left: moderateScale(5) }}>Degree</Text>
              </View>
              <AntDesign name="checkcircle" color={colors.blueColor} size={15} style={{ alignSelf: 'center' }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: colors.blackColor, alignSelf: 'center' }} />
                <Text style={{ fontFamily: fontFamily.medium, fontSize: textScale(16), color: colors.blackColor, left: moderateScale(5) }}>License</Text>
              </View>
              <AntDesign name="checkcircle" color={colors.blueColor} size={15} style={{ alignSelf: 'center' }} />
            </View>
          </View>

          <View style={{ padding: moderateScale(20), justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: colors.yellowColor, width: moderateScale(130), paddingVertical: moderateScaleVertical(4), flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: moderateScale(15), borderRadius: moderateScale(10) }}>
              <Foundation name="crown" color={colors.whiteColor} size={30} style={{ alignSelf: 'center', top: moderateScale(2) }} />
              <Text style={{ alignSelf: "center", fontFamily: fontFamily.semiBold, fontSize: textScale(18), color: colors.whiteColor }}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </WrapperContainer>
  )
}

export default Doctor_Profile

const styles = StyleSheet.create({
  mainSwiper: {
    flex: 0.25,
  },
  swiperActiveDot: {
    backgroundColor: colors.blueColor,
    width: moderateScale(25),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    margin: moderateScale(2)
  },
  swiperDot: {
    backgroundColor: colors.grayColor02,
    width: moderateScale(25),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    margin: moderateScale(2)

  },
  swiperImage1: {
    height:moderateScale(110),
    width: moderateScale(110),
    alignSelf: 'center',
    borderRadius: moderateScale(55)
  },

})



