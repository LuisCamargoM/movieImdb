import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import {IText, ITitle} from '../../components/Text';
import ITextInput from '../../components/TextInput';
import MovieItem from '../../components/MovieItem';
import MovieList from '../../components/List';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectResults,
  selectTerm,
  setTerm,
} from '../../store/slices/searchSlice';
import {selectMovies} from '../../store/slices/movieSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const term = useSelector(selectTerm);

  const newItems = useSelector(selectResults);
  const homeItems = useSelector(selectMovies);
  const handleTerm = (value: string) => {
    dispatch(setTerm({term: value}));
  };
  const {
    container,
    listEmptyContainer,
    resultHeaderContainer,
    searchHeaderContainer,
    containerMovieInput,
    containerMoviesList,
    containerSearch,
    resultContainer,
  } = styles;

  const ListEmptyComponent = () => {
    return (
      <View style={listEmptyContainer}>
        <IText text={`Nenhum resultado encontrado`} color="white" />
      </View>
    );
  };
  const SearchHeaderComponent = () => {
    return newItems ? (
      <View style={searchHeaderContainer}>
        <IText
          text={`${newItems?.length} resultados encontrados`}
          color="white"
        />
      </View>
    ) : (
      <ActivityIndicator size={'small'} color={'white'} />
    );
  };
  const ResultHeaderComponent = () => {
    return (
      <View style={resultHeaderContainer}>
        {homeItems?.length > 0 ? (
          <ITitle text={`Lista de resultados`} />
        ) : (
          <IText text={`Nenhum resltado encontrado`} color="grey" />
        )}
      </View>
    );
  };

  return (
    <View style={container}>
      <View style={containerMovieInput}>
        <ITextInput
          placeholder="Search for a movie"
          value={term}
          setValue={handleTerm}
        />
      </View>
      <View style={containerSearch}>
        {newItems?.length != 0 && (
          <View style={containerMoviesList}>
            <MovieList
              type="search"
              RenderItem={MovieItem}
              items={newItems}
              HeaderComponent={<SearchHeaderComponent />}
              EmptyComponent={<ListEmptyComponent />}
            />
          </View>
        )}
        <View style={resultContainer}>
          <MovieList
            RenderItem={MovieItem}
            items={homeItems}
            HeaderComponent={<ResultHeaderComponent />}
            EmptyComponent={<ListEmptyComponent />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'column',
  },
  listEmptyContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  searchHeaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  resultHeaderContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  containerMovieInput: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 30,
  },
  containerSearch: {
    width: '100%',
    marginHorizontal: 30,
    flex: 1,
  },
  containerMoviesList: {
    top: 0,
    left: 0,
    zIndex: 1,
    paddingTop: 0,
    paddingBottom: 20,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 10,
  },
  resultContainer: {paddingHorizontal: 30, flex: 1},
});

export default Home;
