import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { getAllChemistProfile } from '../../redux/Action/ChemistProfileAction';

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

  const [data, setData] = useState('')

  const ChemistData = useSelector((state) => state?.getAllChemistProfileReducer?.GetAllChemistProfile?.order)
  console.log(ChemistData, 'ChemistDataChemistData')

  useEffect(() => {
    dispatch(getAllChemistProfile()).then(async (response) => {
      console.log(response, "response_ChemistProfileActionsss")

      setData(response?.order)
      // setData(data)

    });
  }, [])


  const ViewMedical = (item) => {
    Alert.alert("View Medical Profile")
    // props?.navigation?.navigate(navigationStrings.Medical_Profile, { data: item })

  }

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', padding: moderateScale(20), justifyContent: "space-between" }}>

        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: `https://demogswebtech.com/medicalcare/public/images/user/${item?.img}` }} style={{ height: moderateScale(80), width: moderateScale(120), borderRadius: moderateScale(10) }} />
          <View style={{ marginLeft: moderateScale(12) }}>
            <Text style={{ fontFamily: fontFamily.medium, fontSize: textScale(16), color: colors.blackColor, width: moderateScale(150) }}>{item?.name_of_firm}</Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="time" color={colors.grayColor} size={18} style={{ alignSelf: 'center' }} />
              <Text style={{ fontFamily: fontFamily.regular, fontSize: textScale(12), color: colors.blackColor, left: moderateScale(3) }}>Open unit 9:30 pm</Text>
            </View>
            <View style={{ flexDirection: "row", top: moderateScale(2) }}>
              <EvilIcons name="location" color={colors.blackColor} size={20} style={{ alignSelf: 'center' }} />
              <Text style={{ fontFamily: fontFamily.regular, fontSize: textScale(12), color: colors.blackColor, left: moderateScale(3) }}>{item?.city}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{ marginTop: moderateScale(10) }} onPress={() => { ViewMedical() }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: fontFamily.medium, fontSize: textScale(14), color: colors.blackColor, alignSelf: 'center' }}>view</Text>
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
          data={ChemistData}
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