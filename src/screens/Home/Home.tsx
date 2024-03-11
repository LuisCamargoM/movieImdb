import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import {IText, ITitle} from '../../components/Text';
import ITextInput from '../../components/TextInput';
import MovieItem from '../../components/MovieItem';
import MovieList from '../../components/List';
import LoadingScreen from '../Loading';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectResults,
  selectTerm,
  setTerm,
} from '../../store/slices/searchSlice';
import {selectMovies} from '../../store/slices/movieSlice';

const Home: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const loading = false;
  const term = useSelector(selectTerm);

  const newItems = useSelector(selectResults);
  const homeItems = useSelector(selectMovies);
  const handleTerm = (value: string) => {
    dispatch(setTerm({term: value}));
  };
  const {container} = styles;

  const ListEmptyComponent = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <IText text={`Nenhum resultado encontrado`} color="white" />
      </View>
    );
  };
  const SearchHeaderComponent = () => {
    return newItems ? (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
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
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        {homeItems?.length > 0 ? (
          <ITitle text={`Lista de resultados`} />
        ) : (
          <IText text={`Nenhum resltado encontrado`} color="grey" />
        )}
      </View>
    );
  };

  if (loading) return <LoadingScreen />;
  return (
    <View style={container}>
      <View
        style={{
          width: Dimensions.get('window').width,
          paddingHorizontal: 30,
        }}>
        <ITextInput
          placeholder="Search for a movie"
          value={term}
          setValue={handleTerm}
        />
      </View>
      <View
        style={{
          width: '100%',
          marginHorizontal: 30,
          flex: 1,
        }}>
        {newItems?.length != 0 && (
          <View
            style={{
              top: 0,
              left: 0,
              zIndex: 1,
              paddingTop: 0,
              paddingBottom: 20,
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0.8)',
              paddingHorizontal: 10,
            }}>
            <MovieList
              type="search"
              RenderItem={MovieItem}
              items={newItems}
              HeaderComponent={<SearchHeaderComponent />}
              EmptyComponent={<ListEmptyComponent />}
            />
          </View>
        )}
        <View style={{paddingHorizontal: 30, flex: 1}}>
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
});

export default Home;
