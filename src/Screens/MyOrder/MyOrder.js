import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderComp2 from '../../Components/HeaderComp2'
import WrapperContainer from '../../Components/WrapperContainer'
import fontFamily from '../../styles/fontFamily'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import imagePath from '../../constants/imagePath'
import ButtonComp from '../../Components/ButtonComp'
import { GetCompletedOrderAction, GetPendingOrderAction } from '../../redux/Action/HomeChemistAction';
import { useDispatch, useSelector } from 'react-redux'
import navigationStrings from '../../Navigations/navigationStrings'
import {useFocusEffect} from '@react-navigation/native';

// const upComingData = [
//   {
//     id: 1,
//     mainText: '#ghhhh678ca',
//     mainText2: 'Upcoming',
//     mainText3: 'INR 350.00',
//     mainText4: '7 items',
//     title: 'Today at 12:30 PM',
//     title2: 'Multivitamin X 1',
//     title3: 'Bextram Gold X 2'
//   },
//   {
//     id: 2,
//     mainText: '#ghhhh678ca',
//     mainText2: 'Upcoming',
//     mainText3: 'INR 350.00',
//     mainText4: '7 items',
//     title: 'Today at 12:30 PM',
//     title2: 'Multivitamin X 1',
//     title3: 'Bextram Gold X 2'
//   },
//   {
//     id: 3,
//     mainText: '#ghhhh678ca',
//     mainText2: 'Upcoming',
//     mainText3: 'INR 350.00',
//     mainText4: '7 items',
//     title: 'Today at 12:30 PM',
//     title2: 'Multivitamin X 1',
//     title3: 'Bextram Gold X 2'
//   },
//   {
//     id: 4,
//     mainText: '#ghhhh678ca',
//     mainText2: 'Upcoming',
//     mainText3: 'INR 350.00',
//     mainText4: '7 items',
//     title: 'Today at 12:30 PM',
//     title2: 'Multivitamin X 1',
//     title3: 'Bextram Gold X 2'
//   },
//   {
//     id: 5,
//     mainText: '#ghhhh678ca',
//     mainText2: 'Upcoming',
//     mainText3: 'INR 350.00',
//     mainText4: '7 items',
//     title: 'Today at 12:30 PM',
//     title2: 'Multivitamin X 1',
//     title3: 'Bextram Gold X 2'
//   }
// ];

// const completedData = [
//   {
//     id: 1,
//     mainText: '#ghhhh678ca',
//     mainText2: 'Completed',
//     mainText3: 'INR 350.00',
//     mainText4: '7 items',
//     title: 'Today at 12:30 PM',
//     title2: 'Multivitamin X 1',
//     title3: 'Bextram Gold X 2'
//   },
//   {
//     id: 2,
//     mainText: '#ghhhh678ca',
//     mainText2: 'Completed',
//     mainText3: 'INR 350.00',
//     mainText4: '7 items',
//     title: 'Today at 12:30 PM',
//     title2: 'Multivitamin X 1',
//     title3: 'Bextram Gold X 2'
//   },
//   {
//     id: 3,
//     mainText: '#ghhhh678ca',
//     mainText2: 'Completed',
//     mainText3: 'INR 350.00',
//     mainText4: '7 items',
//     title: 'Today at 12:30 PM',
//     title2: 'Multivitamin X 1',
//     title3: 'Bextram Gold X 2'
//   },
//   {
//     id: 4,
//     mainText: '#ghhhh678ca',
//     mainText2: 'Completed',
//     mainText3: 'INR 350.00',
//     mainText4: '7 items',
//     title: 'Today at 12:30 PM',
//     title2: 'Multivitamin X 1',
//     title3: 'Bextram Gold X 2'
//   },
//   {
//     id: 5,
//     mainText: '#ghhhh678ca',
//     mainText2: 'Completed',
//     mainText3: 'INR 350.00',
//     mainText4: '7 items',
//     title: 'Today at 12:30 PM',
//     title2: 'Multivitamin X 1',
//     title3: 'Bextram Gold X 2'
//   }
// ];

