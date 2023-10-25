import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComp2 from '../../Components/HeaderComp2';
import WrapperContainer from '../../Components/WrapperContainer';
import {
  height, moderateScale, moderateScaleVertical, textScale,
} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import navigationStrings from '../../Navigations/navigationStrings';
import ModalComp from '../../Components/ModalComp';
// import EditProfileModal from '../../Components/EditProfileModal';ß
import ChemistProfileModal from '../../Components/ChemistProfileModal';
import DoctorProfileModal from '../../Components/DoctorProfileModal';
import PhysiotherapistProfileModal from '../../Components/PhysiotherapistProfileModal';
import LaboratoryProfileModal from '../../Components/LaboratoryProfileModal';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch } from 'react-redux';
// import { LogoutAction } from '../../redux/Action/LogoutAction';
import { useSelector } from 'react-redux';
import * as Types from '../../redux/Types/Types'
// import * as Types from '../../redux/Types/Types'
import Diagnostic_CenterModal from '../../Components/Diagnostic_CenterModal';
import { setToken } from '../../redux/Action/LoginAction'


// const ProfileData =[
// {
//   id: 1,
//   name: 'Chemist',
//   image: imagePath.icBack3
// },
// {
//   id: 2,
//   name: 'Doctor',
//   image: imagePath.icBack3
// },
// {
//   id: 3,
//   name: 'Physiotherepist',
//   image: imagePath.icBack3
// },
// {
//   id: 4,
//   name: 'Laboratory',
//   image: imagePath.icBack3
// },
// ]

