import React from 'react';
import {Modal} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import LottieView from 'lottie-react-native';

class NoInternet extends React.Component {
  constructor() {
    super();
    this.state = {
      internet: true,
    };
  }
  componentDidMount() {
    NetInfo.addEventListener((state) => {
      this.setState({internet: state.isConnected});
    });
  }
  render() {
    return (
      <Modal
        transparent={false}
        visible={!this.state.internet}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <LottieView
          autoPlay
          style={{backgroundColor: '#333041'}}
          loop
          source={require('assets/json/noInternet.json')}
        />
      </Modal>
    );
  }
}

export default NoInternet;
