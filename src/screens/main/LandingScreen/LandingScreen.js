import React, {useEffect, useState} from 'react';
import {View, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {fetchSelectedAnime, firebaseSignIn} from 'actions/masterData';
import Latest from 'components/landingScreen/Latest';
import AnimeSearch from 'components/landingScreen/AnimeSearch';
import AppFooter from 'components/landingScreen/AppFooter';
import Loader from 'components/common/Loader';
import NoInternet from 'components/common/NoInternet';
import Orientation from 'react-native-orientation';
import SplashScreen from 'react-native-splash-screen';
import _ from 'lodash';

const LandingScreen = ({
  animeList,
  fetchSelectedAnime,
  loading,
  firebaseSignIn,
}) => {
  const [tab, setTab] = useState(0);
  useEffect(() => {
    SplashScreen.hide();
    Orientation.lockToPortrait();
    firebaseSignIn();
  }, []);
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      {(animeList.length === 0 || loading) && <Loader />}
      <StatusBar backgroundColor="#000000" />
      <NoInternet />
      {tab === 0 && animeList.length > 0 && (
        <Latest
          animeList={animeList}
          fetchSelectedAnime={fetchSelectedAnime}
          firebaseSignIn={firebaseSignIn}
        />
      )}
      {animeList.length > 0 && tab === 1 && (
        <AnimeSearch
          fetchSelectedAnime={fetchSelectedAnime}
          firebaseSignIn={firebaseSignIn}
          animeList={animeList}
        />
      )}
      <AppFooter tab={tab} setTab={setTab} />
    </View>
  );
};

const mapStateToProps = ({masterData}) => {
  const {animeList, loading} = masterData;
  return {
    animeList,
    loading,
  };
};

export default connect(mapStateToProps, {
  fetchSelectedAnime,
  firebaseSignIn,
})(LandingScreen);
