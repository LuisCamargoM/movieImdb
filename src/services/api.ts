import axios from 'axios';
import {
  DetailsData,
  DetailsResponse,
  Movie,
  RandomMoviesResponse,
  ResponseMovieData,
  SearchResponse,
} from './types';

const API_URL = 'https://search.imdbot.workers.dev/?';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

const fetchApiData = async (params: string) => {
  return await axios.get(`${API_URL}${params}`).then(res => res.data);
};

export const search = async (searchText: string): Promise<any> => {
  const result = await fetchApiData(`q=${searchText}`);

  const {description: items, error_code, ok} = result;
  const movies: Movie[] = items?.map(item => {
    return {
      title: item['#TITLE'],
      year: item['#YEAR'],
      imdbId: item['#IMDB_ID'],
      rank: item['#RANK'],
      actors: item['#ACTORS'],
      aka: item['#AKA'],
      imdbUrl: item['#IMDB_URL'],
      imdbIv: item['#IMDB_IV'],
      imgPoster: item['#IMG_POSTER'],
      photo_width: item.photo_width,
      photo_height: item.photo_height,
    };
  });
  return {ok, error_code, movies};
};
export const getMovieDetails = async (imdbId: string): Promise<any> => {
  try {
    const result = await fetchApiData(`tt=${imdbId}`);
    const {short} = result;
    const details = {
      url: short.url,
      name: short.name,
      description: short.description,
      imageUrl: short.image,
      review: short.review,
      genres: short.genre,
      keywords: short.keywords,
      actors: short.actor,
      director: short.director,
      duration: short.duration,
      id: imdbId,
      rating: short.contentRating,
    };
    return {details, error_code: '200', ok: true};
  } catch (error) {
    //   return { error_code: "400", ok: false, details: null };
  }
};

export const getRandomMovies = async (
  size: number = 10,
): Promise<RandomMoviesResponse> => {
  let error_code = '400';
  try {
    const randomLetters = (length: number) => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength),
        );
        counter += 1;
      }
      return result.split('');
    };
    const letters = randomLetters(5);
    const result = [];
    for (let i = 0; i < letters.length; i++) {
      const response = await search(letters[i]);
      if (response.ok) {
        const movies = response.movies;
        result.push(...movies);
        if (result.length >= size) {
          error_code = '200';
          break;
        }
      }
    }
    const movies = result.sort((a, b) => a.title - b.title).slice(0, size);
    return {ok: true, movies, error_code};
  } catch (error) {
    return {ok: true, movies: [], error_code};
  }
};
