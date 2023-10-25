import { StyleSheet, Text, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import fontFamily from '../../styles/fontFamily'
import WrapperContainer from '../../Components/WrapperContainer'
import ButtonComp from '../../Components/ButtonComp'
import HeaderComp from '../../Components/HeaderComp'
import TextInputComp from '../../Components/TextInputComp'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import navigationStrings from '../../Navigations/navigationStrings'
import colors from '../../styles/colors'

const Confirm_Password = ({ navigation }) => {


  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  const onLogin = () => {
    navigation.navigate(navigationStrings.TAB_ROUTES)
  }

  return (
    <WrapperContainer>
      <HeaderComp />
      <KeyboardAvoidingView
        style={{ flex: 1, margin: moderateScale(16) }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ height: height / 1.4, justifyContent:'center' }}>
              <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.LoginText}>Create new</Text>
                <Text style={styles.LoginText}>password</Text>
              </View>
              <View style={{ flex: 0.50, top: moderateScale(20) }}>
                <TextInputComp
                  value={password}
                  // maxLength={10}
                  placeholder='confirm new password'
                  onChangeText={(value) => setPassword(value)}
                />
                   <TextInputComp
                  value={confirmPassword}
                  // maxLength={10}
                  placeholder='New password'
                  onChangeText={(value) => setconfirmPassword(value)}
                />
                <View style={{ top: moderateScale(30) }}>
                  <ButtonComp
                    text='Confirm'
                    onPress={onLogin}
                  />
                </View>
              </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}
export default Confirm_Password

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:'100%',
    backgroundColor: '#fff'
  },
  accText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  forgotPassText: {
    color: '#3F6791',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(10)
  },
  LoginText: {
    fontSize: textScale(32),
    color:colors.blackColor,
    fontFamily: fontFamily.semiBold
  }
})
