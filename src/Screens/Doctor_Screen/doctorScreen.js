import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import {
  moderateScale,
  textScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderComp from '../../Components/HeaderComp';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const DoctorScreen = (props) => {
  console.log(props, 'propsDoctorScreen');

  const medicalData = props?.route?.params?.data;
  console.log(medicalData, 'medicalDatamedicalData');

  const id = props?.route?.params?.data?.id;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getChemistData = useSelector(state => state);
  console.log(getChemistData, 'getChemistDatagetChemistDatagetChemistData');


  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>
        <HeaderComp />

        <View style={{ flex: 0.3 }}>
          <View style={{ flex: 2, justifyContent: 'center' }}>
            <View
              style={{
                paddingHorizontal: moderateScale(15),
                top: moderateScale(10),
              }}>
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: textScale(20),
                  color: colors.blackColor,
                }}>
                Dr.{medicalData?.name}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 3,
              padding: moderateScale(20),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ justifyContent: 'center', top: moderateScale(10) }}>
              <Image
                // source={{
                //   uri: `https://demogswebtech.com/medicalcare/public/images/user/${medicalData?.img}`,
                // }}
                source={{ uri: medicalData?.img_url }}
                style={styles.swiperImage1} />
            </View>

            <View style={{ justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons
                  name="time"
                  color={colors.grayColor}
                  size={15}
                  style={{ alignSelf: 'center' }}
                />
                <Text
                  style={{
                    fontFamily: fontFamily.regular,
                    fontSize: textScale(12),
                    color: colors.blackColor,
                    left: moderateScale(3),
                  }}>
                  Open unit 9:30 pm
                </Text>
              </View>
              <View style={{ flexDirection: 'row', top: moderateScale(3) }}>
                <EvilIcons
                  name="location"
                  color={colors.blackColor}
                  size={15}
                  style={{ alignSelf: 'center' }}
                />
                <Text
                  style={{
                    fontFamily: fontFamily.regular,
                    fontSize: textScale(12),
                    color: colors.blackColor,
                    left: moderateScale(3),
                  }}>
                  {medicalData?.city}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flex: 0.05, justifyContent: 'center' }}>
          <View
            style={{
              paddingHorizontal: moderateScale(20),
              paddingVertical: moderateScale(5),
              flexDirection: 'row'
            }}>
            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: textScale(18),
                color: colors.blackColor,
              }}>
              speciality -
            </Text>
            <View>
              <Text
                style={{
                  top: moderateScale(3),
                  fontFamily: fontFamily.semiBold,
                  fontSize: textScale(16),
                  color: colors.blueColor, left: 5
                }}>
                {medicalData.speciality}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 0.05, justifyContent: 'center' }}>
          <View
            style={{
              paddingHorizontal: moderateScale(20),
              paddingVertical: moderateScale(5),
              flexDirection: 'row'
            }}>
            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: textScale(18),
                color: colors.blackColor,
              }}>
              MobileNo. -
            </Text>
            <View>
              <Text
                style={{
                  top: moderateScale(3),
                  fontFamily: fontFamily.semiBold,
                  fontSize: textScale(16),
                  color: colors.blueColor, left: 5
                }}>
                {medicalData.mobile}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 0.6 }}>
          <View
            style={{
              paddingHorizontal: moderateScale(20),
              justifyContent: 'center',
              paddingVertical: moderateScale(5),
            }}>
            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: textScale(18),
                color: colors.blackColor,
              }}>
              About
            </Text>
            <View>
              <Text
                style={{
                  top: moderateScale(3),
                  fontFamily: fontFamily.regular,
                  fontSize: textScale(12),
                  color: colors.blackColor,
                }}>
                {medicalData.description ? medicalData.description :
                  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting, remaining essentially unchanged.`}
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: moderateScale(20),
              justifyContent: 'center',
              paddingVertical: moderateScale(5),
            }}>
            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: textScale(18),
                color: colors.blackColor,
              }}>
              Info
            </Text>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    height: 8,
                    width: 8,
                    borderRadius: 8,
                    backgroundColor: colors.blackColor,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: textScale(16),
                    color: colors.blackColor,
                    left: moderateScale(5),
                  }}>
                  GST Number
                </Text>
              </View>
              <AntDesign
                name="checkcircle"
                color={colors.blueColor}
                size={15}
                style={{ alignSelf: 'center' }}
              />
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    height: 8,
                    width: 8,
                    borderRadius: 8,
                    backgroundColor: colors.blackColor,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: textScale(16),
                    color: colors.blackColor,
                    left: moderateScale(5),
                  }}>
                  Drug license number
                </Text>
              </View>
              <AntDesign
                name="checkcircle"
                color={colors.blueColor}
                size={15}
                style={{ alignSelf: 'center' }}
              />
            </View>
          </View>

          {/* <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.7}
            onPress={() =>
              props?.navigation?.navigate(
                navigationStrings.UPLOAD_PRESCIPTION,
                { id: id },
              )
            }>
            <Text style={styles.btnText}>
              Place an order
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </WrapperContainer>
  );
};

export default DoctorScreen;

const styles = StyleSheet.create({
  mainSwiper: {
    flex: 0.25,
  },
  swiperActiveDot: {
    backgroundColor: colors.blueColor,
    width: moderateScale(25),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    margin: moderateScale(2),
  },
  swiperDot: {
    backgroundColor: colors.grayColor02,
    width: moderateScale(25),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    margin: moderateScale(2),
  },
  swiperImage1: {
    height: moderateScale(110),
    width: moderateScale(110),
    alignSelf: 'center',
    borderRadius: moderateScale(55),
  },
  btn: {
    justifyContent: 'center',
    bottom: moderateScale(10),
    alignSelf: 'center',
    top: moderateScale(30),
  },
  btnText: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(10),
    backgroundColor: colors.blueColor,
    borderRadius: moderateScale(10),
    color: colors.whiteColor,
    fontSize: moderateScale(16),
  }
});
