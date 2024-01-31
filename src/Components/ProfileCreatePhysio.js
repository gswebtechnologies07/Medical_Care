import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderComp2 from './HeaderComp2';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../styles/responsiveSize';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import fontFamily from '../styles/fontFamily';
import ButtonComp from './ButtonComp';
import {UpdateDoctorProfileAction} from '../redux/Action/DoctorProfileAction';
import {useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {androidCameraPermission} from '../../permissions';
import {useSelector} from 'react-redux';

const ProfileCreatePhysio = props => {
  const [userData, setUserData] = useState({});

  const [salesPromoters, setSalesPromoters] = useState([]);
  const [selectedSalesPromoter, setSelectedSalesPromoter] = useState(null);
  const [isSalesPromoterModalVisible, setSalesPromoterModalVisible] =
    useState(false);
  const [isSpecialityModalVisible, setSpecialityModalVisible] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const LoginData = useSelector(state => state?.LoginReducer?.Login);

  const [input, setInput] = useState({
    name: '',
    nameOfFirm: '',
    email: '',
    owner_name: '',
    Degree: '',
    mobileNum: '',
    State: '',
    district: '',
    city: '',
    sector: '',
    address: '',
    Drug_license_number: '',
    gstNumber: '',
    regNumber: '',
    img: '',
    description: '',
  });
  useEffect(() => {
    fetchDataFromSalesAPI();
    fetchDataFromEditProfileAPI();
  }, []);

  const dispatch = useDispatch();

  const fetchDataFromSalesAPI = async () => {
    try {
      const response = await fetch(
        'https://demogswebtech.com/medicalcare/api/get/sales',
      );
      const data = await response.json();
      if (data.status === 200) {
        setSalesPromoters(data.sales);
      } else {
        console.error('Failed to fetch sales promoters data');
      }
    } catch (error) {
      console.error('Error fetching sales promoters data', error);
    }
  };

  const fetchDataFromEditProfileAPI = async () => {
    try {
      const response = await fetch(
        `https://demogswebtech.com/medicalcare/api/show/profile/${LoginData?.user?.id}`,
      );
      console.log('userdataaa', response);
      const data = await response.json();
      console.log('userdataaaa', data);
      if (data.status === 200) {
        setUserData(data.user);
        // Update the input state based on fetched data
        setInput(prevInput => ({
          ...prevInput,
          nameOfFirm: data?.user?.name_of_firm || '',
          email: data?.user?.email || '',
          owner_name: data?.user?.name || '',
          Degree: data?.user?.degree || '',
          mobileNum: data?.user?.mobile || '',
          district: data?.user?.dist || '',
          State: data?.user?.state || '',
          city: data?.user?.city || '',
          sector: data?.user?.sector || '',
          address: data?.user?.address || '',
          gstNumber: data?.user?.gst_number || '',
          regNumber: data?.user?.reg_number || '',

          description: data?.user?.description || '',
        }));
        console.log('inputData', input);
      } else {
        console.error('Failed to fetch user profile data');
      }
    } catch (error) {
      console.error('Error fetching user profile data', error);
    }
  };

  // const fetchSalesPromoters = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://demogswebtech.com/medicalcare/api/get/sales',
  //     );
  //     console.log('__sales api called');
  //     const data = await response.json();
  //     if (data.status === 200) {
  //       // setSalesPromoters(data.sales);
  //       setUserData(data);
  //       setInput({
  //         ...input,
  //         nameOfFirm: data?.sales[0]?.name,
  //         email: data?.sales[0]?.email,
  //         owner_name: data?.sales[0]?.name_of_firm,
  //         Degree: data?.sales[0]?.degree,
  //         mobileNum: data?.sales[0]?.mobile,
  //         district: data?.sales[0]?.dist,
  //         State: data?.sales[0]?.state,
  //         city: data?.sales[0]?.city,
  //         sector: data?.sales[0]?.sector,
  //         address: data?.sales[0]?.address,
  //         gstNumber: data?.sales[0]?.gst_number,
  //         regNumber: data?.sales[0]?.reg_number,
  //       });
  //     } else {
  //       // Handle error
  //       console.error('Failed to fetch sales promoters data');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching sales promoters data', error);
  //   }
  // };

  const toggleOption = salesPromoter => {
    setSelectedSalesPromoter(
      selectedSalesPromoter === salesPromoter ? null : salesPromoter,
    );
  };

  const toggleSalesPromoterModal = () => {
    setSalesPromoterModalVisible(!isSalesPromoterModalVisible);
  };

  const UpdateChemistProfile = async () => {
    const checkValid = true;
    // isValidData() ? isValidData() :
    if (checkValid) {
      const formData = new FormData();

      if (gstNumber.length) formData.append('gst_number', gstNumber);
      if (regNumber.length) formData.append('reg_number', regNumber);
      if (Degree.length) formData.append('degree', Degree);
      if (State.length) formData.append('state', State);
      if (district.length) formData.append('dist', district);
      if (city.length) formData.append('city', city);
      if (sector.length) formData.append('sector', sector);
      if (address.length) formData.append('address', address);
      if (description.length) formData.append('description', description);
      if (gallary) formData.append('img', gallary);
      formData.append('name_of_firm', nameOfFirm);
      formData.append('name', owner_name);
      formData.append('mobile', mobileNum);
      formData.append('email', email);
      if (Drug_license_number.length)
        formData.append('drug_license_number', Drug_license_number);
      // formData.append('desc', desc);
      formData.append('open_time', 9);
      formData.append('close_time', 5);
      const userId = LoginData?.user?.id;
      const apiUrl = `https://demogswebtech.com/medicalcare/api/edit/profile/${userId}`;
      console.log('API URL:', apiUrl);

      console.log('formData : ', formData);

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        console.log('Update Profile Response:', data);

        if (data.status === 200) {
          console.log('Profile Updated Successfully');
        }
      } catch (error) {
        console.error('Error updating profile:', error);
      }

      // navigation?.navigate(navigationStrings.Laboratory_Profile)
      const selectedSalesPromoterId = selectedSalesPromoter
        ? selectedSalesPromoter.id
        : null;
      // console.log('Selected Sales Promoter ID:', selectedSalesPromoterId);
      console.log(checkValid, 'checkValidcheckValid');
    }
  };

  const {
    nameOfFirm,
    Degree,
    mobileNum,
    email,
    State,
    district,
    city,
    sector,
    address,
    regNumber,
    description,
    gstNumber,
    Drug_license_number,
    owner_name,
  } = input;
  const updateState = data => setInput(() => ({...input, ...data}));
  const [gallary, setGallary] = useState('');
  const [image, setImage] = useState('');

  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS == 'android') {
      Alert.alert('Profile Picture', 'Choose an option', [
        // { text: 'Camera', onPress: onCamera },
        {text: 'Gallery', onPress: onGallery()},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
  };

  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      if (image) {
        console.log('prescription', image);
        let filename = image.path.substring(image.path.lastIndexOf('/') + 1);
        let uploadFile = {
          type: image.mime,
          uri: image.path,
          name: filename,
        };
        console.log(uploadFile, 'uploadFileuploadFileuploadFile');
        const img = image?.path;
        setGallary(uploadFile);
        setImage(img);
        setInput(prevInput => ({
          ...prevInput,
          img: img,
        }));
        setIsImageUploaded(true);
      }
    });
  };
  return (
    <>
      <HeaderComp2 text="Edit Profile" />

      <ScrollView style={{paddingHorizontal: 10}}>
        {/* <KeyboardAwareScrollView> */}
        <View>
          <TextInput
            value={nameOfFirm}
            placeholder="Name"
            onChangeText={nameOfFirm => updateState({nameOfFirm})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <TextInput
            value={owner_name}
            placeholder="Owner Name"
            onChangeText={owner_name => updateState({owner_name})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <TextInput
            value={Degree}
            placeholder="Degree"
            onChangeText={Degree => updateState({Degree})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <TextInput
            value={mobileNum}
            placeholder="Mobile Number"
            maxLength={10}
            onChangeText={mobileNum => updateState({mobileNum})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <TextInput
            value={email}
            placeholder="Email"
            onChangeText={email => updateState({email})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <TextInput
            value={State}
            placeholder="State"
            onChangeText={State => updateState({State})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <TextInput
            value={district}
            placeholder="District"
            onChangeText={district => updateState({district})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <TextInput
            value={city}
            placeholder="city"
            onChangeText={city => updateState({city})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <TextInput
            value={sector}
            placeholder="Sector"
            onChangeText={sector => updateState({sector})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>

        <View>
          <TextInput
            value={address}
            placeholder="Address"
            onChangeText={address => updateState({address})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <TextInput
            value={gstNumber}
            placeholder="GST Number"
            onChangeText={gstNumber => updateState({gstNumber})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <TextInput
            value={Drug_license_number}
            placeholder="Drug_license_number"
            onChangeText={Drug_license_number =>
              updateState({Drug_license_number})
            }
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <TextInput
            value={regNumber}
            placeholder="Registration Number"
            onChangeText={regNumber => updateState({regNumber})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>

        <View>
          <View
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: moderateScaleVertical(8),
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: colors.grayColor,
                  fontFamily: fontFamily.medium,
                  fontSize: textScale(15),
                }}>
                Photo to display
              </Text>
            </View>
            <TouchableOpacity onPress={onSelectImage}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: colors.grayColor,
                  fontFamily: fontFamily.medium,
                  fontSize: textScale(15),
                }}>
                {isImageUploaded ? 'Uploaded' : 'Upload'}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>

        <View>
          <TextInput
            value={description}
            placeholder="AboutYourSelf"
            onChangeText={description => updateState({description})}
            style={{
              borderBottomColor: colors.grayColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{color: colors.grayColor}}>Sales Promoter</Text>
          </View>

          <View style={styles.container}>
            <TouchableOpacity onPress={toggleSalesPromoterModal}>
              <Icon name="caret-down" size={20} />
            </TouchableOpacity>
            <Modal isVisible={isSalesPromoterModalVisible}>
              <View style={styles.modalContent}>
                {salesPromoters.map(salesPromoter => (
                  <TouchableOpacity
                    key={salesPromoter.id}
                    onPress={() => toggleOption(salesPromoter)}
                    style={styles.option}>
                    <Text>{salesPromoter.name}</Text>
                    {selectedSalesPromoter &&
                      selectedSalesPromoter.id === salesPromoter.id && (
                        <Icon name="check" size={20} color={colors.blueColor} />
                      )}
                  </TouchableOpacity>
                ))}
                <TouchableOpacity
                  onPress={toggleSalesPromoterModal}
                  style={styles.closeButton}>
                  <Text>Save</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
          <View style={{marginLeft: 10}}>
            {selectedSalesPromoter && (
              <Text style={{color: colors.blueColor, padding: 20}}>
                {selectedSalesPromoter.name}
              </Text>
            )}
          </View>
        </View>

        <View style={{height: moderateScale(100), justifyContent: 'center'}}>
          <TouchableOpacity activeOpacity={0.7} onPress={UpdateChemistProfile}>
            <ButtonComp text="Save" />
          </TouchableOpacity>
        </View>

        {/* </KeyboardAwareScrollView> */}
      </ScrollView>
    </>
  );
};

export default ProfileCreatePhysio;

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
    flexDirection: 'row', // Change to 'row'
    justifyContent: 'center',
    padding: 10,
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
