// import React from 'react';
// import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
// import { StyleSheet, View, Text, Platform } from 'react-native';
// import * as Screens from '../Screens';
// import navigationStrings from './navigationStrings';
// import { moderateScale, textScale } from '../styles/responsiveSize';
// import colors from '../styles/colors';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import fontFamily from '../styles/fontFamily';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { useDispatch, useSelector } from 'react-redux';

// const BottomTab = createBottomTabNavigator();

// const TabRoutes = (props) => {

//     const dispatch = useDispatch();

//     const getHomeChemistData = useSelector((state) => state?.LoginReducer?.Login.user?.user_type);
//     console.log(getHomeChemistData, 'getHomeChemistData');

//     let homeScreenComponent;

//     if (getHomeChemistData === "other") {
//         homeScreenComponent = Screens.Home;
//     } else if (getHomeChemistData === "Chemist") {
//         homeScreenComponent = Screens.HomeChemist;
//     } else {
//         homeScreenComponent = Screens.Home;
//     }

//     let MyOrderScreen;

//     if (getHomeChemistData === "other") {
//         MyOrderScreen = Screens.MyOrder;
//     } else if (getHomeChemistData === "Chemist") {
//         MyOrderScreen = Screens.PendingOrder;
//     } else {
//         MyOrderScreen = Screens.MyOrder;
//     }


//     let NearbyMedicalScreen;

//     if (getHomeChemistData === "other") {
//         NearbyMedicalScreen = Screens.Nearby_Medical;
//     } else if (getHomeChemistData === "Chemist") {
//         NearbyMedicalScreen = Screens.CompleteOrder;
//     } else {
//         NearbyMedicalScreen = Screens.Nearby_Medical;
//     }


//     return (
//         <BottomTab.Navigator
//             tabBar={(tabsProps) => (
//                 <>
//                     <BottomTabBar {...tabsProps} />
//                 </>
//             )}
//             initialRouteName={navigationStrings.HOME}

//             screenOptions={{
//                 headerShown: false,
//                 style: styles.customBottomtabsStyle,
//                 tabBarInactiveTintColor: 'gray',
//                 tabBarHideOnKeyboard: true,
//                 tabBarStyle: { backgroundColor: '#3F6791', height: Platform.OS === 'ios' ? 80 : 60, paddingBottom: Platform.OS === 'ios' ? 25 : 10 },
//                 tabBarShowLabel: false
//             }}>

//             <BottomTab.Screen
//                 name={navigationStrings.HOME}
//                 component={homeScreenComponent}
//                 options={{
//                     tabBarIcon: ({ focused }) => {
//                         return (
//                             <View style={{ justifyContent: 'center' }}>
//                                 <Ionicons name="home-outline" color={colors.whiteColor} size={25} style={{ alignSelf: 'center' }} />
//                                 <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor }}>Home</Text>
//                                 <View style={{ borderTopColor: focused ? colors.whiteColor : colors.blueColor, borderTopWidth: moderateScale(2.5), top: moderateScale(5) }} />
//                             </View>
//                         );
//                     },
//                 }}
//             />

