import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComp2 from '../../Components/HeaderComp2';
import WrapperContainer from '../../Components/WrapperContainer';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
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
// import ChemistProfileModal from '../../Components/ChemistProfileModal';
// import DoctorProfileModal from '../../Components/DoctorProfileModal';
// import PhysiotherapistProfileModal from '../../Components/PhysiotherapistProfileModal';
// import LaboratoryProfileModal from '../../Components/LaboratoryProfileModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
// import { LogoutAction } from '../../redux/Action/LogoutAction';
import {useSelector} from 'react-redux';
import * as Types from '../../redux/Types/Types';
// import * as Types from '../../redux/Types/Types'
// import Diagnostic_CenterModal from '../../Components/Diagnostic_CenterModal';

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

const Profile = ({navigation}) => {
  // console.log(navigation,'navigationnavigationnavigationnavigation')
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const getHomeChemistData = useSelector(
    state => state?.LoginReducer?.Login.user?.user_type,
  );
  console.log(getHomeChemistData, 'getHomeChemistData');

  // const token = useSelector((state) => state)
  // console.log("tokentoken", token)

  const dispatch = useDispatch();
  // const handlePress = () => {
  //   setExpanded(!expanded);
  // };

  const orderHistory = () => {
    navigation.navigate(navigationStrings.MY_ORDER);
  };

  const medicalStores = () => {
    navigation.navigate(navigationStrings.Nearby_Medical);
  };
  const handleLogout = async () => {
    try {
      dispatch({
        type: Types.LOGIN,
        payload: [],
      });
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.error('Error_during_logout:', error);
    }
  };
  return (
    <WrapperContainer>
      <HeaderComp2 text="Profile" />
      <View style={{flex: 1}}>
        {getHomeChemistData !== 'Doctor' &&
          getHomeChemistData !== 'Physiotherapist' &&
          getHomeChemistData !== 'Laboratory' &&
          getHomeChemistData !== 'Diagnostic' && (
            <TouchableOpacity
              style={styles.signOutmainView}
              onPress={orderHistory}>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="add-shopping-cart"
                  color={colors.pinkColor2}
                  size={35}
                  style={{alignSelf: 'center', top: moderateScale(3)}}
                />
                <Text style={styles.signOutText}>My Order</Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <MaterialIcons
                  name="navigate-next"
                  color={colors.blackColor}
                  size={32}
                  style={{alignSelf: 'center', top: moderateScale(2)}}
                />
              </View>
            </TouchableOpacity>
          )}
        {getHomeChemistData !== 'Doctor' &&
          getHomeChemistData !== 'Physiotherapist' &&
          getHomeChemistData !== 'Laboratory' &&
          getHomeChemistData !== 'Chemist' &&
          getHomeChemistData !== 'Diagnostic' && (
            <TouchableOpacity
              style={styles.signOutmainView}
              onPress={medicalStores}>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome6
                  name="house-chimney-medical"
                  color={colors.pinkColor2}
                  size={35}
                  style={{alignSelf: 'center', top: moderateScale(3)}}
                />
                <Text style={styles.signOutText}>Medical stores</Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <MaterialIcons
                  name="navigate-next"
                  color={colors.blackColor}
                  size={32}
                  style={{alignSelf: 'center', top: moderateScale(2)}}
                />
              </View>
            </TouchableOpacity>
          )}
        {getHomeChemistData !== 'Other' &&
          getHomeChemistData !== 'Physiotherapist' &&
          getHomeChemistData !== 'Laboratory' &&
          getHomeChemistData !== 'Diagnostic' &&
          getHomeChemistData !== 'Doctor' && (
            <TouchableOpacity
              style={styles.signOutmainView}
              onPress={() =>
                navigation?.navigate(navigationStrings.ChemistCreate)
              }>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome5
                  name="user-alt"
                  color={colors.pinkColor2}
                  size={35}
                  style={{alignSelf: 'center', top: moderateScale(3)}}
                />
                <Text style={styles.signOutText}>Edit Profile </Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <MaterialIcons
                  name="navigate-next"
                  color={colors.blackColor}
                  size={32}
                  style={{alignSelf: 'center', top: moderateScale(2)}}
                />
              </View>
            </TouchableOpacity>
          )}

        {getHomeChemistData !== 'Other' &&
          getHomeChemistData !== 'Physiotherapist' &&
          getHomeChemistData !== 'Laboratory' &&
          getHomeChemistData !== 'Chemist' &&
          getHomeChemistData !== 'Doctor' && (
            <TouchableOpacity
              style={styles.signOutmainView}
              onPress={() =>
                navigation?.navigate(navigationStrings.ProfileCreateDiagnos)
              }>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome5
                  name="user-alt"
                  color={colors.pinkColor2}
                  size={35}
                  style={{alignSelf: 'center', top: moderateScale(3)}}
                />
                <Text style={styles.signOutText}>Edit Profile </Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <MaterialIcons
                  name="navigate-next"
                  color={colors.blackColor}
                  size={32}
                  style={{alignSelf: 'center', top: moderateScale(2)}}
                />
              </View>
            </TouchableOpacity>
          )}

        {getHomeChemistData !== 'Other' &&
          getHomeChemistData !== 'Physiotherapist' &&
          getHomeChemistData !== 'Chemist' &&
          getHomeChemistData !== 'Diagnostic' &&
          getHomeChemistData !== 'Doctor' && (
            <TouchableOpacity
              style={styles.signOutmainView}
              onPress={() =>
                navigation?.navigate(navigationStrings.ProfileCreateLab)
              }>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome5
                  name="user-alt"
                  color={colors.pinkColor2}
                  size={35}
                  style={{alignSelf: 'center', top: moderateScale(3)}}
                />
                <Text style={styles.signOutText}> Profile </Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <MaterialIcons
                  name="navigate-next"
                  color={colors.blackColor}
                  size={32}
                  style={{alignSelf: 'center', top: moderateScale(2)}}
                />
              </View>
            </TouchableOpacity>
          )}

        {getHomeChemistData !== 'Other' &&
          getHomeChemistData !== 'Physiotherapist' &&
          getHomeChemistData !== 'Laboratory' &&
          getHomeChemistData !== 'Diagnostic' &&
          getHomeChemistData !== 'Chemist' && (
            <TouchableOpacity
              style={styles.signOutmainView}
              onPress={() =>
                navigation?.navigate(navigationStrings.DoctorCreate)
              }>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome5
                  name="user-alt"
                  color={colors.pinkColor2}
                  size={35}
                  style={{alignSelf: 'center', top: moderateScale(3)}}
                />
                <Text style={styles.signOutText}>Edit Profile </Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <MaterialIcons
                  name="navigate-next"
                  color={colors.blackColor}
                  size={32}
                  style={{alignSelf: 'center', top: moderateScale(2)}}
                />
              </View>
            </TouchableOpacity>
          )}

        {getHomeChemistData !== 'Other' &&
          getHomeChemistData !== 'Doctor' &&
          getHomeChemistData !== 'Laboratory' &&
          getHomeChemistData !== 'Diagnostic' &&
          getHomeChemistData !== 'Chemist' && (
            <TouchableOpacity
              style={styles.signOutmainView}
              onPress={() =>
                navigation?.navigate(navigationStrings.ProfileCreatePhysio)
              }>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome5
                  name="user-alt"
                  color={colors.pinkColor2}
                  size={35}
                  style={{alignSelf: 'center', top: moderateScale(3)}}
                />
                <Text style={styles.signOutText}>Edit Profile </Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <MaterialIcons
                  name="navigate-next"
                  color={colors.blackColor}
                  size={32}
                  style={{alignSelf: 'center', top: moderateScale(2)}}
                />
              </View>
            </TouchableOpacity>
          )}
        {getHomeChemistData !== 'Doctor' &&
          getHomeChemistData !== 'Chemist' &&
          getHomeChemistData !== 'Physiotherapist' &&
          getHomeChemistData !== 'Laboratory' &&
          getHomeChemistData !== 'Diagnostic' && (
            <TouchableOpacity
              style={styles.signOutmainView}
              onPress={() =>
                navigation?.navigate(navigationStrings.ProfileCreate)
              }>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome5
                  name="user-alt"
                  color={colors.pinkColor2}
                  size={35}
                  style={{alignSelf: 'center', top: moderateScale(3)}}
                />
                <Text style={styles.signOutText}>Edit Profile</Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <MaterialIcons
                  name="navigate-next"
                  color={colors.blackColor}
                  size={32}
                  style={{alignSelf: 'center', top: moderateScale(2)}}
                />
              </View>
            </TouchableOpacity>
          )}
        {getHomeChemistData !== 'Doctor' &&
          getHomeChemistData !== 'Physiotherapist' &&
          getHomeChemistData !== 'Laboratory' &&
          getHomeChemistData !== 'Diagnostic' &&
          getHomeChemistData !== 'Other' && (
            <TouchableOpacity
              style={styles.signOutmainView}
              onPress={() =>
                navigation?.navigate(navigationStrings.ChemistBankDetails)
              }>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome5
                  name="money-check"
                  color={colors.pinkColor2}
                  size={35}
                  style={{alignSelf: 'center', top: moderateScale(3)}}
                />
                <Text style={styles.signOutText}> Bank Details</Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <MaterialIcons
                  name="navigate-next"
                  color={colors.blackColor}
                  size={32}
                  style={{alignSelf: 'center', top: moderateScale(2)}}
                />
              </View>
            </TouchableOpacity>
          )}

        <TouchableOpacity style={styles.signOutmainView} onPress={handleLogout}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="log-out"
              color={colors.pinkColor2}
              size={35}
              style={{alignSelf: 'center', top: moderateScale(3)}}
            />
            <Text style={styles.signOutText}>Sign out</Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <MaterialIcons
              name="navigate-next"
              color={colors.blackColor}
              size={32}
              style={{alignSelf: 'center', top: moderateScale(2)}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ModalComp
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        style={{
          justifyContent: 'center',
          paddigHorizontal: moderateScale(10),
          paddingVertical: moderateScale(120),
          top: moderateScale(30),
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.whiteColor,
            borderRadius: 25,
          }}>
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
  menu: {
    position: 'absolute',
    zIndex: 999,
    top: moderateScale(30),
    right: moderateScale(10),
    width: moderateScale(150),
    height: moderateScale(190),
    justifyContent: 'center',
    backgroundColor: '#E5E4E2',
    borderRadius: 20,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1.0,
    elevation: 1,
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
    bottom: moderateScale(220),
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
