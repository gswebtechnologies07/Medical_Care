import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderComp2 from '../../Components/HeaderComp2'
import WrapperContainer from '../../Components/WrapperContainer'
import fontFamily from '../../styles/fontFamily'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import imagePath from '../../constants/imagePath'
import ButtonComp from '../../Components/ButtonComp'



const upComingData = [
  {
    id: 1,
    mainText: '#ghhhh678ca',
    mainText2: 'Upcoming',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 2,
    mainText: '#ghhhh678ca',
    mainText2: 'Upcoming',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 3,
    mainText: '#ghhhh678ca',
    mainText2: 'Upcoming',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 4,
    mainText: '#ghhhh678ca',
    mainText2: 'Upcoming',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 5,
    mainText: '#ghhhh678ca',
    mainText2: 'Upcoming',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  }
];

const completedData = [
  {
    id: 1,
    mainText: '#ghhhh678ca',
    mainText2: 'Completed',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 2,
    mainText: '#ghhhh678ca',
    mainText2: 'Completed',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 3,
    mainText: '#ghhhh678ca',
    mainText2: 'Completed',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 4,
    mainText: '#ghhhh678ca',
    mainText2: 'Completed',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  },
  {
    id: 5,
    mainText: '#ghhhh678ca',
    mainText2: 'Completed',
    mainText3: 'INR 350.00',
    mainText4: '7 items',
    title: 'Today at 12:30 PM',
    title2: 'Multivitamin X 1',
    title3: 'Bextram Gold X 2'
  }
];


const MyOrder = ({ navigation }) => {

  const [selectedTab, setSelectedTab] = useState(0);


  const renderItem = ({ item }) => {
    return (
      <View style={{ paddingVertical: moderateScaleVertical(20) }}>
        <View style={styles.containerView}>
          <View style={styles.mainView}>
            <Text style={styles.mainText}>{item?.mainText}</Text>
            <Text style={styles.mainText2}>{item?.title}</Text>
          </View>

          <View>
            <Text style={styles.mainText3}>{item?.mainText2}</Text>
          </View>
        </View>

        <View style={styles.titleMainView}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.titleText}>{item?.mainText4}</Text>
            <Text style={styles.titleText2}>{item?.title2}</Text>
            <Text style={styles.titleText2}>{item?.title3}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.mainText4}>{item?.mainText3}</Text>
            <View style={{}}>


              <ButtonComp
                style={styles.cardButton}
                text='Order details'
                textStyle={styles.cardButtonText}
                Img2={imagePath.icBack2}
                imgStyle={{top:moderateScale(1),right:moderateScale(2)}}
              />

              {/* <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}> Order details</Text>
                <AntDesign
                  name="right"
                  size={11}
                  color={colors.whiteColor} 
                  style={{top:moderateScale(1),right:moderateScale(2)}}
                  />
              </TouchableOpacity> */}
            </View>
          </View>

        </View>
      </View>
    )
  }

  const separatorComponent = () => {
    return (
      <View style={{ borderWidth: 0.6, backgroundColor: colors.grayColor }} />
    )
  }

  return (
    <WrapperContainer>
      <HeaderComp2
        text='My order'
      />
      <View style={{ flex: 0.20, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>


          <TouchableOpacity onPress={() => { setSelectedTab(0) }} style={{
            backgroundColor: selectedTab == 0 ? colors.blueColor : colors.whiteColor,
            borderRadius: 8, justifyContent: 'center', alignItems: 'center'
          }}>
            <Text style={{
              color: selectedTab == 0 ? colors.whiteColor : colors.blackColor, fontSize: textScale(16), alignSelf: 'center',
              fontFamily: fontFamily.semiBold, paddingHorizontal: moderateScale(12), paddingVertical: moderateScaleVertical(5)
            }}>Pending</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setSelectedTab(1) }} style={{
            backgroundColor: selectedTab == 1 ? colors.blueColor : colors.whiteColor,
            borderRadius: 8, justifyContent: 'center', alignItems: 'center'
          }}>
            <Text style={{
              color: selectedTab == 1 ? colors.whiteColor : colors.blackColor, fontSize: textScale(16), alignSelf: 'center',
              fontFamily: fontFamily.semiBold, paddingHorizontal: moderateScale(12), paddingVertical: moderateScaleVertical(5)
            }}>Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
      {selectedTab == 0 ? (

        <View style={{ flex: 1 }}>
          <FlatList
            data={upComingData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={separatorComponent}
          />
        </View>
      ) : (<View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={completedData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={separatorComponent}
          />
        </View>
      </View>)}

    </WrapperContainer>
  )
}

export default MyOrder

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: "center"
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(16),
    color: colors.blackColor
  },
  mainText2: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(11),
    color: colors.blackColor,
    alignSelf: 'center'
  },
  mainText3: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(14),
    color: colors.blackColor,
    alignSelf: 'center',
    paddingRight: moderateScale(10)
  },
  titleMainView: {
    flex: 0.22,
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: "center",
    paddingTop: moderateScale(8)
  },
  titleText: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(12),
    color: colors.blackColor
  },
  titleText2: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(10),
    color: colors.blackColor
  },
  mainText4: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(12),
    color: colors.blackColor,
    alignSelf: 'center'
  },
  cardButton: {
    flexDirection: "row",
    paddingHorizontal:moderateScale(10),
    paddingVertical: moderateScaleVertical(4),
    // backgroundColor: colors.blueColor,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    top: moderateScale(5)
  },
  cardButtonText: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(12),
    color: colors.whiteColor,
    alignSelf: 'center',
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScaleVertical(4)
  }

})