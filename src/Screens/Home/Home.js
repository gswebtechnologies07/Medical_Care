import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import imagePath from '../../constants/imagePath';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import navigationStrings from '../../Navigations/navigationStrings';
import {useDispatch, useSelector} from 'react-redux';
import {getAllChemistProfile} from '../../redux/Action/ChemistProfileAction';
import {useFocusEffect} from '@react-navigation/native';

const AllTabs = [
  {id: 1, name: 'Medicine', image: imagePath.icDrugs},
  {id: 2, name: 'Consult Doctor', image: imagePath.icStethoscope},
  {id: 3, name: 'Lab Tests', image: imagePath.icBlood_test},
  {id: 4, name: 'Physiotherapist', image: imagePath.icPsychotherapy},
];

const TopServicesData = [
  {
    id: 1,
    title: 'Bawa Medical Hall',
    image: imagePath.icRectangle,
  },
  {
    id: 2,
    title: 'Bawa Medical Hall',
    image: imagePath.icRectangle,
  },
];

const Home = props => {
  console.log(props, 'propspropsHome');
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const mapData = useSelector(
    state => state?.getAllChemistProfileReducer?.GetAllChemistProfile?.order,
  );
  console.log(mapData, 'mapDatamapData');
  const seeAll = () => {
    props.navigation.navigate(navigationStrings.Nearby_Medical, {
      mapData: mapData,
    });
  };

  const [data, setData] = useState(mapData);
  const handleSearch = () => {
    console.log('Search Text:', searchText);
    console.log('Original Data:', mapData);

    if (!mapData || mapData.length === 0) {
      setData([]);
      return;
    }

    // Implement search logic here
    const filteredChemists = mapData.filter(chemist => {
      // Customize the condition based on your search criteria
      return (
        chemist.city.toLowerCase().includes(searchText.toLowerCase()) ||
        chemist.name_of_firm.toLowerCase().includes(searchText.toLowerCase()) ||
        chemist.name.toLowerCase().includes(searchText.toLowerCase()) ||
        chemist.sector.toLowerCase().includes(searchText.toLowerCase()) ||
        chemist.deals_in.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    console.log('Filtered Data:', filteredChemists);

    // Update the data with filtered results
    setData(filteredChemists.length > 0 ? filteredChemists : mapData);
  };
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getAllChemistProfile());
    }, []),
  );
  useEffect(() => {
    if (searchText.trim() === '') {
      setData(mapData);
    } else {
      handleSearch();
    }
  }, [searchText, mapData]);
  const renderItem = ({item}) => {
    return (
      <View style={{padding: moderateScale(10)}}>
        <View style={styles.tabColor}>
          <Image source={item?.image} style={styles.tabImageStyle} />
        </View>
        <Text style={styles.tabImageText}>{item?.name}</Text>
      </View>
    );
  };

  return (
    <WrapperContainer>
      <View style={{flexDirection: 'row', paddingHorizontal: moderateScale(5)}}>
        <View style={styles.HeaderContainer}>
          <Image source={imagePath.icLogo} style={{}} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={{flex: 0.65}}>
          <View style={{marginHorizontal: moderateScale(15)}}>
            <Text style={styles.headerText}>
              Deliver to{' '}
              <Text style={styles.headerText}>Patiala, Punjab, 140603</Text>
            </Text>
          </View>

          <View style={{marginHorizontal: moderateScale(15)}}></View>
          <View style={styles.searchBarmainView}>
            <TextInput
              style={{width: '90%', placeholderTextColor: '#00000'}}
              placeholder="Search medicine, doctor, lab tests &..."
              onChangeText={text => {
                setSearchText(text); // Update the searchText state
                handleSearch(); // Call handleSearch function when the text changes
              }}
              value={searchText}
            />
            <TouchableOpacity onPress={handleSearch}>
              <Image
                source={imagePath.icSearch}
                style={{
                  marginTop: moderateScale(10),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.flatListView}>
          <FlatList
            horizontal
            data={AllTabs}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()} // Use toString() for keyExtractor
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            paddingHorizontal: moderateScale(12),
            marginVertical: moderateScaleVertical(40),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(10),
            }}>
            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: textScale(18),
                color: colors.blueColor,
              }}>
              Nearby medical stores
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row'}}>
            {data?.map(item => (
              <TouchableOpacity
                key={item.id.toString()} // Use toString() for key prop
                onPress={() =>
                  props.navigation.navigate(navigationStrings.Medical_Profile, {
                    data: item,
                  })
                }>
                <View style={styles.cardView}>
                  <Image
                    source={{
                      uri: `https://demogswebtech.com/medicalcare/public/images/user/${item?.img}`,
                    }}
                    style={{
                      height: moderateScale(100),
                      width: moderateScale(180),
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: fontFamily.semiBold,
                      fontSize: textScale(16),
                      color: colors.blackColor,
                      alignSelf: 'center',
                    }}>
                    {item?.name_of_firm}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: moderateScale(10),
                      paddingVertical: moderateScaleVertical(4),
                      right: moderateScale(10),
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <EvilIcons
                        name="location"
                        color={colors.blackColor}
                        size={13}
                        style={{alignSelf: 'center'}}
                      />
                      <Text
                        style={{
                          fontFamily: fontFamily.regular,
                          fontSize: textScale(8),
                          color: colors.blackColor,
                        }}>
                        {item?.city}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Ionicons
                        name="time"
                        color={colors.grayColor}
                        size={13}
                        style={{alignSelf: 'center'}}
                      />
                      <Text
                        style={{
                          fontFamily: fontFamily.regular,
                          fontSize: textScale(8),
                          color: colors.blackColor,
                        }}>
                        {/* {item?.subTitle2} */}
                        Open unit 9:30 pm
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            paddingHorizontal: moderateScale(12),
            bottom: moderateScale(45),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(10),
            }}>
            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: textScale(18),
                color: colors.blueColor,
              }}>
              Top Services
            </Text>
            <TouchableOpacity onPress={seeAll}>
              <Text
                style={{
                  fontFamily: fontFamily.regular,
                  fontSize: textScale(16),
                  color: colors.blueColor,
                }}>
                see all
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row'}}>
            {TopServicesData?.map(item => {
              return (
                <View>
                  <View style={styles.cardView}>
                    <Image
                      source={item?.image}
                      style={{
                        height: moderateScale(100),
                        width: moderateScale(200),
                        right: moderateScale(10),
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: fontFamily.semiBold,
                        fontSize: textScale(16),
                        color: colors.blackColor,
                        alignSelf: 'center',
                      }}>
                      {item?.title}
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default Home

const styles = StyleSheet.create({
  tabColor: {
    backgroundColor: colors.whiteColor,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(8),
    marginLeft: moderateScale(10),
    borderRadius: moderateScale(8),
    shadowColor: colors.blackColor,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7.68,
    elevation: 8,
  },
  flatListView: {
    paddingVertical: moderateScaleVertical(10),
    backgroundColor: '#F2F2F4',
    justifyContent: 'space-around',
    top: moderateScale(15),
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadiusBottom: 7.68,
    elevation: 5,
  },
  tabImageStyle: {
    alignSelf: 'center',
    height: moderateScale(35),
    width: moderateScale(35)
  },
  tabImageText: {
    fontSize: textScale(12),
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
    top: moderateScale(10),
    color: colors.blackColor,

  },
  headerText: {
    color: colors.blackColor,
    fontSize: textScale(12),
    fontFamily: fontFamily.semiBold
  },
  searchBarmainView: {
    borderColor: colors.blueColor,
    borderWidth: 1,
    width: '90%',
    flexDirection: 'row',
    marginHorizontal: moderateScale(15),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(8),
    top: moderateScale(3)
  },
  cardView: {
    backgroundColor: colors.whiteColor,
    paddingVertical: moderateScaleVertical(7),
    borderRadius: moderateScale(8),
    width: moderateScale(180),
    marginTop: moderateScale(15),
    marginHorizontal: moderateScale(8),
    marginBottom: moderateScale(35),
    shadowColor: colors.blackColor, shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadiusBottom: 7.68,
    elevation: 5,
  },
  HeaderContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
    marginVertical:moderateScaleVertical(20),
    alignItems: 'center',
    marginTop: moderateScale(10)
  },
})