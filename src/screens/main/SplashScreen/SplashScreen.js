import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import NavigationService from 'lib/NavigationService';
import {firebaseSignIn} from 'actions/masterData';

const SplashScreen = ({firebaseSignIn}) => {
  useEffect(() => {
    firebaseSignIn();
    setTimeout(() => {
      NavigationService.replace('LandingScreen');
    }, 2000);
  }, []);
  return <View></View>;
};

export default connect(null, {firebaseSignIn})(SplashScreen);
