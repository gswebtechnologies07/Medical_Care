import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import TextInputComp from '../../Components/TextInputComp';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import navigationStrings from '../../Navigations/navigationStrings';

const data1 = [
  { label: 'Chemist', value: 'chemist' },
  { label: 'Doctor', value: 'doctor' },
  { label: 'Physiotherapist', value: 'physiotherapist' },
  { label: 'Laboratory', value: 'laboratory' },
  { label: 'Diagnostic', value: 'diagnostic' },
];

const Home = (props) => {
  const [value1, setValue1] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [data2, setData2] = useState([]);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState('');
  const [loading, setLoading] = useState(false);

  const onSearch = async () => {
    try {
      if (!value1 || !value3) {
        throw new Error("Please fill all required fields");
      }
      setLoading(true);
      const requestData = {
        user_type: value1,
        city: value3,
      };

      if (value2) {
        requestData.option = value2;
      }

      const response = await axios.post('/get-users-by-specialization-and-city', requestData);

      console.log('API_Response_onSearch', response.data);

      props.navigation.navigate(navigationStrings.FilterUserValue, { searchData: response.data });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert("Message", error.message);
      console.error('API_Call_Error:', error.message);
    }
  };

  const fetchData = async () => {
    try {
      const requestData = {
        user_type: value1,
      };

      const response = await axios.post('/get-options', requestData);
      console.log('API_Response:', response.data);
      setApiResponse(response.data);

      const updatedData2 = response?.data?.map((item) => ({
        label: item,
        value: item,
      }));
      console.log(updatedData2, 'updatedData2updatedData2');
      setData2(updatedData2);
    } catch (error) {
      Alert.alert("Message", error.message);
      console.error('API_Call_Error:', error.message);
    }
  };

  useEffect(() => {
    if (value1 !== null) {
      fetchData();
    }
  }, [value1]);

  return (
    <WrapperContainer>
      <KeyboardAwareScrollView>
        <View style={styles.HeaderContainer}>
          <Image source={imagePath.icLogo} style={{}} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ justifyContent: 'center', paddingVertical: moderateScale(30), alignSelf: 'center' }}>
            <Text style={{ fontSize: textScale(18), fontFamily: fontFamily.bold, color: colors.blueColor }}>What do you want...</Text>
          </View>
          <View style={styles.container}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data1}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Type"
              searchPlaceholder="Search..."
              value={value1}
              onChange={(item) => {
                setValue1(item.value);
              }}
              renderLeftIcon={() => (
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
              )}
              containerStyle={{ width: '90%' }}
            />

            {apiResponse && (value1 === 'doctor' || value1 === 'chemist') && (
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data2}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item 2"
                searchPlaceholder="Search..."
                value={value2}
                onChange={(item) => {
                  setValue2(item.value);
                }}
                renderLeftIcon={() => (
                  <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                )}
              />
            )}

            <TextInputComp
              style={{ fontFamily: fontFamily.medium, fontSize: textScale(16), colors: colors.blackColor }}
              placeholder="City"
              value={value3}
              placeholderTextColor={colors.grayColor02}
              onChangeText={(text) => setValue3(text)}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.7}
              onPress={onSearch}
            >
              {loading ? (
                <ActivityIndicator size="small" color={colors.whiteColor} />
              ) : (
                <Text style={styles.btnText}>
                  Search
                </Text>
              )}
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(360),
    alignItems: 'center',
  },
  HeaderContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: moderateScaleVertical(20),
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  dropdown: {
    height: moderateScale(50),
    width: '90%',
    borderRadius: moderateScale(10),
    borderColor: colors.blueColor,
    borderWidth: moderateScale(1),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(15),
    alignSelf: 'center',
    backgroundColor: colors.whiteColor,
    marginBottom: moderateScaleVertical(22),
  },
  icon: {
    marginRight: moderateScale(5),
  },
  placeholderStyle: {
    fontSize: textScale(16),
  },
  selectedTextStyle: {
    fontSize: textScale(16),
    color: colors.blackColor,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    fontSize: textScale(16),
    borderRadius: 10,
    color: colors.blackColor,
    backgroundColor: '#c8ccca', // Removed duplicated color property
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(30),
    paddingHorizontal: moderateScale(35),
    paddingVertical: moderateScaleVertical(10),
    backgroundColor: colors.blueColor,
    borderRadius: moderateScale(10),
  },
  btnText: {
    color: colors.whiteColor,
    fontSize: moderateScale(16),
    fontFamily: fontFamily.bold,
  },
});

export default Home;
