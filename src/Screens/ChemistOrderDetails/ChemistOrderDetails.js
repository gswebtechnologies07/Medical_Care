import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComp from '../../Components/HeaderComp';
import { height, moderateScale, textScale } from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import { useDispatch } from 'react-redux'
import { EditOrderPlaceAction } from '../../redux/Action/OrderPlaceAction';


const ChemistOrderDetails = (props) => {
  console.log(props, 'OrderDetailsOrderDetailsprops');

  const Prescription = props?.route?.params?.data?.prescription
  console.log(Prescription, 'medicinemedicinemedicine')
  const medicine = props?.route?.params?.data?.order_detail


  const Delivery_Address = props?.route?.params?.data?.delivary_address

  const Payment_status = props?.route?.params?.data?.payment_status

  const order_status = props?.route?.params?.data.order_status
  const Id = props?.route?.params?.data?.id
  console.log(Id, "ididid")


  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    amount: '',
  })

  const { amount } = state
  const updateState = (data) => setState(() => ({ ...state, ...data }))

  const OrderDetails = () => {
    getOrederDetails()
    // navigation.navigate(navigationStrings.HomeChemist)
  }

  const getOrederDetails = () => {
    const data = {
      total_amount: state.amount,
    }
    dispatch(EditOrderPlaceAction(data, Id)).then(async (response) => {
      console.log(data, "OrderPlaceActionOrderPlaceActionOrderPlaceAction", response)
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <HeaderComp />
      <ScrollView>
        <View style={{ height: height / 2.7 }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.UploadPrecriptionView}>Upload Prescription</Text>
            <View style={styles.imgView}>
              <Image source={{ uri: `https://demogswebtech.com/medicalcare/public/images/order/${Prescription}` }} style={{ height: moderateScale(230), borderRadius: moderateScale(10) }} />
            </View>
          </View>
        </View>
        <View style={{}}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.MedicneText}>Medicine</Text>
            <View style={styles.orderDetailsView} >
              <Text style={{ fontFamily: fontFamily.semiBold, fontSize: moderateScale(14) }}>
                {medicine}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ top: moderateScale(10) }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.AddressText}>Delivery Address</Text>
            <View style={styles.AddressView} >
              <Text style={{ fontFamily: fontFamily.semiBold, fontSize: moderateScale(14) }}>
                {Delivery_Address}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: height / 7, top: moderateScale(18) }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.AmountText}>Amount</Text>
            <View style={styles.amountView}>
              <TextInput
                style={{ textColor: colors.blackColor, fontFamily: fontFamily.semiBold, left: moderateScale(10) }}
                value={amount}
                placeholder='Amount'
                onChangeText={(amount) => updateState({ amount })}
              />
              {/* <Text style={{ fontFamily: fontFamily.semiBold, fontSize: moderateScale(16) }}> */}

              {/* {totalAmount} */}
              {/* </Text> */}
            </View>
          </View>
        </View>
        <View style={{ height: height / 7 }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.paymentStatusText}>Payment Status</Text>
            <View style={styles.paymentStatusView}>
              <Text style={{ fontFamily: fontFamily.semiBold, fontSize: moderateScale(16) }}>
                {Payment_status}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: height / 7 }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.order_statusText}>Order Status</Text>
            <View style={styles.order_statusView} >
              <Text style={{ fontFamily: fontFamily.semiBold, fontSize: moderateScale(16) }}>
                {order_status}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: height / 10 }}>
          <TouchableOpacity style={{ justifyContent: 'center', alignSelf: "center" }} activeOpacity={0.7} onPress={OrderDetails}>
            <Text style={{ paddingHorizontal: moderateScale(20), paddingVertical: moderateScale(10), backgroundColor: colors.blueColor, borderRadius: moderateScale(10), color: colors.whiteColor, fontSize: moderateScale(16) }}>Update Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default ChemistOrderDetails;

const styles = StyleSheet.create({
  imgView: {
    justifyContent: 'center',
    height: moderateScale(230),
    backgroundColor: colors.grayColor03,
    top: moderateScale(15),
    borderRadius: moderateScale(10)
  },
  UploadPrecriptionView: {
    fontSize: textScale(16),
    fontFamily: fontFamily.bold,
    color: colors.blackColor
  },
  MedicneText: { fontSize: textScale(16), fontFamily: fontFamily.bold, color: colors.blackColor },
  orderDetailsView: { top: moderateScale(5), borderRadius: moderateScale(10), borderWidth: 1, borderColor: colors.blueColor, paddingHorizontal: moderateScale(20), textAlignVertical: 'top', paddingVertical: moderateScale(15) },
  AddressText: { fontSize: textScale(16), fontFamily: fontFamily.bold, color: colors.blackColor },
  AddressView: { top: moderateScale(5), borderRadius: moderateScale(10), borderWidth: 1, borderColor: colors.blueColor, paddingHorizontal: moderateScale(20), textAlignVertical: 'top', paddingVertical: moderateScale(15) },
  AmountText: { fontSize: textScale(16), fontFamily: fontFamily.bold, color: colors.blackColor },


  amountView: { top: moderateScale(5), borderRadius: moderateScale(10), borderWidth: 1, borderColor: colors.blueColor },

  paymentStatusText: { fontSize: textScale(16), fontFamily: fontFamily.bold, color: colors.blackColor },
  paymentStatusView: { top: moderateScale(5), borderRadius: moderateScale(10), borderWidth: 1, borderColor: colors.blueColor, paddingHorizontal: moderateScale(20), textAlignVertical: 'top', paddingVertical: moderateScale(15) },
  order_statusText: { fontSize: textScale(16), fontFamily: fontFamily.bold, color: colors.blackColor },
  order_statusView: { top: moderateScale(5), borderRadius: moderateScale(10), borderWidth: 1, borderColor: colors.blueColor, paddingHorizontal: moderateScale(20), textAlignVertical: 'top', paddingVertical: moderateScale(15) },

});
