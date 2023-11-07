// import React from 'react';
// import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
// import { StyleSheet, View, Text } from 'react-native';
// import * as Screens from '../Screens';
// import navigationStrings from './navigationStrings';
// import { moderateScale, textScale } from '../styles/responsiveSize';
// import colors from '../styles/colors';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import fontFamily from '../styles/fontFamily';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { useDispatch, useSelector } from 'react-redux'

// const BottomTab = createBottomTabNavigator();

// const TabRoutes = (props) => {

//     const dispatch = useDispatch();

//     const getHomeChemistData = useSelector((state) => state?.LoginReducer?.Login.user?.user_type)
//     console.log(getHomeChemistData, 'getHomeChemistData')


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
//                 // style:{padd}
//                 style: styles.customBottomtabsStyle,
//                 tabBarInactiveTintColor: 'gray',
//                 tabBarHideOnKeyboard: true,
//                 tabBarStyle: { backgroundColor: '#3F6791', height: Platform.OS === 'ios' ? 80 : 60, paddingBottom: Platform.OS === 'ios' ? 25 : 10 },
//                 tabBarShowLabel: false

//             }}>


//             if (getHomeChemistData === "other") {
//                 <BottomTab.Screen
//                     name={navigationStrings.HOME}
//                     component={Screens.Home}
//                     options={{
//                         tabBarIcon: ({ focused }) => {
//                             return (

//                                 <View style={{ justifyContent: 'center' }}>
//                                     <Ionicons name="home-outline" color={colors.whiteColor} size={25} style={{ alignSelf: 'center' }} />
//                                     <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor }}>Home</Text>
//                                     <View style={{ borderTopColor: focused ? colors.whiteColor : colors.blueColor, borderTopWidth: moderateScale(2.5), top: moderateScale(5) }} />
//                                 </View>
//                             );
//                         },
//                     }}
//                 />;
//   } else if (getHomeChemistData === "Chemist") {
//                 <BottomTab.Screen
//                     name={navigationStrings.HomeChemist}
//                     component={Screens.HomeChemist}
//                     options={{
//                         tabBarIcon: ({ focused }) => {
//                             return (

//                                 <View style={{ justifyContent: 'center' }}>
//                                     <Ionicons name="home-outline" color={colors.whiteColor} size={25} style={{ alignSelf: 'center' }} />
//                                     <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor }}>Home</Text>
//                                     <View style={{ borderTopColor: focused ? colors.whiteColor : colors.blueColor, borderTopWidth: moderateScale(2.5), top: moderateScale(5) }} />
//                                 </View>
//                             );
//                         },
//                     }}
//                 />;
//   } 
//    {/* else {
//                 displayText = 'Default Case';
//   } */}









//             {/* <BottomTab.Screen
//                 name={navigationStrings.HOME}
//                 component={Screens.Home}
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
//                 name={navigationStrings.HomeChemist}
//                 component={Screens.HomeChemist}
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
//             /> */}






//             <BottomTab.Screen
//                 name={navigationStrings.MY_ORDER}
//                 component={Screens.MyOrder}
//                 options={{
//                     tabBarIcon: ({ focused }) => {
//                         return (
//                             <View style={{ justifyContent: 'center' }}>
//                                 <MaterialIcons name="add-shopping-cart" color={colors.whiteColor} size={28} style={{ alignSelf: 'center' }} />
//                                 <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor, alignSelf: 'center', alignItems: 'center' }}>My orders</Text>
//                                 <View style={{ borderTopColor: focused ? colors.whiteColor : colors.blueColor, borderTopWidth: moderateScale(2.5), top: moderateScale(5) }} />
//                             </View>
//                         );

//                     },
//                 }}
//             />
//             <BottomTab.Screen
//                 name={navigationStrings.Nearby_Medical}
//                 component={Screens.Nearby_Medical}
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
//     //     customBottomtabsStyle: {
//     //  top:10
//     //     },

// });

// export default TabRoutes



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

const TabRoutes = (props) => {

    const dispatch = useDispatch();

    const getHomeChemistData = useSelector((state) => state?.LoginReducer?.Login.user?.user_type);
    console.log(getHomeChemistData, 'getHomeChemistData');

    let homeScreenComponent;

    if (getHomeChemistData === "other") {
        homeScreenComponent = Screens.Home;
    } else if (getHomeChemistData === "Chemist") {
        homeScreenComponent = Screens.HomeChemist;
    } else {
        homeScreenComponent = Screens.Home;
    }

    let MyOrderScreen;

    if (getHomeChemistData === "other") {
        MyOrderScreen = Screens.MyOrder;
    } else if (getHomeChemistData === "Chemist") {
        MyOrderScreen = Screens.PendingOrder;
    } else {
        MyOrderScreen = Screens.MyOrder;
    }


    let NearbyMedicalScreen;

    if (getHomeChemistData === "other") {
        NearbyMedicalScreen = Screens.Nearby_Medical;
    } else if (getHomeChemistData === "Chemist") {
        NearbyMedicalScreen = Screens.CompleteOrder;
    } else {
        NearbyMedicalScreen = Screens.Nearby_Medical;
    }


    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
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
                tabBarStyle: { backgroundColor: '#3F6791', height: Platform.OS === 'ios' ? 80 : 60, paddingBottom: Platform.OS === 'ios' ? 25 : 10 },
                tabBarShowLabel: false
            }}>

            <BottomTab.Screen
                name={navigationStrings.HOME}
                component={homeScreenComponent}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ justifyContent: 'center' }}>
                                <Ionicons name="home-outline" color={colors.whiteColor} size={25} style={{ alignSelf: 'center' }} />
                                <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor }}>Home</Text>
                                <View style={{ borderTopColor: focused ? colors.whiteColor : colors.blueColor, borderTopWidth: moderateScale(2.5), top: moderateScale(5) }} />
                            </View>
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={navigationStrings.MY_ORDER}
                component={MyOrderScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ justifyContent: 'center' }}>
                                <MaterialIcons name="add-shopping-cart" color={colors.whiteColor} size={28} style={{ alignSelf: 'center' }} />
                                <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor, alignSelf: 'center', alignItems: 'center' }}>My orders</Text>
                                <View style={{ borderTopColor: focused ? colors.whiteColor : colors.blueColor, borderTopWidth: moderateScale(2.5), top: moderateScale(5) }} />
                            </View>
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.Nearby_Medical}
                component={NearbyMedicalScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ justifyContent: 'center' }}>
                                <FontAwesome6 name="house-chimney-medical" color={colors.whiteColor} size={25} style={{ alignSelf: 'center' }} />
                                <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor }}>Nearby medical</Text>
                                <View style={{ borderTopColor: focused ? colors.whiteColor : colors.blueColor, borderTopWidth: moderateScale(2.5), top: moderateScale(5) }} />
                            </View>
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.PROFILE}
                component={Screens.Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ justifyContent: 'center' }}>
                                <AntDesign name="profile" color={colors.whiteColor} size={25} style={{ alignSelf: 'center' }} />
                                <Text style={{ fontSize: textScale(10), fontFamily: fontFamily.medium, color: colors.whiteColor }}>Profile</Text>
                                <View style={{ borderTopColor: focused ? colors.whiteColor : colors.blueColor, borderTopWidth: moderateScale(2.5), top: moderateScale(5) }} />
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
