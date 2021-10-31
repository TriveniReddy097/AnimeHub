import React from 'react';
import {Modal} from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <Modal
      transparent
      visible={true}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <LottieView autoPlay loop source={require('assets/json/loading.json')} />
    </Modal>
  );
};

export default Loader;
