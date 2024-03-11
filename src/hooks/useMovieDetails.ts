import React, {useEffect, useState} from 'react';
import {Details} from '../services/types';
import {getMovieDetails} from '../services/api';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectChoosenMovie,
  setLoadingDetailMovies,
  setMovieSelected,
} from '../store/slices/movieSlice';

export const useMovieDetails = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectChoosenMovie);
  const [details, setDetails] = useState<Details>();

  const actors = item?.actors.split(',');
  const genres = details?.genres.join(',');
  const fetchMovieDetails = async () => {
    dispatch(setLoadingDetailMovies({loading: true}));
    await getMovieDetails(item?.imdbId).then(result => {
      setDetails(result.details);
      dispatch(setLoadingDetailMovies({loading: false}));
      return result;
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
