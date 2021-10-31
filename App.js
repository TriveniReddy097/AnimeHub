import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import store from 'store';
import NavigationService from 'lib/NavigationService';
import screens from 'config/Screens';

console.disableYellowBox = true;

const MainNavigator = createStackNavigator(
  {
    // SplashScreen: screens.SplashScreen,
    LandingScreen: screens.LandingScreen,
    AnimeScreen: screens.AnimeScreen,
    VideoScreen: screens.VideoScreen,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      headerMode: 'none',
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    MainNavigator,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      headerMode: 'none',
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default () => {
  return (
    <Provider store={store}>
      <AppContainer
        NavigationService={NavigationService}
        ref={(navigatorRef) =>
          NavigationService.setTopLevelNavigator(navigatorRef)
        }
      />
    </Provider>
  );
};
