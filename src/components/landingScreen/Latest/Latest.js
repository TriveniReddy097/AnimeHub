import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Card from 'components/landingScreen/Card';
import _ from 'lodash';
import {scale} from 'lib/helpers/responsiveScaling';

const Latest = ({fetchSelectedAnime, animeList, firebaseSignIn}) => {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          color: 'orange',
          fontSize: scale(18),
          paddingLeft: 10,
          paddingBottom: 10,
        }}>
        Recently added
      </Text>
      <FlatList
        data={
          animeList.length > 0
            ? _.orderBy(animeList, ['updatedAt'], ['desc']).splice(0, 20)
            : []
        }
        keyExtractor={(item) => item._id}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <Card
              item={item}
              fetchSelectedAnime={fetchSelectedAnime}
              showEp={true}
            />
          );
        }}
        initialNumToRender={10}
        onRefresh={firebaseSignIn}
        refreshing={false}
      />
    </View>
  );
};

export default Latest;
