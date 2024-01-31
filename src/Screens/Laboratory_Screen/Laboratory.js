import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {textScale, moderateScale} from '../../styles/responsiveSize';
import Subscription from '../../Components/Subscription';
import axios from 'axios';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../../Components/ButtonComp';
import colors from '../../styles/colors';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

const Laboratory_Screen = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  const LoginData = useSelector(state => state?.LoginReducer?.Login);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `https://demogswebtech.com/medicalcare/api/show/profile/${LoginData?.user?.id}`,
        );
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      // This function will be called when the component is focused
      console.log('MyOrder component is focused');
      const fetchProfileData = async () => {
        try {
          const response = await axios.get(
            `https://demogswebtech.com/medicalcare/api/show/profile/${LoginData?.user?.id}`,
          );
          setProfileData(response.data);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchProfileData();
      // Add any other logic you want to execute when the component is focused

      return () => {
        // This function will be called when the component is blurred or unmounted
        console.log('MyOrder component is blurred or unmounted');

        // Add any logic you want to execute when the component is blurred or unmounted
        // For example, dispatch actions to reset or clear any data if needed
      };
    }, []),
  );
  return (
    <>
      <View>
        <Image source={imagePath.icLogo} style={{}} />
      </View>
      <View style={styles.box}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            {profileData ? (
              <>
                <View>
                  {profileData.user.img ? (
                    <Image
                      source={{
                        uri: `https://demogswebtech.com/medicalcare/public/images/user/${profileData.user.img}`,
                      }}
                      style={{width: 100, height: 100}}
                    />
                  ) : null}
                  <Text
                    style={{
                      fontSize: textScale(25),
                      fontFamily: fontFamily.bold,
                      color: 'black',
                      // marginBottom: moderateScale(2),
                    }}>
                    Welcome {profileData.user.name} !
                  </Text>
                  <View
                    style={{
                      backgroundColor: colors.blueColor,
                      paddingHorizontal: moderateScale(20),
                      paddingVertical: moderateScale(4),
                      borderRadius: moderateScale(5),
                      marginLeft: 250,
                      alignSelf: 'center',
                      marginTop: -20,
                    }}>
                    <Text
                      style={{
                        fontSize: textScale(10),
                        color: 'white',
                      }}>
                      {profileData.user.mobile}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: textScale(15),
                      fontFamily: fontFamily.medium,
                      color: 'black',
                    }}>
                    Speciality - {profileData.user.speciality}
                  </Text>

                  <Text
                    style={{
                      fontSize: textScale(15),
                      fontFamily: fontFamily.medium,
                      marginBottom: moderateScale(8),
                    }}>
                    {profileData.user.city}
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(15),
                      fontFamily: fontFamily.medium,
                      marginBottom: moderateScale(8),
                    }}>
                    Membership Valid - {profileData.user.sub_end_date}
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily.semiBold,
                      color: 'black',
                      fontSize: 16,
                      marginBottom: moderateScale(8),
                    }}>
                    About -
                  </Text>
                  <Text
                    style={{
                      fontSize: textScale(10),
                    }}>
                    {profileData.user.description} !
                  </Text>
                </View>

                <View style={styles.container}>
                  <Subscription />
                </View>
              </>
            ) : (
              <Text style={{fontSize: textScale(20)}}>Profile not found</Text>
            )}
          </>
        )}
      </View>
    </>
  );
};

export default Laboratory_Screen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(50),
  },
  box: {
    marginTop: moderateScale(100),
  },
});
