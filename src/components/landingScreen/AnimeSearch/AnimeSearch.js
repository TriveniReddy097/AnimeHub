import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Card from 'components/landingScreen/Card';
import Search from 'components/landingScreen/Search';
import _ from 'lodash';

const AnimeSearch = ({fetchSelectedAnime, firebaseSignIn, animeList}) => {
  const [search, setSearch] = useState('');
  const getList = () => {
    return _.filter(
      animeList,
      (e) =>
        search.trim().toLowerCase() ===
        e.name.toLowerCase().slice(0, search.trim().length),
    );
  };
  return (
    <View style={{flex: 1}}>
      <Search search={search} setSearch={setSearch} />
      <FlatList
        data={search.length > 0 ? getList() : animeList}
        keyExtractor={(item) => item._id}
        numColumns={2}
        renderItem={({item}) => {
          return <Card item={item} fetchSelectedAnime={fetchSelectedAnime} />;
        }}
        initialNumToRender={10}
        onRefresh={firebaseSignIn}
        refreshing={false}
      />
    </View>
  );
};

export default AnimeSearch;
