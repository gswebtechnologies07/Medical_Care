import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import HeaderComp from '../../Components/HeaderComp'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
import imagePath from '../../constants/imagePath'
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";


const AllTabs = [
  { id: 1, name: 'Medicine', image: imagePath.icDrugs },
  { id: 2, name: 'Consult Doctor', image: imagePath.icStethoscope },
  { id: 3, name: 'Lab Tests', image: imagePath.icBlood_test },
  { id: 4, name: 'Physiotherapist', image: imagePath.icPsychotherapy }
];


const Homecards = [
  {
    id: 1,
    title: 'Bawa Medical Hall',
    subTitle: 'Zirakpur HO,Zirakpur',
    subTitle2: 'Open unit 9:30 pm',
    image: imagePath.icRectangle,
    image2: imagePath.icLocation,
    image3: imagePath.icClock,
  },
  {
    id: 2,
    title: 'Bawa Medical Hall',
    subTitle: 'Zirakpur HO,Zirakpur',
    subTitle2: 'Open unit 9:30 pm',
    image: imagePath.icRectangle,
    image2: imagePath.icLocation,
    image3: imagePath.icClock,
  }

];



const TopServicesData = [
  {
    id: 1,
    title: 'Bawa Medical Hall',
    image: imagePath.icRectangle
  },
  {
    id: 2,
    title: 'Bawa Medical Hall',
    image: imagePath.icRectangle
  }

];

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  const seeAll = () => {

  }

  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: moderateScale(10) }}>
        <View style={styles.tabColor}>
          <Image
            source={item?.image}
            style={styles.tabImageStyle} />
        </View>
        <Text style={styles.tabImageText}>{item?.name}</Text>
      </View >
    );
  };

  return (
    <WrapperContainer>
      <HeaderComp />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 0.65 }}>
          <View style={{ marginHorizontal: moderateScale(15) }}>
            <Text>Deliver to <Text style={styles.headerText}>Patiala, Punjab, 140603</Text></Text>
          </View>
          <View style={styles.searchBarmainView}>
            <TextInput
              style={{ width: '90%' }}
              placeholder="Search medicine, doctor, lab tests &... "
              onChangeText={text => setSearchText(text)}
              value={searchText}
            />
            <Image source={imagePath.icSearch}
              style={{ alignSelf: 'center' }}
              onPress={handleSearch}
            />
          </View>
          <View style={styles.flatListView}>
            <FlatList
              horizontal
              data={AllTabs}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={{ paddingHorizontal: moderateScale(12), marginVertical: moderateScaleVertical(40) }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: moderateScale(10) }}>
            <Text style={{ fontFamily: fontFamily.semiBold, fontSize: textScale(18), color: colors.blueColor }}>Nearby medical stores</Text>
            <TouchableOpacity onPress={seeAll}>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: textScale(16), color: colors.blueColor }}>see all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: 'row' }}>
            {Homecards?.map((item) => {
              return (
                <View>
                  <View style={styles.cardView}>
                    <Image source={item?.image} style={{ height: moderateScale(100), width: moderateScale(200), right: moderateScale(10)}} />
                    <Text style={{ fontFamily: fontFamily.semiBold, fontSize: textScale(16), color: colors.blackColor, alignSelf: 'center' }}>{item?.title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: moderateScale(10),paddingVertical:moderateScaleVertical(4),right:moderateScale(10)  }}>
                      <View style={{ flexDirection: 'row',justifyContent:'center' }}>
                        <EvilIcons name="location" color={colors.blackColor} size={13} style={{ alignSelf: 'center' }} />
                        <Text style={{ fontFamily: fontFamily.regular, fontSize: textScale(8), color: colors.blackColor }}>{item?.subTitle}</Text>
                      </View>
                      <View style={{ flexDirection: 'row'}}>
                        <Ionicons name="time" color={colors.grayColor} size={13} style={{ alignSelf: 'center' }} />
                        <Text style={{ fontFamily: fontFamily.regular, fontSize: textScale(8), color: colors.blackColor }}>{item?.subTitle2}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </View>

        <View style={{ paddingHorizontal: moderateScale(12), bottom: moderateScale(45) }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: moderateScale(10) }}>
            <Text style={{ fontFamily: fontFamily.semiBold, fontSize: textScale(18), color: colors.blueColor }}>Top Services</Text>
            <TouchableOpacity onPress={seeAll}>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: textScale(16), color: colors.blueColor }}>see all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: 'row' }}>
            { TopServicesData?.map((item) => {
              return (
                <View>
                  <View style={styles.cardView}>
                    <Image source={item?.image} style={{ height: moderateScale(100), width: moderateScale(200), right: moderateScale(10) }} />
                    <Text style={{ fontFamily: fontFamily.semiBold, fontSize: textScale(16), color: colors.blackColor, alignSelf: 'center' }}>{item?.title}</Text>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </WrapperContainer>
  )
}

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
    top: moderateScale(10)
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
  }
})