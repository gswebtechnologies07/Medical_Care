import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Modal,
  Alert,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComp from '../../Components/HeaderComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { height, moderateScale, textScale, width } from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import ImagePicker from 'react-native-image-crop-picker';
import { androidCameraPermission } from '../../../permissions';
import { useDispatch } from 'react-redux';
import { EditOrderPlaceAction } from '../../redux/Action/OrderPlaceAction';

const ChemistOrderDetails = (props) => {
  console.log(props, ':OrderDetailsOrderDetailsprops');
  console.log(props?.route?.params?.data, 'data');

  const Prescription = props?.route?.params?.data?.prescription;
  console.log(Prescription, 'medicinemedicinemedicine');
  const medicine = props?.route?.params?.data?.order_detail;

  const Delivery_Address = props?.route?.params?.data?.delivary_address;

  const Payment_status = props?.route?.params?.data?.payment_status;

  const order_status = props?.route?.params?.data?.order_status;
  console.log(order_status, 'order_status')
  const Id = props?.route?.params?.data?.id;
  const total_amount = props?.route?.params?.data?.total_amount;
  const [loading, setLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState('pending');
  const [isOrderStatusModalVisible, setOrderStatusModalVisible] =
    useState(false);

  const [gallary, setGallary] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    setOrderStatus(order_status);
  }, [order_status]);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    amount: total_amount || 0,
    isModalVisible: false,
    paymentStatus: Payment_status || 'unpaid',
  });

  const { amount, isModalVisible, paymentStatus } = state;

  const updateState = (data) =>
    setState((prevState) => ({ ...prevState, ...data }));

  const toggleModal = () => {
    updateState({ isModalVisible: !isModalVisible });
  };
  const toggleOrderStatusModal = () => {
    setOrderStatusModalVisible(!isOrderStatusModalVisible);
  };

  const handlePaymentStatusChange = (newPaymentStatus) => {
    if (newPaymentStatus === 'paid') {
      updateState({ paymentStatus: 'paid', isModalVisible: false });
      // updateOrderDetails();
    } else {
      updateState({ paymentStatus: 'unpaid', isModalVisible: false });
    }
    toggleModal();
  };
  const handleOrderStatusChange = (newStatus) => {
    setOrderStatus(newStatus);
    toggleOrderStatusModal();
  };
  const OrderDetails = () => {
    let updatedOrderStatus = order_status;

    if (paymentStatus === 'paid') {
      updatedOrderStatus = 'completed';
    }
    // navigation.navigate(navigationStrings.HomeChemist);
    console.log('Updated_Order_Status:', updatedOrderStatus);
  };



  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission()
    if (permissionStatus || Platform.OS == 'android') {
      Alert.alert(
        'Profile Picture',
        'Choose an option',
        [
          { text: 'Gallery', onPress: onGallery },
          { text: 'Camera', onPress: onCamera },
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
        console.log("bill_file", image)
        let filename = image.path.substring(image.path.lastIndexOf('/') + 1)
        let uploadFile = {
          type: image.mime,
          uri: image.path,
          name: filename
        }
        console.log(uploadFile, 'uploadFileuploadFileuploadFile')
        const img = image?.path
        console.log("imgggg", img);
        setGallary(uploadFile)
        setImage(img)
      }
    });
  };

  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      if (image) {
        console.log("bill_file", image);
        let filename = image.path.substring(image.path.lastIndexOf('/') + 1);
        let uploadFile = {
          type: image.mime,
          uri: image.path,
          name: filename
        };
        console.log(uploadFile, 'uploadFileuploadFileuploadFile');
        const img = image?.path;
        console.log("imgggg", img);
        setGallary(uploadFile);
        setImage(img);
      }
    });
  };

  const updateOrderDetails = () => {
    setLoading(true);
    const formData = new FormData();

    if (gallary && gallary.uri) { // Check if gallary and gallary.uri are defined
      formData.append('bill_file', {
        uri: gallary.uri, // Use gallary.uri here
        type: gallary.type,
        name: gallary.name,
      });
    } else {
      console.error('URI_is_undefined_or_null_in_items', gallary);
      setLoading(false);
      return;
    }

    formData.append('total_amount', state.amount,);
    formData.append('payment_status', paymentStatus);
    // const data = {
    //   total_amount: state.amount,
    //   payment_status: paymentStatus,
    // };

    console.log(formData, 'datadata');

    dispatch(EditOrderPlaceAction(formData, Id))
      .then(async (response) => {
        console.log('Order_details_updated_successfully:', response);
        if (response?.message === "Order Update Successfully") {
          props?.navigation?.goBack();
        } else {
          console.error(
            'Failed_to_update_order_details:',
            response?.message
          );
        }
      })
      .catch((error) => {
        console.error('Error updating order details:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <View style={{ flex: 1 }}>
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
                  uri: `https://demogswebtech.com/medicalcare/public/images/order/${Prescription}`,
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
                {medicine}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: height / 7, top: moderateScale(18) }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.AmountText}>Amount</Text>
            <View style={styles.amountView}>
              <TextInput
                style={{
                  fontFamily: fontFamily.semiBold,
                  left: moderateScale(10),
                }}
                value={amount}
                placeholder="Amount"
                onChangeText={(amount) => updateState({ amount })}
              />
            </View>
          </View>
        </View>


        <View style={{ height: height / 7 }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.paymentStatusText}>Payment Status</Text>
            <TouchableOpacity onPress={toggleModal}>
              <View style={styles.paymentStatusView}>
                <Text
                  style={{
                    fontFamily: fontFamily.semiBold,
                    fontSize: moderateScale(16),
                  }}>
                  {paymentStatus}
                </Text>
              </View>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <TouchableOpacity
                    onPress={() => handlePaymentStatusChange('unpaid')}>
                    <View style={styles.dropdownItem}>
                      <Text style={styles.dropdownText}>Unpaid</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.divider} />
                  <TouchableOpacity
                    onPress={() => handlePaymentStatusChange('paid')}>
                    <View style={styles.dropdownItem}>
                      <Text style={styles.dropdownText}>Paid</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>

        <View style={{ height: height / 7.5 }}>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={styles.order_statusText}>Order Status</Text>
            <TouchableOpacity onPress={toggleOrderStatusModal}>
              <View style={styles.order_statusView}>
                <Text
                  style={{
                    fontFamily: fontFamily.semiBold,
                    fontSize: moderateScale(16),
                  }}>
                  {order_status}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        <View style={{ height: height / 1.8, paddingHorizontal: moderateScale(20) }}>
          <Text style={{ fontSize: textScale(20), fontFamily: fontFamily.bold, color: colors.blackColor }}>Upload Bill</Text>
          <View style={{ justifyContent: 'center', height: moderateScale(363), backgroundColor: colors.grayColor03, top: moderateScale(10), borderRadius: moderateScale(10) }}>
            <TouchableOpacity style={{ alignSelf: "center", alignItems: 'center' }} onPress={() => onSelectImage()}>
              {!image ? <AntDesign name="camera" color={colors.grayColor} size={50} /> : <Image source={{ uri: image }} style={{ height: height / 2.1, width: width / 1.12, borderRadius: 10 }} />}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: height / 10 }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            activeOpacity={0.7}
            onPress={() => OrderDetails()}>
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
      </ScrollView>
    </View>
  );
};

export default ChemistOrderDetails;

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
  dropdownText: { fontSize: textScale(16), color: colors.blackColor, fontFamily: fontFamily.semiBold },

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
