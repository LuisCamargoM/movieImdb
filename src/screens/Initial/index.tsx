import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {IText, ITitle} from '../../components/Text';
import ITextInput from '../../components/TextInput';
import MovieItem from '../../components/MovieItem';
import MovieList from '../../components/List';
import { getRandomMovies, search} from '../../services/api';
import {Movie} from '../../services/types';

const InitialScreen: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const [newItems, setNewItems] = useState<any>(null);
  const [homeItems, setHomeItems] = useState<any>(null);
  const {container} = styles;

  const fetchRandomMovies = async () => {
    const res = await getRandomMovies();
    setHomeItems(res.movies);
  };

  const loadSearchItems = async () => {
    const {movies} = term.length > 2 && (await search(term));
    const newResult = movies?.filter(
      (item: Movie) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.aka.toLowerCase().includes(term.toLowerCase()),
    );
    setNewItems(newResult);
  };

  const SearchHeaderComponent = () => {
    return (
      newItems?.length != 0 && (
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10,
          }}>
          {newItems?.length > 0 && (
            <IText text={`${newItems?.length} Resultados encontrados`} />
          )}
        </View>
      )
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

  useEffect(() => {
    fetchRandomMovies();
  }, []);
  useEffect(() => {
    if (term == '') {
      setNewItems([]);
    } else {
      loadSearchItems();
    }
  }, [term]);
  return (
    <>
      <View style={container}>
        <View
          style={{
            width: Dimensions.get('window').width,
            paddingHorizontal: 30,
          }}>
          <ITextInput
            placeholder="Search for a movie"
            value={term}
            setValue={setTerm}
          />
        </View>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 30,
            flex: 1,
          }}>
          <MovieList
            RenderItem={MovieItem}
            items={newItems}
            HeaderComponent={<SearchHeaderComponent />}
          />
          <MovieList
            type="home"
            RenderItem={MovieItem}
            items={homeItems}
            HeaderComponent={<ResultHeaderComponent />}
          />
        </View>
      </View>
    </>
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

export default InitialScreen;
