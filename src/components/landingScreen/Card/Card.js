import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'lib/helpers/responsiveScaling';

class Card extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {item, fetchSelectedAnime, showEp} = this.props;
    const {_id, imageURL, name, totalEpisodes, status} = item;
    return (
      <TouchableOpacity
        key={_id}
        onPress={() => fetchSelectedAnime(_id, item, showEp)}>
        <ImageBackground
          resizeMode="cover"
          style={styles.card}
          source={{uri: imageURL}}></ImageBackground>
        <Text style={[styles.title, {margin: 10, marginTop: 0}]}>{name}</Text>
        {showEp && (
          <Text
            style={[styles.title, {margin: 10, marginTop: 0, color: 'white'}]}>
            Episode {totalEpisodes}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  card: {
    width: scale(160),
    height: scale(190),
    margin: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  infoContainer: {
    padding: scale(10),
    backgroundColor: 'rgba(255,255,255,0.8)',
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: scale(10),
    textAlign: 'center',
  },
});