const Profile = ({ navigation }) => {
  // console.log(navigation,'navigationnavigationnavigationnavigation')
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false)


  // const token = useSelector((state) => state)
  // console.log("tokentoken", token)

  const dispatch = useDispatch();
  const handlePress = () => {
    setExpanded(!expanded);
  };

  const orderHistory = () => {
    navigation.navigate(navigationStrings.MY_ORDER);
  };

  const medicalStores = () => {
    navigation.navigate(navigationStrings.Nearby_Medical);
  };

  // const onLogoutAlert = () => {
  //   Alert.alert(
  //     'Logout',
  //     'Are you sure, yout want to logout from this device',
  //     [{ text: 'yest', onPress: logout }, { text: 'No', }],
  //     { cancelable: true }
  //   )
  // }s



  const handleLogout = async () => {
    try {
      // dispatch(setToken([]))
      dispatch({
        type: Types.LOGIN,
        payload: []
      })
      // await AsyncStorage.removeItem('token'); // Clear user token from AsyncStorage
      await AsyncStorage.removeItem('token');
      // const hello = await AsyncStorage.getItem('token');
      // console.log(hello, "hellohello")
      // Navigate the user to the login screen or any other screen after logout
      // navigation?.navigate(navigationStrings?.LOGIN)

    } catch (error) {
      console.error('Error_during_logout:', error);
    }

  }
  return (
    <WrapperContainer>
      <HeaderComp2 text="Profile" />
      <View style={{ flex: 1 }}>
        {/* <>
          <EditProfileModal />
        </> */}
        <View
          style={styles.mainContainer}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons
              name="add-shopping-cart"
              color={colors.pinkColor2}
              size={35}
              style={{ alignSelf: 'center', top: moderateScale(3) }}
            />
            <Text
              style={styles.historyText}>
              Order history
            </Text>
          </View>
          <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={orderHistory}>
            <MaterialIcons
              name="navigate-next"
              color={colors.blackColor}
              size={32}
              style={{ alignSelf: 'center', top: moderateScale(2) }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={styles.medicalView}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome6
              name="house-chimney-medical"
              color={colors.pinkColor2}
              size={35}
              style={{ alignSelf: 'center', top: moderateScale(3) }}
            />
            <Text
              style={styles.medicalText}>
              Medical stores
            </Text>
          </View>
          <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={medicalStores}>
            <MaterialIcons
              name="navigate-next"
              color={colors.blackColor}
              size={32}
              style={{ alignSelf: 'center', top: moderateScale(2) }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(20),
            paddingVertical: moderateScaleVertical(30),
          }}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome5
              name="user-alt"
              color={colors.pinkColor2}
              size={35}
              style={{ alignSelf: 'center', top: moderateScale(3) }}
            />
            <Text
              style={styles.createProfileText}>
              Create Profile
            </Text>
          </View>

          <View style={{}}>
            <Button
              onPress={handlePress}
              icon={() => (
                <Icon
                  name={
                    expanded ? 'keyboard-arrow-down' : 'keyboard-arrow-right'
                  }
                  color={colors.blackColor}
                  size={32}
                  style={{ top: moderateScale(2), left: moderateScale(25) }}
                />
              )}></Button>
            {expanded && (
              <View
                style={{
                  position: 'absolute',
                  zIndex: 999,
                  top: moderateScale(30),
                  right: moderateScale(10),
                }}>
                <View style={styles.chemistPageView}>
                  <View>
                    <ChemistProfileModal />
                    {/* <TouchableOpacity
                      onPress={chemistPage}
                      style={styles.chemistPagebtn}>
                      <Text
                        style={{
                          fontFamily: fontFamily.semiBold,
                          fontSize: textScale(16),
                          color: colors.blackColor,
                        }}>
                        Chemist
                      </Text>
                      <MaterialIcons name="keyboard-arrow-right" color={colors.pinkColor2} size={22} />
                    </TouchableOpacity> */}
                    <View
                      style={{
                        borderWidth: 0.6,
                        backgroundColor: colors.pinkColor,
                      }}
                    />

                    <DoctorProfileModal />
                    {/* <TouchableOpacity
                      onPress={doctorPage}
                      style={styles.doctorPageBtn}>
                      <Text
                        style={{
                          fontFamily: fontFamily.semiBold,
                          fontSize: textScale(16),
                          color: colors.blackColor,
                        }}>
                        Doctor
                      </Text>
                      <MaterialIcons name="keyboard-arrow-right" color={colors.pinkColor2} size={22} />
                    </TouchableOpacity> */}
                    <View
                      style={{
                        borderWidth: 0.6,
                        backgroundColor: colors.pinkColor,
                      }}
                    />

                    <PhysiotherapistProfileModal />
                    {/* <TouchableOpacity
                      onPress={physiotherepistPage}
                      style={styles.physiotherepistPageBtn}>
                      <Text
                        style={{
                          fontFamily: fontFamily.semiBold,
                          fontSize: textScale(16),
                          color: colors.blackColor,
                        }}>
                        Physiotherapist
                      </Text>
                      <MaterialIcons name="keyboard-arrow-right" color={colors.pinkColor2} size={22} />
                    </TouchableOpacity> */}
                    <View style={{ borderWidth: 0.6, backgroundColor: colors.pinkColor }} />
                    <LaboratoryProfileModal />

                    <View style={{ borderWidth: 0.6, backgroundColor: colors.pinkColor }} />
                    <Diagnostic_CenterModal />
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity
          style={styles.signOutmainView} onPress={handleLogout}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons
              name="log-out"
              color={colors.pinkColor2}
              size={35}
              style={{ alignSelf: 'center', top: moderateScale(3) }}
            />
            <Text style={styles.signOutText}> Sign out</Text>
          </View>
          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <MaterialIcons
              name="navigate-next"
              color={colors.blackColor}
              size={32}
              style={{ alignSelf: 'center', top: moderateScale(2) }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>


      <ModalComp
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        style={{ justifyContent: 'center', paddigHorizontal: moderateScale(10), paddingVertical: moderateScale(120), top: moderateScale(30) }}
      >
        <View style={{ flex: 1, backgroundColor: colors.whiteColor, borderRadius: (25) }}>
          <Text>WERTYUI</Text>
        </View>
      </ModalComp>

    </WrapperContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(30),
  },
  historyText: {
    fontSize: textScale(18),
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
    left: moderateScale(25),
    color: colors.pinkColor2,
  },
  medicalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(30),
  },
  medicalText: {
    fontSize: textScale(18),
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
    left: moderateScale(25),
    color: colors.pinkColor2,
  },
  chemistPageView: {
    // height:(125),
    width: moderateScale(150),
    paddingVertical: moderateScaleVertical(3),
    backgroundColor: colors.whiteColor,
    borderRadius: moderateScale(20),
    borderWidth: 0.7,
    borderColor: colors.pinkColor,
    bottom: moderateScale(220)
  },
  // chemistPagebtn: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: moderateScale(10),
  //   paddingVertical: moderateScaleVertical(5),
  // },
  signOutText: {
    fontSize: textScale(18),
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
    left: moderateScale(25),
    color: colors.pinkColor2,
  },
  signOutmainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(30),
    // backgroundColor:"red"
  },
  // doctorPageBtn: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: moderateScale(10),
  //   paddingVertical: moderateScaleVertical(5),
  // },
  // physiotherepistPageBtn: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: moderateScale(10),
  //   paddingVertical: moderateScaleVertical(5),
  // },
  // laboratoryPageBtn: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: moderateScale(10),
  //   paddingVertical: moderateScaleVertical(5),
  // },
  createProfileText: {
    fontSize: textScale(18),
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
    left: moderateScale(25),
    color: colors.pinkColor2,
  },
  modalStyle: {
    backgroundColor: colors.blackColor,
    minHeight: moderateScale(height / 4),
    borderTopLeftRadius: moderateScale(8),
    borderTopRightRadius: moderateScale(8),
    padding: moderateScale(16),
  },
  headingStyle: {
    fontFamily: fontFamily.semiBold,
    color: colors.blackColor,
    fontSize: textScale(16),
    textTransform: 'capitalize',
    marginBottom: moderateScaleVertical(12),
  },

});
