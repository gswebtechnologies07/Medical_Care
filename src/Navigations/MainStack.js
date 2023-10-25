import React from "react";
import navigationStrings from "./navigationStrings";
import * as Screens from '../Screens';
import TabRoutes from './TabRoutes';
import EditPhysiotherepist_Profile from '../Screens/EditPhysiotherepist_Profile/EditPhysiotherepist_Profile';

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={navigationStrings.TAB_ROUTES}
                component={TabRoutes}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name={navigationStrings.Medical_Profile}
                component={Screens.Medical_Profile}
                options={{ headerShown: false }}
            />


            <Stack.Screen
                name={navigationStrings.Physiotherepist_Profile}
                component={Screens.Physiotherepist_Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.EditPhysiotherepist_Profile}
                component={Screens.EditPhysiotherepist_Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.Doctor_Profile}
                component={Screens.Doctor_Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.EditDoctorProfile}
                component={Screens.EditDoctorProfile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.Laboratory_Profile}
                component={Screens.Laboratory_Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.Chemist_Profile}
                component={Screens.Chemist_Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.DIAGNOSTIC_PROFILE}
                component={Screens.Diagnostic_Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.EDIT_LABORATORY_PROFILE_MODAL}
                component={Screens.EditLaboratoryProfileModal}
                options={{ headerShown: false }}
            />
        </>
    );
}