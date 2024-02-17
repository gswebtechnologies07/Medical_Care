import { React, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight,
  Modal,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComp from '../../Components/HeaderComp';
import { height, moderateScale, textScale, width } from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import WrapperContainer from '../../Components/WrapperContainer';
import RazorpayCheckout from 'react-native-razorpay';
import { EditOrderPlaceAction } from '../../redux/Action/OrderPlaceAction';
import { useDispatch } from 'react-redux';

const UserOrderDetails = props => {
  console.log(props, 'OrderDetailsOrderDetailsprops');

  const navigation = useNavigation();

  const image = props?.route?.params?.item?.prescription;
  const bill_file = props?.route?.params?.item?.bill_file;
  const orderDetails = props?.route?.params?.item?.order_detail;
  const totalAmount = props?.route?.params?.item?.total_amount;
  const order_status = props?.route?.params?.item?.order_status;
  const Id = props?.route?.params?.item?.id;
  const userName = props?.route?.params?.item?.user_name;
  const userEmail = props?.route?.params?.item?.user_email;
  const mobile = props?.route?.params?.item?.user_mobile;
  const [orderId, setOrderId] = useState(null);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const [isPaymentComplete, setIsPaymentComplete] = useState(
    props?.route?.params?.item?.payment_status === 'paid',
  );
  const [isOrderStatusModalVisible, setOrderStatusModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(
    props?.route?.params?.item?.payment_status,
  );

  const toggleOrderStatusModal = () => {
    setOrderStatusModalVisible(!isOrderStatusModalVisible);
  };
  const OrderDetails = () => {
    let updatedOrderStatus = order_status;

    updatedOrderStatus = 'completed';

    console.log('Updated Order Status:', updatedOrderStatus);
  };
  const dispatch = useDispatch();

  const [state, setState] = useState({
    orderstatus: order_status,
  });

  const updateState = data => setState(prevState => ({ ...prevState, ...data }));
  const { orderstatus } = state;
  const handleOrderStatusChange = newStatus => {
    if (newStatus === 'completed') {
      updateState({ orderstatus: 'completed', isModalVisible: false });
      // updateOrderDetails();
    } else {
      updateState({ orderstatus: 'pending', isModalVisible: false });
    }
    toggleOrderStatusModal();
  };
  const updateOrderDetails = () => {
    setLoading(true);
    const item = {
      order_status: orderstatus,
    };
    dispatch(EditOrderPlaceAction(item, Id)).then(async response => {
      console.log(response, 'responseresponseEditOrder')
      if (response?.message === "Order Update Successfully") {
        props?.navigation?.goBack();
      }
      console.log('Response_after_updating_order_details:', response);
    }).catch(error => {
      console.error('Error updating order details:', error);
    }).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    // Fetch data from the Razorpay API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.razorpay.com/v1/orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: '33OwrpULESs3i43BBsBgHK2Z',
          },
        });

        const data = await response.json();
        // console.log(data, 'woohoooooooo');
        if (data && data.length > 0) {
          const firstOrderId = data[0].id;
          setOrderId(firstOrderId);
        }
      } catch (error) {
        console.error('Error fetching data from Razorpay API:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  const handlePayment = () => {
    var options = {
      description: 'Credits towards Health App',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_iyfY8OJ0hrwePS',
      amount: totalAmount * 100,
      name: 'GS Web',
      order_id: orderId,
      prefill: {
        email: userEmail,
        contact: mobile,
        name: userName,
      },
      theme: { color: colors.blueColor },
    };

    RazorpayCheckout.open(options)
      .then(data => {
        setSuccessModalVisible(true);
        setIsPaymentComplete(true);
        const updatedPaymentStatus = 'paid';
        setPaymentStatus(updatedPaymentStatus);

        setTimeout(() => {
          setSuccessModalVisible(false);
        }, 3000);
      })
      .catch(error => {
        alert(`Error: ${error.description}`);
      });
  };

  return (
    <View style={{ flex: 1, paddingBottom: moderateScale(20) }}>
      <HeaderComp />
      <ScrollView>
        <View style={{ height: height / 2.7 }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.UploadPrecriptionView}>
              Upload Prescription
            </Text>
            <View style={styles.imgView}>
              <Image
                source={{
                  uri: `https://demogswebtech.com/medicalcare/public/images/order/${image}`,
                }}
                style={{
                  height: moderateScale(230),
                  borderRadius: moderateScale(10),
                }}
              />
            </View>
          </View>
        </View>
        <View style={{}}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.MedicneText}>Medicine</Text>
            <View style={styles.orderDetailsView}>
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: moderateScale(14),
                }}>
                {orderDetails}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ top: moderateScale(10) }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.AddressText}>Delivery Address</Text>
            <View style={styles.AddressView}>
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: moderateScale(14),
                }}>
                Delivery Address
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: height / 7, top: moderateScale(18) }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.AmountText}>Amount</Text>
            <View style={styles.amountView}>
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: moderateScale(16),
                }}>
                {totalAmount}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: height / 7 }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.paymentStatusText}>Payment Status</Text>
            <View style={styles.paymentStatusView}>
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: moderateScale(16),
                }}>
                {paymentStatus}
              </Text>
            </View>
          </View>
        </View>



        <View style={{ height: height / 7.5 }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.paymentStatusText}>Order Status</Text>
            <TouchableOpacity onPress={toggleOrderStatusModal}>
              <View style={styles.paymentStatusView}>
                <Text
                  style={{
                    fontFamily: fontFamily.semiBold,
                    fontSize: moderateScale(16),
                  }}>
                  {orderstatus}
                </Text>
              </View>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isOrderStatusModalVisible}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <TouchableOpacity
                    onPress={() => handleOrderStatusChange('pending')}>
                    <View style={styles.dropdownItem}>
                      <Text style={styles.dropdownText}>Pending</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.divider} />
                  <TouchableOpacity
                    onPress={() => handleOrderStatusChange('completed')}>
                    <View style={styles.dropdownItem}>
                      <Text style={styles.dropdownText}>Completed</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>


        <View style={{ height: height / 1.8 }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.UploadPrecriptionView}>
              Bill
            </Text>
            <View style={[styles.imgView, { height: moderateScale(363) }]}>
              <Image
                source={{
                  uri: `https://demogswebtech.com/medicalcare/public/images/order/${bill_file}`,
                }}
                style={{
                  // height: moderateScale(230),
                  height: height / 2.1, width: width / 1.11,
                  borderRadius: moderateScale(10),
                }}
              />
            </View>
          </View>
        </View>


        <View style={{ height: height / 10 }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            activeOpacity={0.7}
            onPress={OrderDetails}>
            <Text
              style={{
                paddingHorizontal: moderateScale(20),
                paddingVertical: moderateScale(10),
                backgroundColor: colors.blueColor,
                borderRadius: moderateScale(10),
                color: colors.whiteColor,
                fontSize: moderateScale(16),
              }}
              onPress={() => updateOrderDetails()}
            >
              {loading ? (
                <ActivityIndicator color={colors.whiteColor} />
              ) : (
                'Update Order'
              )}
            </Text>
          </TouchableOpacity>
        </View>

        {!isPaymentComplete ? (
          <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
            <TouchableHighlight
              style={{ flex: 1, opacity: isPaymentComplete ? 0.5 : 1 }}
              onPress={handlePayment}
              disabled={isPaymentComplete}>
              <WrapperContainer>
                <Text
                  style={{
                    paddingHorizontal: moderateScale(20),
                    paddingVertical: moderateScale(10),
                    backgroundColor: colors.blueColor,
                    borderRadius: moderateScale(10),
                    color: colors.whiteColor,
                    fontSize: moderateScale(16),
                  }}>
                  Pay Amount
                </Text>
              </WrapperContainer>
            </TouchableHighlight>
          </View>
        ) : (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: textScale(16), color: colors.blackColor }}>
              Payment completed
            </Text>
          </View>
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={successModalVisible}
          onRequestClose={() => {
            setSuccessModalVisible(false);
          }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
              }}>
              <Text>Payment Successful!</Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};
