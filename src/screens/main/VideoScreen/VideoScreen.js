import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import Loader from 'components/common/Loader';
import VideoPlayer from 'components/videoScreen/VideoPlayer/VideoPlayer';
import Orientation from 'react-native-orientation';

class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    Orientation.unlockAllOrientations();
  }

  componentWillUnmount() {
    Orientation.lockToPortrait();
  }

  render() {
    if (this.props.selectedUrl.type === 'player') {
      return <VideoPlayer uri={this.props.selectedUrl.url} />;
    }
    const jsCode = `
    document.getElementById("header").style.display='none';
    document.getElementsByClassName('jw-logo')[0].style.display = 'none';
    document.getElementsByClassName('tbl1')[0].style.display = 'none';
    document.getElementById("pdiv").style.paddingTop='100px';
    document.getElementById("pdiv").style.paddingBottom='100px';
    document.getElementById("footernav").style.display='none';
    document.getElementsByClassName('social')[0].style.display = 'none';
    document.getElementsByClassName('fBtm')[0].style.display = 'none';
    `;
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <StatusBar backgroundColor="#000000" hidden={true} />
        {this.state.loading && <Loader />}
        <WebView
          style={{
            flex: this.state.loading ? 0 : 1,
            backgroundColor: 'black',
          }}
          injectedJavaScript={jsCode}
          javaScriptEnabled={true}
          source={{uri: this.props.selectedUrl.url}}
          onLoadEnd={() => this.setState({loading: false})}
          scalesPageToFit
        />
      </View>
    );
  }
}

const mapStateToProps = ({masterData}) => {
  const {selectedUrl} = masterData;
  return {
    selectedUrl,
  };
};

export default connect(mapStateToProps, null)(VideoScreen);
