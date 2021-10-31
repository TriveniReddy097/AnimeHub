import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {scale} from 'lib/helpers/responsiveScaling';

class EpisodeButton extends React.PureComponent {
  render() {
    const {item, _navigate, selectedUrl} = this.props;
    const {_id} = item;
    return (
      <TouchableOpacity key={_id} onPress={() => _navigate(_id)}>
        <Text
          style={[
            styles.text,
            {
              backgroundColor: _id === selectedUrl ? 'orange' : 'black',
              color: _id === selectedUrl ? 'black' : 'orange',
            },
          ]}>
          {_id}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default EpisodeButton;

const styles = StyleSheet.create({
  text: {
    // padding: scale(12),
    width: scale(50),
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    color: 'orange',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'orange',
    marginLeft: scale(9),
    marginBottom: scale(5),
    marginTop: scale(5),
  },
});