export default UserOrderDetails;

const styles = StyleSheet.create({
  imgView: {
    justifyContent: 'center',
    height: moderateScale(230),
    backgroundColor: colors.grayColor03,
    top: moderateScale(15),
    borderRadius: moderateScale(10),
  },
  UploadPrecriptionView: {
    fontSize: textScale(16),
    fontFamily: fontFamily.bold,
    color: colors.blackColor,
  },
  MedicneText: {
    fontSize: textScale(16),
    fontFamily: fontFamily.bold,
    color: colors.blackColor,
  },
  orderDetailsView: {
    top: moderateScale(5),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.blueColor,
    paddingHorizontal: moderateScale(20),
    textAlignVertical: 'top',
    paddingVertical: moderateScale(15),
  },
  AddressText: {
    fontSize: textScale(16),
    fontFamily: fontFamily.bold,
    color: colors.blackColor,
  },
  AddressView: {
    top: moderateScale(5),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.blueColor,
    paddingHorizontal: moderateScale(20),
    textAlignVertical: 'top',
    paddingVertical: moderateScale(15),
  },
  AmountText: {
    fontSize: textScale(16),
    fontFamily: fontFamily.bold,
    color: colors.blackColor,
  },
  amountView: {
    top: moderateScale(5),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.blueColor,
    paddingHorizontal: moderateScale(20),
    textAlignVertical: 'top',
    paddingVertical: moderateScale(15),
  },
  paymentStatusText: {
    fontSize: textScale(16),
    fontFamily: fontFamily.bold,
    color: colors.blackColor,
  },
  paymentStatusView: {
    top: moderateScale(5),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.blueColor,
    paddingHorizontal: moderateScale(20),
    textAlignVertical: 'top',
    paddingVertical: moderateScale(15),
  },
  order_statusText: {
    fontSize: textScale(16),
    fontFamily: fontFamily.bold,
    color: colors.blackColor,
  },
  order_statusView: {
    top: moderateScale(5),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.blueColor,
    paddingHorizontal: moderateScale(20),
    textAlignVertical: 'top',
    paddingVertical: moderateScale(15),
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.blueColor,
  },
  dropdownText: {
    fontSize: textScale(16),
    color: colors.blackColor,
    fontFamily: fontFamily.semiBold
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: moderateScale(20),
    bottom: moderateScale(80)
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.blueColor
  },
  dropdownItem: {
    paddingVertical: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center'
  },
});
