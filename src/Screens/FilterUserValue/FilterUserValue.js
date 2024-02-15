import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import imagePath from '../../constants/imagePath';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import navigationStrings from '../../Navigations/navigationStrings';

const AllTabs = [
    { id: 1, name: 'Medicine', image: imagePath.icDrugs },
    { id: 2, name: 'Consult Doctor', image: imagePath.icStethoscope },
    { id: 3, name: 'Lab Tests', image: imagePath.icBlood_test },
    { id: 4, name: 'Physiotherapist', image: imagePath.icPsychotherapy },
];

const FilterUserValue = (props) => {
    const [searchText, setSearchText] = useState('');
    const filterData = props?.route?.params?.searchData;
    const [userValue, setUserValue] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const handleSearch = (text) => {
        setSearchText(text);
        const filteredChemists = filterData.filter((chemist) => {
            return (
                chemist.city.toLowerCase().includes(text.toLowerCase()) ||
                chemist.name_of_firm.toLowerCase().includes(text.toLowerCase()) ||
                chemist.name.toLowerCase().includes(text.toLowerCase()) ||
                chemist.sector.toLowerCase().includes(text.toLowerCase()) ||
                chemist.deals_in.toLowerCase().includes(text.toLowerCase())
            );
        });
        setUserValue(filteredChemists.slice(0, 6)); // Initially load 6 items
    };

    useEffect(() => {
        if (filterData && filterData.length > 0) {
            setUserValue(filterData.slice(0, 6)); // Initially load 6 items
        }
    }, [filterData]);

    const loadMoreData = () => {
        const nextPageStartIndex = currentPage * 6;
        const nextPageEndIndex = Math.min(nextPageStartIndex + 6, filterData.length);
        const nextData = filterData.slice(nextPageStartIndex, nextPageEndIndex);
        setUserValue((prevData) => [...prevData, ...nextData]);
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <ActivityIndicator
                style={{ marginVertical: moderateScale(20) }}
                size="large"
                color={colors.blueColor}
            />
        );
    };

    // const renderMedicalStoreItem = ({ item }) => (
    //     // console.log(item,'itemitemitemitem')
    //     <TouchableOpacity
    //         onPress={() =>
    //             props?.navigation?.navigate(navigationStrings.Medical_Profile, {
    //                 data: item,
    //             })
    //         }>

    //     <TouchableOpacity
    //         onPress={() => {
    //             if (item.user_type === 'Doctor') {
    //                 props.navigation.navigate(navigationStrings.Doctor_Screen, {
    //                     data: item,
    //                 });
    //             } else if (item.user_type === 'Chemist') {
    //                 props.navigation.navigate(navigationStrings.Medical_Profile, {
    //                     data: item,
    //                 });
    //             }
    //         }}
    //     >
    //         <View style={styles.cardView}>
    //             <Image
    //                 source={{ uri: item?.img_url }}
    //                 style={styles.medicalStoreImage}
    //             />
    //             <Text style={styles.medicalStoreName}>{item?.name_of_firm}</Text>
    //             <View style={styles.locationTimeContainer}>
    //                 <View style={styles.locationContainer}>
    //                     <EvilIcons
    //                         name="location"
    //                         color={colors.blackColor}
    //                         size={13}
    //                         style={styles.locationIcon}
    //                     />
    //                     <Text style={styles.locationText}>{item?.city}</Text>
    //                 </View>
    //                 <View style={styles.timeContainer}>
    //                     <Ionicons
    //                         name="time"
    //                         color={colors.grayColor}
    //                         size={13}
    //                         style={styles.timeIcon}
    //                     />
    //                     <Text style={styles.timeText}>Open unit 9:30 pm</Text>
    //                 </View>
    //             </View>
    //         </View>
    //     </TouchableOpacity>
    // );

    const renderMedicalStoreItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.9}
            onPress={() => {
                if (item.user_type === 'Doctor') {
                    props.navigation.navigate(navigationStrings.Doctor_Screen, {
                        data: item,
                    });
                } else if (item.user_type === 'Chemist') {
                    props.navigation.navigate(navigationStrings.Medical_Profile, {
                        data: item,
                    });
                }
            }}
        >
            <View style={styles.cardView}>
                <Image
                    source={{ uri: item?.img_url }}
                    style={styles.medicalStoreImage}
                />
                <Text style={styles.medicalStoreName}>{item?.name_of_firm}</Text>
                <View style={styles.locationTimeContainer}>
                    <View style={styles.locationContainer}>
                        <EvilIcons
                            name="location"
                            color={colors.blackColor}
                            size={13}
                            style={styles.locationIcon}
                        />
                        <Text style={styles.locationText}>{item?.city}</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Ionicons
                            name="time"
                            color={colors.grayColor}
                            size={13}
                            style={styles.timeIcon}
                        />
                        <Text style={styles.timeText}>Open unit 9:30 pm</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <WrapperContainer>

            <View style={styles.headerContainer}>
                <Image source={imagePath.icLogo} style={styles.logoImage} />
            </View>
            {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}> */}
            <View style={styles.scrollView}>
                <View style={styles.deliveryLocationContainer}>
                    <Text style={styles.deliveryLocationText}>
                        Deliver to{' '}
                        <Text style={styles.deliveryLocationSubText}>Patiala, Punjab, 140603</Text>
                    </Text>
                </View>

                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search medicine, doctor, lab tests &..."
                        onChangeText={handleSearch}
                        value={searchText}
                    />
                    <TouchableOpacity onPress={() => handleSearch(searchText)}>
                        <Image source={imagePath.icSearch} style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.tabListContainer}>
                    <FlatList
                        horizontal
                        data={AllTabs}
                        renderItem={({ item }) => (
                            <View style={{ padding: moderateScale(10) }}>
                                <View style={styles.tabColor}>
                                    <Image source={item?.image} style={styles.tabImageStyle} />
                                </View>
                                <Text style={styles.tabImageText}>{item?.name}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            <View style={styles.medicalStoreListContainer}>
                {userValue.length === 0 ? (
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={styles.noDataText}>No data found...</Text>
                    </View>
                ) : (
                    <FlatList
                        data={userValue}
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderMedicalStoreItem}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={renderFooter}
                    />
                )}
                {userValue.length < filterData.length && (
                    <TouchableOpacity
                        style={styles.loadMoreButton}
                        onPress={loadMoreData}>
                        <Text style={styles.loadMoreText}>Load More</Text>
                    </TouchableOpacity>
                )}
            </View>
        </WrapperContainer>
    );
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: "space-around"
    },
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: moderateScale(5),
        justifyContent: 'center',
        paddingVertical: moderateScaleVertical(10)
    },
    scrollView: {
        // height: height / 4,
        // backgroundColor: 'red',
        height: moderateScale(190)
    },
    deliveryLocationContainer: {
        marginHorizontal: moderateScale(15),
    },
    deliveryLocationText: {
        color: colors.blackColor,
        fontSize: textScale(12),
        fontFamily: fontFamily.semiBold,
    },
    deliveryLocationSubText: {
        color: colors.blackColor,
        fontSize: textScale(12),
        fontFamily: fontFamily.semiBold,
    },
    searchBarContainer: {
        marginHorizontal: moderateScale(15),
        borderWidth: 1,
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(8),
        top: moderateScale(3),
        flexDirection: 'row',
    },
    searchInput: {
        width: '90%',
    },
    searchIcon: {
        marginTop: moderateScale(10),
    },
    tabListContainer: {
        paddingVertical: moderateScaleVertical(10),
        backgroundColor: '#F2F2F4',
        justifyContent: 'space-around',
        top: moderateScale(15),
        shadowColor: colors.blackColor,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadiusBottom: 7.68,
        elevation: 5,
    },
    medicalStoreListContainer: {
        height: height / 1.6,
        marginHorizontal: moderateScale(8),
        paddingBottom: moderateScale(15)
    },
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
    tabImageStyle: {
        alignSelf: 'center',
        height: moderateScale(35),
        width: moderateScale(35),
    },
    tabImageText: {
        fontSize: textScale(12),
        fontFamily: fontFamily.bold,
        alignSelf: 'center',
        top: moderateScale(10),
        color: colors.blackColor,
    },
    medicalStoreImage: {
        height: moderateScale(100),
        width: moderateScale(170),
        borderTopLeftRadius: moderateScale(10),
        borderTopRightRadius: moderateScale(10),
    },
    medicalStoreName: {
        fontFamily: fontFamily.semiBold,
        fontSize: textScale(16),
        color: colors.blackColor,
        alignSelf: 'center',
        marginTop: moderateScale(5),
    },
    locationTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScaleVertical(4),
        right: moderateScale(10),
        marginTop: moderateScale(8),
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: moderateScale(8),
    },
    locationIcon: {
        alignSelf: 'center',
    },
    locationText: {
        fontFamily: fontFamily.regular,
        fontSize: textScale(8),
        color: colors.blackColor,
    },
    timeContainer: {
        flexDirection: 'row',
    },
    timeIcon: {
        alignSelf: 'center',
    },
    timeText: {
        fontFamily: fontFamily.regular,
        fontSize: textScale(8),
        color: colors.blackColor,
    },
    cardView: {
        backgroundColor: colors.whiteColor,
        borderRadius: moderateScale(10),
        width: moderateScale(170),
        marginTop: moderateScale(10),
        marginBottom: moderateScale(10),
        shadowColor: colors.blackColor,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadiusBottom: 7.68,
        elevation: 5,
    },
    loadMoreButton: {
        backgroundColor: colors.blueColor,
        padding: moderateScale(10),
        alignItems: 'center',
        borderRadius: moderateScale(8),
        marginVertical: moderateScale(10),
        marginHorizontal: moderateScale(15)
    },
    loadMoreText: {
        color: colors.whiteColor,
        fontSize: textScale(14),
        fontFamily: fontFamily.semiBold,
    },
    noDataText: {
        fontFamily: fontFamily.bold,
        fontSize: textScale(16),
        alignSelf: 'center',
        color: colors.blackColor
    }
});

export default FilterUserValue;