const MyOrder = ({navigation}) => {
  const dispatch = useDispatch();
  const [pendingOrder, setPendingOrder] = useState('');
  const [completeOrder, setCompleteOrder] = useState('');
  console.log(completeOrder, 'completeOrdercompleteOrder');

  const profileId = useSelector(state => state?.LoginReducer?.Login.user?.id);
  // console.log("profileIdprofileId", profileId)

  const id = profileId;
  // console.log(id,'ididid')

  useEffect(() => {
    dispatch(GetPendingOrderAction(id)).then(async response => {
      console.log(response, 'GetPendingOrderActionGetPending');
      setPendingOrder(response.order);
    });
  }, []);

  useEffect(() => {
    dispatch(GetCompletedOrderAction(id)).then(async response => {
      console.log(response, 'GetCompletedOrder');
      setCompleteOrder(response.order);
    });
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      // This function will be called when the component is focused
      console.log('MyOrder component is focused');
      dispatch(GetPendingOrderAction(id)).then(async response => {
        console.log(response, 'GetPendingOrderActionGetPending');
        setPendingOrder(response.order);
      });
      dispatch(GetCompletedOrderAction(id)).then(async response => {
        console.log(response, 'GetCompletedOrder');
        setCompleteOrder(response.order);
      });

      // Add any other logic you want to execute when the component is focused

      return () => {
        // This function will be called when the component is blurred or unmounted
        console.log('MyOrder component is blurred or unmounted');

        // Add any logic you want to execute when the component is blurred or unmounted
        // For example, dispatch actions to reset or clear any data if needed
      };
    }, []),
  );

  const [selectedTab, setSelectedTab] = useState(0);

  const renderItem = ({item}) => {
    return (
      <View style={{paddingVertical: moderateScaleVertical(20)}}>
        <View style={styles.containerView}>
          <View style={styles.mainView}>
            <Text style={styles.mainText}>{item?.order_id}</Text>
            <Text style={styles.mainText2}>{item?.title}</Text>
          </View>

          <View>
            <Text style={styles.mainText3}>{item?.order_status}</Text>
          </View>
        </View>

        <View style={styles.titleMainView}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.titleText}>{item?.mainText4}</Text>

            <View>
              <Image
                source={
                  item.prescription === ''
                    ? imagePath.icMedical
                    : {
                        uri: `https://demogswebtech.com/medicalcare/public/images/order/${item?.prescription}`,
                      }
                }
                style={{
                  height: moderateScale(70),
                  width: moderateScale(120),
                  borderRadius: moderateScale(10),
                }}
              />
            </View>

            <Text style={styles.titleText2}>{item?.order_detail}</Text>
            {/* <Text style={styles.titleText2}>{item?.total_amount}</Text> */}
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.mainText4}>{item?.total_amount}</Text>

            <TouchableOpacity
              style={styles.cardButton}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate(navigationStrings.UserOrderDetails, {
                  item: item,
                })
              }>
              <Text style={styles.cardButtonText}>Order details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const separatorComponent = () => {
    return (
      <View style={{borderWidth: 0.6, backgroundColor: colors.grayColor}} />
    );
  };

  return (
    <WrapperContainer>
      <HeaderComp2 text="My order" />
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(0);
            }}
            style={{
              backgroundColor:
                selectedTab == 0 ? colors.blueColor : colors.whiteColor,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: selectedTab == 0 ? colors.whiteColor : colors.blackColor,
                fontSize: textScale(16),
                alignSelf: 'center',
                fontFamily: fontFamily.semiBold,
                paddingHorizontal: moderateScale(12),
                paddingVertical: moderateScaleVertical(5),
              }}>
              Pending
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedTab(1);
            }}
            style={{
              backgroundColor:
                selectedTab == 1 ? colors.blueColor : colors.whiteColor,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: selectedTab == 1 ? colors.whiteColor : colors.blackColor,
                fontSize: textScale(16),
                alignSelf: 'center',
                fontFamily: fontFamily.semiBold,
                paddingHorizontal: moderateScale(12),
                paddingVertical: moderateScaleVertical(5),
              }}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {selectedTab == 0 ? (
        <View style={{flex: 1}}>
          <FlatList
            data={pendingOrder}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={separatorComponent}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <FlatList
              data={completeOrder}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={separatorComponent}
            />
          </View>
        </View>
      )}
    </WrapperContainer>
  );
};

export default MyOrder

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
    fontFamily: fontFamily.semiBold,
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
    fontSize: textScale(14),
    color: colors.blackColor,
    alignSelf: 'center'
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