import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderComp2 from '../../Components/HeaderComp2'
import WrapperContainer from '../../Components/WrapperContainer'
import fontFamily from '../../styles/fontFamily'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import imagePath from '../../constants/imagePath'
import navigationStrings from '../../Navigations/navigationStrings'
import { Laboratory_ProfileAction } from '../../redux/Action/Laboratory_ProfileAction';
import { useDispatch } from 'react-redux'


const upComingData = [
  {
    id: 1,
    image: imagePath.icExpandArrow2,
    name: 'Bawa Medical Hall',
    title: 'Open unit 9:30 pm',
    title2: '800m, Zirakpur HO, Zirakpur',
    button: 'View'
  },
  {
    id: 2,
    image: imagePath.icExpandArrow2,
    name: 'Bawa Medical Hall',
    title: 'Open unit 9:30 pm',
    title2: '800m, Zirakpur HO, Zirakpur',
    button: 'View'
  },
  {
    id: 3,
    image: imagePath.icExpandArrow2,
    name: 'Bawa Medical Hall',
    title: 'Open unit 9:30 pm',
    title2: '800m, Zirakpur HO, Zirakpur',
    button: 'View'
  },
  {
    id: 4,
    image: imagePath.icExpandArrow2,
    name: 'Bawa Medical Hall',
    title: 'Open unit 9:30 pm',
    title2: '800m, Zirakpur HO, Zirakpur',
    button: 'View'
  },
  {
    id: 5,
    image: imagePath.icExpandArrow2,
    name: 'Bawa Medical Hall',
    title: 'Open unit 9:30 pm',
    title2: '800m, Zirakpur HO, Zirakpur',
    button: 'View'
  },
  {
    id: 6,
    image: imagePath.icExpandArrow2,
    name: 'Bawa Medical Hall',
    title: 'Open unit 9:30 pm',
    title2: '800m, Zirakpur HO, Zirakpur',
    button: 'View'
  },

];


const Nearby_Medical = (props) => {

  const dispatch = useDispatch();

  const ViewMedical = () => {
    props?.navigation?.navigate(navigationStrings.Medical_Profile)
    // Alert.alert("View Profile")
    //   dispatch(Laboratory_ProfileAction()).then(async (response) => {
    //     console.log(response, "response_Laboratory")
    //     // if (response?.status === "Laboratory created successfully") {
    //     //     // setLoader(false);
    //     //     console.log("Laboratory_created_successfully", response);
    //     //     navigation?.navigate(navigationStrings.Laboratory_Profile, { id: response?.laboratory?.id })

    //     // } else {
    //     //     // setLoader(false);
    //     //     console.log("email_passwordemail", response);
    //     // }
    // })



    // props?.navigation?.navigate(navigationStrings.Chemist_Profile)
  }

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', padding: moderateScale(20), justifyContent: "space-between" }}>

        <View style={{ flexDirection: 'row' }}>
          <Image source={item?.image} style={{}} />
          <View style={{ marginLeft: moderateScale(12) }}>
            <Text style={{ fontFamily: fontFamily.medium, fontSize: textScale(16), color: colors.blackColor }}>{item?.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="time" color={colors.grayColor} size={18} style={{ alignSelf: 'center' }} />
              <Text style={{ fontFamily: fontFamily.regular, fontSize: textScale(12), color: colors.blackColor, left: moderateScale(3) }}>{item?.title}</Text>
            </View>
            <View style={{ flexDirection: "row", top: moderateScale(2) }}>
              <EvilIcons name="location" color={colors.blackColor} size={20} style={{ alignSelf: 'center' }} />
              <Text style={{ fontFamily: fontFamily.regular, fontSize: textScale(12), color: colors.blackColor, left: moderateScale(3) }}>{item?.title2}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{ marginTop: moderateScale(10) }} onPress={() => { ViewMedical() }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: fontFamily.medium, fontSize: textScale(14), color: colors.blackColor, alignSelf: 'center' }}>{item?.button}</Text>
            <MaterialIcons name="navigate-next" color={colors.blackColor} size={20} style={{ alignSelf: 'center', top: moderateScale(2) }} />
          </View>
          <View style={{ borderWidth: 0.7, color: colors.blackColor, width: moderateScale(43) }} />
        </TouchableOpacity>
      </View>
    )
  }

  const separatorComponent = () => {
    return (
      <View style={{ borderWidth: 0.4, backgroundColor: colors.grayColor }} />
    )
  }

  return (
    <WrapperContainer>
      <HeaderComp2
        text='Nearby Medicals'
      />

      <View style={{ flex: 1 }}>
        <FlatList
          data={upComingData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={separatorComponent}
        />
      </View>

    </WrapperContainer>
  )
}

export default Nearby_Medical

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: "center"
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(16),
    color: colors.blackColor
  },
  mainText2: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(11),
    color: colors.blackColor,
    alignSelf: 'center'
  },
  mainText3: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(14),
    color: colors.blackColor,
    alignSelf: 'center',
    paddingRight: moderateScale(10)
  },
  titleMainView: {
    flex: 0.22,
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: "center",
    paddingTop: moderateScale(8)
  },
  titleText: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(12),
    color: colors.blackColor
  },
  titleText2: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(10),
    color: colors.blackColor
  },
  mainText4: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(12),
    color: colors.blackColor,
    alignSelf: 'center'
  },
  cardButton: {
    flexDirection: "row",
    backgroundColor: colors.blueColor,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    top: moderateScale(5)
  },
  cardButtonText: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(12),
    color: colors.whiteColor,
    alignSelf: 'center',
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScaleVertical(4)
  }

})