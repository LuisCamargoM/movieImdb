import React, {useEffect, useState} from 'react';
import {Details} from '../services/types';
import {getMovieDetails} from '../services/api';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectChoosenMovie,
  setLoadingDetailMovies,
} from '../store/slices/movieSlice';
import {useNavigation} from '@react-navigation/native';

export const useMovieDetails = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const item = useSelector(selectChoosenMovie);
  const [details, setDetails] = useState<Details>();

  const actors = item?.actors.split(',');
  const genres = details?.genres.join(',');
  const fetchMovieDetails = async () => {
    dispatch(setLoadingDetailMovies({loading: true}));
    await getMovieDetails(item?.imdbId)
      .then(result => {
        const {details: _details, ok} = result;
        if (ok) {
          setDetails(_details);
          dispatch(setLoadingDetailMovies({loading: false}));
        } else {
          navigation.goBack();
        }
      })
      .catch(error => {
        console.log(error);
        navigation.goBack();
      });
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return {
    item: {
      imageUrl: item.imgPoster,
      year: item.year,
    },
    details: {
      name: details?.name,
      rating: details?.rating,
      duration: details?.duration,
      description: details?.description,
      keywords: details?.keywords,
      genres,
      actors,
    },
  };
};
