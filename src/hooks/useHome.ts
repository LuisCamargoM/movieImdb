import React, {useEffect, useState} from 'react';
import {Movie} from '../services/types';
import {getRandomMovies, search} from '../services/api';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectResults,
  selectTerm,
  setLoadingSearch,
  setResults,
  setTerm,
} from '../store/slices/searchSlice';
import {
  selectLoadingMovies,
  setLoadingMovies,
  setMovies,
} from '../store/slices/movieSlice';

export const useHome = () => {
  const dispatch = useDispatch();
  const term = useSelector(selectTerm);

  const setLoading = (type: string, value: boolean) => {
    const loadingResult = {loading: value};
    if (type == 'search') dispatch(setLoadingSearch(loadingResult));
    if (type == 'movies') dispatch(setLoadingMovies(loadingResult));
  };
  const fetchRandomMovies = async () => {
    setLoading('movies', true);
    const movies = await getRandomMovies().then(result => {
      setLoading('movies', false);
      return result.movies;
    });
    dispatch(setMovies({movies: movies}));
  };

  const loadSearchItems = async () => {
    setLoading('search', true);
    const movies = await search(term).then(result => {
      setLoading('search', false);
      return result.movies;
    });
    const newResult = movies?.filter(
      (item: Movie) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.aka.toLowerCase().includes(term.toLowerCase()),
    );
    dispatch(setResults({results: newResult}));
  };

  useEffect(() => {
    fetchRandomMovies();
  }, []);
  useEffect(() => {
    if (term == '') {
      dispatch(setResults({results: []}));
    } else {
      loadSearchItems();
    }
  }, [term]);

};