//             <BottomTab.Screen
//                 name={navigationStrings.MY_ORDER}
//                 component={MyOrderScreen}
//                 options={{
//                     tabBarIcon: ({ focused }) => {
//                         return (
//                             <View style={{ justifyContent: 'center' }}>
//                                 <MaterialIcons name="add-shopping-cart" color={colors.whiteColor} size={28} style={{ alignSelf: 'center' }} />
//                                 if(getHomeChemistData === "other"){
//                                    <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor, alignSelf: 'center', alignItems: 'center' }}>My orders</Text>  
//                                 }else{
//                                     <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor, alignSelf: 'center', alignItems: 'center' }}>Pending Order</Text>
//                                 }
//                                 <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor, alignSelf: 'center', alignItems: 'center' }}>My orders</Text>
//                                 <View style={{ borderTopColor: focused ? colors.whiteColor : colors.blueColor, borderTopWidth: moderateScale(2.5), top: moderateScale(5) }} />
//                             </View>
//                         );
//                     },
//                 }}
//             />
//             <BottomTab.Screen
//                 name={navigationStrings.Nearby_Medical}
//                 component={NearbyMedicalScreen}
//                 options={{
//                     tabBarIcon: ({ focused }) => {
//                         return (
//                             <View style={{ justifyContent: 'center' }}>
//                                 <FontAwesome6 name="house-chimney-medical" color={colors.whiteColor} size={25} style={{ alignSelf: 'center' }} />
//                                 <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor }}>Nearby medical</Text>
//                                 <View style={{ borderTopColor: focused ? colors.whiteColor : colors.blueColor, borderTopWidth: moderateScale(2.5), top: moderateScale(5) }} />
//                             </View>
//                         );
//                     },
//                 }}
//             />
//             <BottomTab.Screen
//                 name={navigationStrings.PROFILE}
//                 component={Screens.Profile}
//                 options={{
//                     tabBarIcon: ({ focused }) => {
//                         return (
//                             <View style={{ justifyContent: 'center' }}>
//                                 <AntDesign name="profile" color={colors.whiteColor} size={25} style={{ alignSelf: 'center' }} />
//                                 <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor }}>Profile</Text>
//                                 <View style={{ borderTopColor: focused ? colors.whiteColor : colors.blueColor, borderTopWidth: moderateScale(2.5), top: moderateScale(5) }} />
//                             </View>
//                         );
//                     },
//                 }}
//             />

//         </BottomTab.Navigator>
//     );
// };

// const styles = StyleSheet.create({
//     // customBottomtabsStyle: {
//     //     top: 10
//     // },
// });

// export default TabRoutes;


