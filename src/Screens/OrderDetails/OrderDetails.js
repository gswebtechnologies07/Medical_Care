import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComp from '../../Components/HeaderComp';
import { height, moderateScale, textScale } from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';

const OrderDetails = (props) => {
    console.log(props, 'OrderDetailsOrderDetailsprops');

    const navigation = useNavigation();

    const image = props?.route?.params?.item?.prescription;
    const orderDetails = props?.route?.params?.item?.order_detail;
    const totalAmount = props?.route?.params?.item?.total_amount;
    const paymentStatus = props?.route?.params?.item?.payment_status;
    const OrderStatus = props?.route?.params?.item?.order_status

    return (
        <View style={{ flex: 1 }}>
            <HeaderComp />
            <ScrollView>
                <View style={{ height: height / 2.7 }}>
                    <View style={{ paddingHorizontal: moderateScale(20) }}>
                        <Text style={styles.UploadPrecriptionView}>Upload Prescription</Text>
                        <View style={styles.imgView}>
                            <Image source={{ uri: `https://demogswebtech.com/medicalcare/public/images/order/${image}` }} style={{ height: moderateScale(230), borderRadius: moderateScale(10) }} />
                        </View>
                    </View>
                </View>
                <View style={{}}>
                    <View style={{ paddingHorizontal: moderateScale(20) }}>
                        <Text style={styles.MedicneText}>Medicine</Text>
                        <View style={styles.orderDetailsView} >
                            <Text style={{ fontFamily: fontFamily.semiBold, fontSize: moderateScale(14) }}>
                                {orderDetails}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ top: moderateScale(10) }}>
                    <View style={{ paddingHorizontal: moderateScale(20) }}>
                        <Text style={styles.AddressText}>Delivery Address</Text>
                        <View style={styles.AddressView} >
                            <Text style={{ fontFamily: fontFamily.semiBold, fontSize: moderateScale(14) }}>
                                Delivery Address
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: height / 7, top: moderateScale(18) }}>
                    <View style={{ paddingHorizontal: moderateScale(20) }}>
                        <Text style={styles.AmountText}>Amount</Text>
                        <View style={styles.amountView} >
                            <Text style={{ fontFamily: fontFamily.semiBold, fontSize: moderateScale(16) }}>
                                {totalAmount}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: height / 7 }}>
                    <View style={{ paddingHorizontal: moderateScale(20) }}>
                        <Text style={styles.paymentStatusText}>Payment Status</Text>
                        <View style={styles.paymentStatusView} >
                            <Text style={{ fontFamily: fontFamily.semiBold, fontSize: moderateScale(16) }}>
                                {paymentStatus}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: height / 7 }}>
                    <View style={{ paddingHorizontal: moderateScale(20) }}>
                        <Text style={styles.order_statusText}>Order Status</Text>
                        <View style={styles.order_statusView} >
                            <Text style={{ fontFamily: fontFamily.semiBold, fontSize: moderateScale(16) }}>
                                {OrderStatus}
                            </Text>
                        </View>
                    </View>
                </View>
                {/* <View style={{ height: height / 10 }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignSelf: "center" }} activeOpacity={0.7} onPress={() => Alert.alert("alert")}>
                        <Text style={{ paddingHorizontal: moderateScale(20), paddingVertical: moderateScale(10), backgroundColor: colors.blueColor, borderRadius: moderateScale(10), color: colors.whiteColor, fontSize: moderateScale(16) }}>Confirm Order</Text>
                    </TouchableOpacity>
                </View> */}
            </ScrollView>
        </View>
    );
}

export default OrderDetails;

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
    amountView: { top: moderateScale(5), borderRadius: moderateScale(10), borderWidth: 1, borderColor: colors.blueColor, paddingHorizontal: moderateScale(20), textAlignVertical: 'top', paddingVertical: moderateScale(15) },
    paymentStatusText: { fontSize: textScale(16), fontFamily: fontFamily.bold, color: colors.blackColor },
    paymentStatusView: { top: moderateScale(5), borderRadius: moderateScale(10), borderWidth: 1, borderColor: colors.blueColor, paddingHorizontal: moderateScale(20), textAlignVertical: 'top', paddingVertical: moderateScale(15) },
    order_statusText: { fontSize: textScale(16), fontFamily: fontFamily.bold, color: colors.blackColor },
    order_statusView: { top: moderateScale(5), borderRadius: moderateScale(10), borderWidth: 1, borderColor: colors.blueColor, paddingHorizontal: moderateScale(20), textAlignVertical: 'top', paddingVertical: moderateScale(15) },

});
