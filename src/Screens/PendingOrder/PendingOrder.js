import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderComp from '../../Components/HeaderComp'
import WrapperContainer from '../../Components/WrapperContainer'
import fontFamily from '../../styles/fontFamily'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import imagePath from '../../constants/imagePath'
import { useDispatch, useSelector } from 'react-redux'
import { GetPendingOrderAction } from '../../redux/Action/HomeChemistAction';
import navigationStrings from '../../Navigations/navigationStrings'


const upComingData = [
  {
    id: 1,
    mainText: '#ghhhh678ca',
    mainText2: 'Pending',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 2,
    mainText: '#ghhhh678ca',
    mainText2: 'Pending',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 3,
    mainText: '#ghhhh678ca',
    mainText2: 'Pending',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 4,
    mainText: '#ghhhh678ca',
    mainText2: 'Pending',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 5,
    mainText: '#ghhhh678ca',
    mainText2: 'Pending',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  }
];

const PendingOrder = ({ navigation }) => {
  console.log(navigation, 'navigationnavigation')

  const dispatch = useDispatch();
  const [pendingOrders, setPendingOrders] = useState("")
  console.log(pendingOrders, 'pendingOrderpendingOrder')

  const profilesId = useSelector((state) => state?.LoginReducer?.Login.user?.id)
  console.log("profilesIdprofilesId", profilesId)

  const id = profilesId

  useEffect(() => {
    dispatch(GetPendingOrderAction(id)).then(async (response) => {
      console.log(response, "GetPendingOrderActionGetPendingOrderActionid")
      setPendingOrders(response.order)

    })
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={{ paddingVertical: moderateScaleVertical(20) }}>
        <View style={styles.containerView}>
          <View style={styles.mainView}>
            <Text style={styles.mainText}>{item?.order_id}</Text>
            {/* <Text style={styles.mainText2}>{item?.title}</Text> */}
          </View>

          <View>
            <Text style={styles.mainText3}>{item?.order_status}</Text>
          </View>
        </View>

        <View style={styles.titleMainView}>
          <View style={{ justifyContent: 'center' }}>
            {/* <Text style={styles.titleText}>{item?.mainText4}</Text> */}

            <View>
              <Image source={item.prescription === "" ? imagePath.icMedical : { uri: `https://demogswebtech.com/medicalcare/public/images/order/${item?.prescription}` }} style={{ height: moderateScale(70), width: moderateScale(120), borderRadius: moderateScale(10) }} />
            </View>

            <Text style={styles.titleText2}>{item?.order_detail}</Text>
            {/* <Text style={styles.titleText2}>{item?.title3}</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.mainText4}>{item?.total_amount}</Text>

            <TouchableOpacity style={styles.cardButton} activeOpacity={0.7} onPress={() => navigation.navigate(navigationStrings.UserOrderDetails, { item: item })}>
              <Text style={styles.cardButtonText}>Order details</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
  }

  const separatorComponent = () => {
    return (
      <View style={{ borderWidth: 0.6, backgroundColor: colors.grayColor }} />
    )
  }

  return (
    <WrapperContainer>
      <HeaderComp />


      <View style={{ flex: 1 }}>
        <FlatList
          data={pendingOrders}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={separatorComponent}
        />
      </View>


    </WrapperContainer>
  )
}

export default PendingOrder

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: "center",
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
    fontFamily: fontFamily.bold,
    fontSize: textScale(14),
    color: colors.blackColor,
    alignSelf: 'center'
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
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScaleVertical(4),
    // backgroundColor: colors.blueColor,
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
  },
  cardButton: {
    flexDirection: "row",
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScaleVertical(4),
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