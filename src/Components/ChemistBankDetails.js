import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HeaderComp2 from './HeaderComp2';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
import ButtonComp from './ButtonComp';
import {useSelector} from 'react-redux';

const ChemistBankDetails = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
  const LoginData = useSelector(state => state?.LoginReducer?.Login);
  const [input, setInput] = useState({
    bank_account: '',
    bank_name: '',
    bank_ifsc: '',
    upi_id: '',
  });
  const fetchData = async () => {
    const URL = `https://demogswebtech.com/medicalcare/api/show/bank-detail/${LoginData?.user?.id}`;
    try {
      console.log('Sending update request to:', URL);
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('GET BANKDETAILS:', data);
      if (data.status === 200) {
        setUserData(data.user);
        // Update the input state based on fetched data
        setInput(prevInput => ({
          ...prevInput,
          bank_account: data?.user?.bank_account || '',
          bank_name: data?.user?.bank_name || '',
          bank_ifsc: data?.user?.bank_ifsc || '',
          upi_id: data?.user?.upi_id || '',
        }));
        console.log('inputData', input);
      } else {
        console.error('Failed to fetch user profile data');
      }
    } catch (error) {
      console.error('Error updating bank details:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [LoginData?.user?.id]);

  const UpdateChemistProfile = async () => {
    const checkValid = isValidData();

    if (checkValid) {
      const userId = LoginData?.user?.id;
      const apiUrl = `https://demogswebtech.com/medicalcare/api/edit/bank-details/${userId}`;

      try {
        console.log('Sending update request to:', apiUrl);
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            bank_account,
            bank_ifsc,
            bank_name,
            upi_id,
          }),
        });

        const data = await response.json();
        console.log('Update response:', data);

        if (data.message === 'User Update Successfully') {
          console.log('Bank details updated successfully');
        } else {
          setError('Failed to update bank details: ' + data.error);
        }
      } catch (error) {
        setError('Error updating bank details: ' + error.message);
      }
    } else {
      setError('All fields are necessary. Please fill in all the fields.');
    }
  };

  const {bank_account, bank_name, bank_ifsc, upi_id} = input;
  const updateState = data => setInput(() => ({...input, ...data}));

  const isValidData = () => {
    return (
      bank_account.trim() !== '' &&
      bank_ifsc.trim() !== '' &&
      bank_name.trim() !== '' &&
      upi_id.trim() !== ''
    );
  };
  console.log('Input state:', input);

  return (
    <>
      <HeaderComp2 text="Edit Profile" />
      <ScrollView style={{paddingHorizontal: 10}}>
        <View>
          <TextInput
            value={bank_account}
            placeholder="Bank Account"
            onChangeText={bank_account => updateState({bank_account})}
            style={{borderBottomColor: colors.grayColor, borderBottomWidth: 1}}
          />
        </View>
        <View>
          <TextInput
            value={bank_name}
            placeholder="Bank Name"
            onChangeText={bank_name => updateState({bank_name})}
            style={{borderBottomColor: colors.grayColor, borderBottomWidth: 1}}
          />
        </View>
        <View>
          <TextInput
            value={bank_ifsc}
            placeholder="Bank IFSC"
            onChangeText={bank_ifsc => updateState({bank_ifsc})}
            style={{borderBottomColor: colors.grayColor, borderBottomWidth: 1}}
          />
        </View>
        <View>
          <TextInput
            value={upi_id}
            placeholder="Upi Id"
            maxLength={10}
            onChangeText={upi_id => updateState({upi_id})}
            style={{borderBottomColor: colors.grayColor, borderBottomWidth: 1}}
          />
        </View>

        <View style={{height: moderateScale(100), justifyContent: 'center'}}>
          {error && (
            <Text style={{color: 'red', textAlign: 'center', marginBottom: 10}}>
              {error}
            </Text>
          )}
          <TouchableOpacity activeOpacity={0.7} onPress={UpdateChemistProfile}>
            <ButtonComp text="Save" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default ChemistBankDetails;

const styles = StyleSheet.create({
  doctorPageBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScaleVertical(5),
  },

  chemistPagebtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScaleVertical(5),
    backgroundColor: colors.blueColor,
    borderRadius: moderateScale(10),
  },
  chemistPageView: {
    width: moderateScale(150),
    paddingVertical: moderateScaleVertical(3),
    backgroundColor: colors.whiteColor,
    borderRadius: moderateScale(20),
    borderWidth: 0.7,
    borderColor: colors.pinkColor,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // right:20
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    padding: 10,
    // borderRadius: 5,
    width: moderateScale(60),
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  closeButton: {
    alignItems: 'center',
    marginTop: 20,
  },
});
