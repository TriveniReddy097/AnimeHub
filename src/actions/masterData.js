import {masterDataActions} from 'actionTypes';
import database from '@react-native-firebase/database';
import NavigationService from 'lib/NavigationService';
import auth from '@react-native-firebase/auth';
import _ from 'lodash';
import axiosInstance from 'src/util/axiosInstance';

export const setValue = (field, value) => (dispatch) => {
  try {
    dispatch({
      type: masterDataActions.SET_VALUE.SUCCESS,
      payload: {field, value},
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAnimeList = () => async (dispatch) => {
  try {
    dispatch(setValue('loading', true));
    const response = await axiosInstance.get('/anime');
    dispatch(setValue('animeList', response.data));
    dispatch(setValue('loading', false));
  } catch (error) {
    console.log(error);
    // dispatch(setValue('loading', true));
  }
  // dispatch(setValue('loading', true));
  // database()
  //   .ref('/animeList')
  //   .once('value')
  //   .then((snapshot) => {
  //     const sortedData = _.sortBy(snapshot.val(), (e) => e.name);
  //     dispatch(setValue('animeList', sortedData));
  //     dispatch(setValue('loading', false));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     dispatch(setValue('loading', false));
  //   });
};

export const fetchSelectedAnime = (id, item, showEp) => (dispatch) => {
  if (showEp) {
    dispatch(getVideURL(item.pathName, item.totalEpisodes));
  } else {
    dispatch(setValue('selected', {animeListId: id, id}));
    NavigationService.navigate('AnimeScreen');
  }
  // dispatch(setValue('loading', true));
  // database()
  //   .ref(`/episodesList/${id - 1}`)
  //   .once('value')
  //   .then((snapshot) => {
  //     let {animeListId, id, urls} = snapshot.val();
  //     const sortedData = _.orderBy(urls, (e) => e.id).reverse();
  //     dispatch(setValue('selected', {animeListId, id, urls: sortedData}));
  //     NavigationService.navigate('AnimeScreen');
  //     dispatch(setValue('loading', false));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     dispatch(setValue('loading', false));
  //   });
};

export const getVideURL = (pathName, epNumber) => async (dispatch) => {
  try {
    dispatch(setValue('loading', true));
    const resp = await axiosInstance.get(
      `/anime/getAnimeURL?url=https://www1.gogoanime.ai/${pathName}-${epNumber}`,
    );
    dispatch(
      setValue('selectedUrl', {
        url: resp.data[0],
        type: resp.data[0].includes('storage') ? 'player' : '',
      }),
    );
    dispatch(setValue('loading', false));
    if (resp.data && resp.data.length) {
      NavigationService.navigate('VideoScreen');
    }
  } catch (error) {
    dispatch(setValue('loading', false));
    console.log(error);
  }
};

export const fetchAnime = (list, id) => {
  return list.filter((e) => e.id === id)[0];
};

export const firebaseSignIn = () => (dispatch) => {
  dispatch(setValue('loading', true));
  auth().onAuthStateChanged((user) => {
    if (!user) {
      auth()
        .signInAnonymously()
        .then(() => dispatch(fetchAnimeList()))
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch(fetchAnimeList());
    }
  });
};