import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Platform } from 'react-native';
import * as Screens from '../Screens';
import navigationStrings from './navigationStrings';
import { moderateScale, textScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fontFamily from '../styles/fontFamily';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';

const BottomTab = createBottomTabNavigator();

const TabRoutes = props => {
  const dispatch = useDispatch();

  const getHomeChemistData = useSelector(
    state => state?.LoginReducer?.Login.user?.user_type,
  );
  console.log(getHomeChemistData, 'getHomeChemistData');

  let homeScreenComponent;
  let MyOrderScreen;
  let NearbyMedicalScreen;

  if (getHomeChemistData === 'other') {
    homeScreenComponent = Screens.Home;
    MyOrderScreen = Screens.MyOrder;
    NearbyMedicalScreen = Screens.Nearby_Medical;
  } else if (getHomeChemistData === 'Chemist') {
    homeScreenComponent = Screens.HomeChemist;
    MyOrderScreen = Screens.PendingOrder;
    NearbyMedicalScreen = Screens.CompleteOrder;
  } else if (getHomeChemistData === 'Doctor') {
    homeScreenComponent = Screens.Doctor_Profile;
    MyOrderScreen = Screens.Doctor_Profile;
    NearbyMedicalScreen = Screens.Doctor_Profile;
  } else if (getHomeChemistData === 'Physiotherapist') {
    homeScreenComponent = Screens.Physiotherapist_Screen;
    MyOrderScreen = Screens.Physiotherapist_Screen;
    NearbyMedicalScreen = Screens.Physiotherapist_Screen;
  } else if (getHomeChemistData === 'Laboratory') {
    homeScreenComponent = Screens.Laboratory_Screen;
    MyOrderScreen = Screens.Laboratory_Screen;
    NearbyMedicalScreen = Screens.Laboratory_Screen;
  } else if (getHomeChemistData === 'Diagnostic') {
    homeScreenComponent = Screens.Diagnostic_Screen;
    MyOrderScreen = Screens.Diagnostic_Screen;
    NearbyMedicalScreen = Screens.Diagnostic_Screen;
  } else {
    homeScreenComponent = Screens.Home;
    MyOrderScreen = Screens.MyOrder;
    NearbyMedicalScreen = Screens.Nearby_Medical;
  }

  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        style: styles.customBottomtabsStyle,
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#3F6791',
          height: Platform.OS === 'ios' ? 80 : 60,
          paddingBottom: Platform.OS === 'ios' ? 25 : 10,
        },
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={homeScreenComponent}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center'}}>
                <Ionicons
                  name="home-outline"
                  color={colors.whiteColor}
                  size={25}
                  style={{alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontSize: textScale(10),
                    fontFamily: fontFamily.medium,
                    color: colors.whiteColor,
                  }}>
                  Home
                </Text>
                <View
                  style={{
                    borderTopColor: focused
                      ? colors.whiteColor
                      : colors.blueColor,
                    borderTopWidth: moderateScale(2.5),
                    top: moderateScale(5),
                  }}
                />
              </View>
            );
          },
        }}
      />
      {getHomeChemistData !== 'Doctor' &&
        getHomeChemistData !== 'Physiotherapist' &&
        getHomeChemistData !== 'Laboratory' &&
        getHomeChemistData !== 'Diagnostic' && (
          <BottomTab.Screen
            name={navigationStrings.MY_ORDER}
            component={MyOrderScreen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <View style={{justifyContent: 'center'}}>
                    <MaterialIcons
                      name="add-shopping-cart"
                      color={colors.whiteColor}
                      size={28}
                      style={{alignSelf: 'center'}}
                    />
                    <Text
                      style={{
                        fontSize: textScale(10),
                        fontFamily: fontFamily.medium,
                        color: colors.whiteColor,
                        alignSelf: 'center',
                        alignItems: 'center',
                      }}>
                      {getHomeChemistData === 'Chemist'
                        ? 'Pending Order'
                        : 'My orders'}
                    </Text>
                    <View
                      style={{
                        borderTopColor: focused
                          ? colors.whiteColor
                          : colors.blueColor,
                        borderTopWidth: moderateScale(2.5),
                        top: moderateScale(5),
                      }}
                    />
                  </View>
                );
              },
            }}
          />
        )}
      {getHomeChemistData !== 'Doctor' &&
        getHomeChemistData !== 'Physiotherapist' &&
        getHomeChemistData !== 'Laboratory' &&
        getHomeChemistData !== 'Diagnostic' && (
          <BottomTab.Screen
            name={navigationStrings.Nearby_Medical}
            component={NearbyMedicalScreen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <View style={{justifyContent: 'center'}}>
                    <FontAwesome6
                      name="house-chimney-medical"
                      color={colors.whiteColor}
                      size={25}
                      style={{alignSelf: 'center'}}
                    />
                    <Text
                      style={{
                        fontSize: textScale(10),
                        fontFamily: fontFamily.medium,
                        color: colors.whiteColor,
                      }}>
                      {getHomeChemistData === 'Chemist'
                        ? 'Complete Order'
                        : 'Nearby medical'}
                    </Text>
                    <View
                      style={{
                        borderTopColor: focused
                          ? colors.whiteColor
                          : colors.blueColor,
                        borderTopWidth: moderateScale(2.5),
                        top: moderateScale(5),
                      }}
                    />
                  </View>
                );
              },
            }}
          />
        )}
      <BottomTab.Screen
        name={navigationStrings.PROFILE}
        component={Screens.Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center'}}>
                <AntDesign
                  name="profile"
                  color={colors.whiteColor}
                  size={25}
                  style={{alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontSize: textScale(10),
                    fontFamily: fontFamily.medium,
                    color: colors.whiteColor,
                  }}>
                  Profile
                </Text>
                <View
                  style={{
                    borderTopColor: focused
                      ? colors.whiteColor
                      : colors.blueColor,
                    borderTopWidth: moderateScale(2.5),
                    top: moderateScale(5),
                  }}
                />
              </View>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  // customBottomtabsStyle: {
  //     top: 10
  // },
});

export default TabRoutes;

