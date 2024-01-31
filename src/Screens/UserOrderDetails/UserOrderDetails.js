import {React, useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableHighlight,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderComp from '../../Components/HeaderComp';
import {height, moderateScale, textScale} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import WrapperContainer from '../../Components/WrapperContainer';
import RazorpayCheckout from 'react-native-razorpay';
import {EditOrderPlaceAction} from '../../redux/Action/OrderPlaceAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

const UserOrderDetails = props => {
  console.log(props, 'OrderDetailsOrderDetailsprops');

  const navigation = useNavigation();

  const image = props?.route?.params?.item?.prescription;
  const orderDetails = props?.route?.params?.item?.order_detail;
  const totalAmount = props?.route?.params?.item?.total_amount;
  const order_status = props?.route?.params?.item?.order_status;
  const Id = props?.route?.params?.item?.id;
  // const paymentStatus = props?.route?.params?.item?.payment_status;
  // const OrderStatus = props?.route?.params?.item?.order_status;
  const userName = props?.route?.params?.item?.user_name;
  const userEmail = props?.route?.params?.item?.user_email;
  const mobile = props?.route?.params?.item?.user_mobile;
  const [orderId, setOrderId] = useState(null);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  const [isPaymentComplete, setIsPaymentComplete] = useState(
    props?.route?.params?.item?.payment_status === 'paid',
  );
  const [isOrderStatusModalVisible, setOrderStatusModalVisible] =
    useState(false);
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

  const updateState = data => setState(prevState => ({...prevState, ...data}));
  const {orderstatus} = state;
  const handleOrderStatusChange = newStatus => {
    if (newStatus === 'completed') {
      updateState({orderstatus: 'completed', isModalVisible: false});
      updateOrderDetails();
    } else {
      updateState({orderstatus: 'pending', isModalVisible: false});
    }
    toggleOrderStatusModal();
  };
  const updateOrderDetails = () => {
    const item = {
      order_status: orderstatus,
    };
    dispatch(EditOrderPlaceAction(item, Id)).then(async response => {
      console.log('Response after updating order details:', response);
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
      theme: {color: '#53a20e'},
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
    <View style={{flex: 1, paddingBottom: moderateScale(20)}}>
      <HeaderComp />
      <ScrollView>
        <View style={{height: height / 2.7}}>
          <View style={{paddingHorizontal: moderateScale(20)}}>
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
          <View style={{paddingHorizontal: moderateScale(20)}}>
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
        <View style={{top: moderateScale(10)}}>
          <View style={{paddingHorizontal: moderateScale(20)}}>
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
        <View style={{height: height / 7, top: moderateScale(18)}}>
          <View style={{paddingHorizontal: moderateScale(20)}}>
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
        <View style={{height: height / 7}}>
          <View style={{paddingHorizontal: moderateScale(20)}}>
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
        <View style={{height: height / 7}}>
          <View style={{paddingHorizontal: moderateScale(20)}}>
            <Text style={styles.order_statusText}>Order Status</Text>
            <TouchableOpacity onPress={toggleOrderStatusModal}>
              <View style={styles.order_statusView}>
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
                      <Text>Pending</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.divider} />
                  <TouchableOpacity
                    onPress={() => handleOrderStatusChange('completed')}>
                    <View style={styles.dropdownItem}>
                      <Text>Completed</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.divider} />
                </View>
              </View>
            </Modal>
          </View>
        </View>

        <View style={{height: height / 10}}>
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
                // backgroundColor: colors.blueColor,
                backgroundColor: buttonPressed
                  ? colors.grayColor
                  : colors.blueColor,
                borderRadius: moderateScale(10),
                color: colors.whiteColor,
                fontSize: moderateScale(16),
              }}
              onPress={() => updateOrderDetails()}
              onPressIn={() => setButtonPressed(true)}
              onPressOut={() => setButtonPressed(false)}>
              Update Order
            </Text>
          </TouchableOpacity>
        </View>

        {!isPaymentComplete ? (
          <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <TouchableHighlight
              style={{flex: 1, opacity: isPaymentComplete ? 0.5 : 1}}
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
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: textScale(16), color: colors.blackColor}}>
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
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 100,
  },
  modalContent: {
    backgroundColor: colors.grayColor03,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    width: 350,
  },
  dropdownItem: {paddingVertical: moderateScale(10)},
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    marginVertical: moderateScale(5),
  },
});
