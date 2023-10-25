import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from "react-native-splash-screen";
import Routes from './src/Navigations/Routes'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store/Store';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
        <FlashMessage
          position={'top'}
        />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;