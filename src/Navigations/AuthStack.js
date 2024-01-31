import React from "react";
import navigationStrings from "./navigationStrings";
import * as Screens from '../Screens';

export default function (Stack) {
    return (
      <>
        <Stack.Screen
          name={navigationStrings.LOGIN}
          component={Screens.Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.SIGNUP}
          component={Screens.Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.OTP_VERIFICATION}
          component={Screens.OtpVerification}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
                name={navigationStrings.Confirm_Password}
                component={Screens.Confirm_Password}
                options={{ headerShown: false }}
            /> */}
        <Stack.Screen
          name={navigationStrings.Forgot_Password}
          component={Screens.Forgot_Password}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.Create_New_Password}
          component={Screens.Create_New_Password}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.Doctor_Profile}
          component={Screens.Doctor_Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.Physiotherapist_Screen}
          component={Screens.Physiotherapist_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.Laboratory_Screen}
          component={Screens.Laboratory_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.Diagnostic_Screen}
          component={Screens.Diagnostic_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.ChemistOrderDetails}
          component={Screens.ChemistOrderDetails}
          options={{headerShown: false}}
        />
      </>
    );
}