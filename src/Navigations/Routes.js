import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage"
import colors from '../styles/colors';




const Stack = createNativeStackNavigator();

export default function Routes() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    // const [userToken, setUserToken] = useState(null);
    // console.log(userToken, 'userTokenuserToken')

    const token = useSelector((state) => state?.LoginReducer?.Login?.token)
    const { userToken } = useSelector((state) => state?.LoginReducer)

    console.log("user_data", token)
    // const token = AsyncStorage.getItem("LoginData");


    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('token');
            // setUserToken();
            dispatch({
                type: 'SETTOKEN',
                payload: userToken
            })
            setIsLoading(false);
        } catch (error) {
            console.log("error_in_isLoggedIn", error)
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, [token])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator
                    size={'large'} color={colors.blueColor}
                />
            </View>
        )
    }


    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    token != null ? MainStack(Stack) : AuthStack(Stack)
                }

                {/* {MainStack(Stack)} {AuthStack(Stack)} */}


            </Stack.Navigator>

        </NavigationContainer>
    );
}