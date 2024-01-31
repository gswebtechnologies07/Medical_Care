// Higher-level component that manages subscription state
import React, {useState} from 'react';
import Subscription from './Subscription';

const SubscriptionWrapper = props => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscriptionChange = value => {
    setIsSubscribed(value);
  };

  return (
    <Subscription
      isSubscribed={isSubscribed}
      onSubscriptionChange={handleSubscriptionChange}
      {...props}
    />
  );
};

export default SubscriptionWrapper;
