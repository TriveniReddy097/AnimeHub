import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Animated,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchAnime, setValue, getVideURL} from 'actions/masterData';
import {scale} from 'lib/helpers/responsiveScaling';
import EpisodeButton from 'components/animeScreen/EpisodeButton';
import NavigationService from 'lib/NavigationService';
let arr = [];
const AnimeScreen = ({selected, animeList, setValue, getVideURL}) => {
  const {animeListId} = selected;
  let sel = animeList.filter((anime) => anime._id === selected.id);
  let ss = sel[0];
  const [prev, setPrev] = useState(null);
  const [selectedUrl, setURL] = useState(-1);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const backgroundInterpolate = animation.interpolate({
    inputRange: [0, scale(250)],
    outputRange: [scale(250), 0],
  });

  const backgroundStyles = {
    height: backgroundInterpolate,
  };
  useEffect(() => {
    setPrev(fetchAnime(animeList, animeListId));
    return () => {
      setPrev(null);
      arr = [];
    };
  }, []);
  const _navigate = (url) => {
    getVideURL(ss.pathName, url);
    setURL(url);
  };
  const listData = () => {
    arr = [];
    for (let _id = ss.totalEpisodes; _id > 0; _id--) arr.push({_id});
    return arr;
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Animated.Image
        source={{uri: ss.imageURL}}
        style={[
          {
            height: scale(250),
            width: '100%',
            position: 'absolute',
            // opacity: 0.3,
            backgroundColor: 'black',
          },
          backgroundStyles,
        ]}
        resizeMode="cover"
        blurRadius={5}
      />
      <Animated.Image
        source={{uri: ss.imageURL}}
        style={[{height: scale(250)}, backgroundStyles]}
        resizeMode="contain"
      />
      <View
        style={{
          paddingLeft: 10,
          paddingTop: 20,
          paddingBottom: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Title: </Text>
          <Text style={styles.text}>{ss.name}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Status: </Text>
          <Text style={styles.text}>{ss.status}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Total: </Text>
          <Text style={styles.text}>{ss.totalEpisodes}</Text>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Text style={styles.text}>
          Please come back and click on the episode if you can't watch it.
        </Text>
      </View>
      <View style={{height: 1, backgroundColor: 'orange', marginBottom: 10}} />
      <FlatList
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animation,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
        numColumns={6}
        initialNumToRender={10}
        data={listData()}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
          <EpisodeButton
            item={item}
            _navigate={_navigate}
            selectedUrl={selectedUrl}
          />
        )}
      />
    </View>
  );
};

const mapStateToProps = ({masterData}) => {
  const {selected, animeList} = masterData;
  return {
    selected,
    animeList,
  };
};

export default connect(mapStateToProps, {setValue, getVideURL})(AnimeScreen);

const styles = StyleSheet.create({
  text: {
    color: 'orange',
  },
});
