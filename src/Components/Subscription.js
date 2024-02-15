import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateDoctorProfileAction } from '../redux/Action/DoctorProfileAction';
import ButtonComp from './ButtonComp';
import colors from '../styles/colors';

const Subscription = props => {
  const [subscriptionDetails, setSubscriptionDetails] = useState({});
  const dispatch = useDispatch();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const userName = props?.route?.params?.item?.user_name;
  const userEmail = props?.route?.params?.item?.user_email;
  const mobile = props?.route?.params?.item?.user_mobile;
  const subscriptionButtonText = isSubscribed
    ? ` ${subscriptionDetails.sub_amount} Subscription`
    : ` ${subscriptionDetails.sub_amount} Subscription`;
  const [orderId, setOrderId] = useState(null);
  const LoginData = useSelector(state => state?.LoginReducer?.Login);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchSubscriptionDetails = async () => {
      try {
        const response = await fetch(
          'https://demogswebtech.com/medicalcare/api/get/subcription',
        );
        const { status, data } = await response.json();

        if (status === 200 && data && data.length > 0) {
          const subscriptionData = data[0];

          const initialSubscriptionDetails = {
            sub_amount: subscriptionData.sub_amount,
            sub_period: subscriptionData.sub_period,
          };

          setSubscriptionDetails(initialSubscriptionDetails);
        } else {
          console.error('Failed to fetch subscription data');
        }
      } catch (error) {
        console.error('Error fetching subscription data', error);
      }
    };

    fetchSubscriptionDetails();
  }, []);

  useEffect(() => {
    const openRazorpaySubscription = async () => {
      try {
        const response = await fetch(
          `https://demogswebtech.com/medicalcare/api/show/profile/${LoginData?.user?.id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: '33OwrpULESs3i43BBsBgHK2Z', // Replace with your authorization token
            },
          },
        );
        const data = await response.json();
        setIsSubscribed(data?.user?.is_subscribe === 'yes');
      } catch (error) {
        console.error('Error fetching data from Razorpay API:', error);
      }
    };

    openRazorpaySubscription();
  }, []);

  const handlePayment = async () => {
    const options = {
      description: 'Monthly Subscription',
      order_id: orderId,
      currency: 'INR',
      key: 'rzp_test_iyfY8OJ0hrwePS',
      amount: subscriptionDetails.sub_amount * 100, // Convert amount to paisa
      name: 'GS WEB',
      prefill: {
        email: userEmail,
        contact: mobile,
        name: userName,
      },
      theme: { color: colors.blueColor },
    };

    try {
      const success = await RazorpayCheckout.open(options);

      if (success) {
        console.log('Payment successful');

        // Move the definition of responseJson inside the if block
        const response = await fetch(
          `https://demogswebtech.com/medicalcare/api/edit/profile/${LoginData?.user?.id}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: '33OwrpULESs3i43BBsBgHK2Z',
            },
            body: JSON.stringify({ is_subscribe: 'yes' }),
          },
        );

        const responseJson = await response.json();

        console.log('editProfileResponse:', responseJson);

        if (response.status === 200) {
          setIsSubscribed(true);
        } else {
          console.error('Failed to update subscription status');
        }
      }
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  return (
    <>
      <View style={{ justifyContent: 'center' }}>
        {!isSubscribed && (
          <TouchableOpacity activeOpacity={0.7} onPress={handlePayment}>
            <ButtonComp text={subscriptionButtonText} />
          </TouchableOpacity>
        )}
      </View>
      {isSubscribed && (
        <View>
          <Text>Subscription Details:</Text>
          <Text>Amount: {subscriptionDetails.sub_amount}</Text>
          <Text>Period: {subscriptionDetails.sub_period}</Text>
        </View>
      )}
    </>
  );
};

export default Subscription;
