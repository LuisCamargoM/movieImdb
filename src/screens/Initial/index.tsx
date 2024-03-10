import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {IText, ITitle} from '../../components/Text';
import ITextInput from '../../components/TextInput';
import MovieItem from '../../components/MovieItem';
import MovieList from '../../components/List';

const InitialScreen: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const [newItems, setNewItems] = useState<any>(null);
  const {container} = styles;

  const items = [
    {
      '#TITLE': 'Game of Thrones',
      '#YEAR': 2011,
      '#IMDB_ID': 'tt0944947',
      '#RANK': 21,
      '#ACTORS': 'Emilia Clarke, Peter Dinklage',
      '#AKA': 'Game of Thrones (2011) ',
      '#IMDB_URL': 'https://imdb.com/title/tt0944947',
      '#IMDB_IV':
        'https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0944947&rhash=77ed0696a538f4',
      '#IMG_POSTER':
        'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
      photo_width: 1000,
      photo_height: 1500,
    },
    {
      '#TITLE': "Grey's Anatomy",
      '#YEAR': 2005,
      '#IMDB_ID': 'tt0413573',
      '#RANK': 54,
      '#ACTORS': 'Chandra Wilson, James Pickens Jr.',
      '#AKA': "Grey's Anatomy (2005) ",
      '#IMDB_URL': 'https://imdb.com/title/tt0413573',
      '#IMDB_IV':
        'https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0413573&rhash=77ed0696a538f4',
      '#IMG_POSTER':
        'https://m.media-amazon.com/images/M/MV5BODA2Mjk0N2MtNGY0Mi00ZWFjLTkxODEtZDFjNDg4ZDliMGVmXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_.jpg',
      photo_width: 2700,
      photo_height: 4000,
    },
    {
      '#TITLE': 'Griselda',
      '#YEAR': 2024,
      '#IMDB_ID': 'tt15837600',
      '#RANK': 88,
      '#ACTORS': 'Sofía Vergara, Alberto Guerra',
      '#AKA': 'Griselda (2024) ',
      '#IMDB_URL': 'https://imdb.com/title/tt15837600',
      '#IMDB_IV':
        'https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt15837600&rhash=77ed0696a538f4',
      '#IMG_POSTER':
        'https://m.media-amazon.com/images/M/MV5BNTZlNjRiOGYtZjVlYy00Y2Y2LThjNmItNmVkY2U0ZjVjOGU4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      photo_width: 1500,
      photo_height: 2222,
    },
    {
      '#TITLE': 'Godzilla x Kong: The New Empire',
      '#YEAR': 2024,
      '#IMDB_ID': 'tt14539740',
      '#RANK': 123,
      '#ACTORS': 'Rebecca Hall, Dan Stevens',
      '#AKA': 'Godzilla x Kong: The New Empire (2024) ',
      '#IMDB_URL': 'https://imdb.com/title/tt14539740',
      '#IMDB_IV':
        'https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt14539740&rhash=77ed0696a538f4',
      '#IMG_POSTER':
        'https://m.media-amazon.com/images/M/MV5BN2VjZmI4NTctMmVjMy00NTc0LWE1YzAtMTE0MTg1ZDY2NmQyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      photo_width: 2764,
      photo_height: 4096,
    },
    {
      '#TITLE': 'Ghostbusters: Frozen Empire',
      '#YEAR': 2024,
      '#IMDB_ID': 'tt21235248',
      '#RANK': 132,
      '#ACTORS': 'Mckenna Grace, Annie Potts',
      '#AKA': 'Ghostbusters: Frozen Empire (2024) ',
      '#IMDB_URL': 'https://imdb.com/title/tt21235248',
      '#IMDB_IV':
        'https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt21235248&rhash=77ed0696a538f4',
      '#IMG_POSTER':
        'https://m.media-amazon.com/images/M/MV5BNGE5MWJmZWYtN2ZlMi00ZjY1LTlhYTUtMzQ2Y2IxZWQyYTA2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      photo_width: 2024,
      photo_height: 3000,
    },
    {
      '#TITLE': 'Ghosts',
      '#YEAR': 2021,
      '#IMDB_ID': 'tt11379026',
      '#RANK': 136,
      '#ACTORS': 'Brandon Scott Jones, Danielle Pinnock',
      '#AKA': 'Ghosts (2021) ',
      '#IMDB_URL': 'https://imdb.com/title/tt11379026',
      '#IMDB_IV':
        'https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt11379026&rhash=77ed0696a538f4',
      '#IMG_POSTER':
        'https://m.media-amazon.com/images/M/MV5BMWFjY2Y1ZTQtODAzMC00NmE4LThlM2EtNjBmN2M1YzI5NTZhXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg',
      photo_width: 2072,
      photo_height: 3000,
    },
    {
      '#TITLE': 'G-Force',
      '#YEAR': 2009,
      '#IMDB_ID': 'tt0436339',
      '#RANK': 7253,
      '#ACTORS': 'Will Arnett, Penélope Cruz',
      '#AKA': 'G-Force (2009) ',
      '#IMDB_URL': 'https://imdb.com/title/tt0436339',
      '#IMDB_IV':
        'https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0436339&rhash=77ed0696a538f4',
      '#IMG_POSTER':
        'https://m.media-amazon.com/images/M/MV5BMTM4NTY3MzY2MV5BMl5BanBnXkFtZTcwMDQ1NTM2Mg@@._V1_.jpg',
      photo_width: 500,
      photo_height: 747,
    },
    {
      '#TITLE': 'Godzilla Minus One',
      '#YEAR': 2023,
      '#IMDB_ID': 'tt23289160',
      '#RANK': 237,
      '#ACTORS': 'Sakura Andô, Minami Hamabe',
      '#AKA': 'Godzilla Minus One (2023) ',
      '#IMDB_URL': 'https://imdb.com/title/tt23289160',
      '#IMDB_IV':
        'https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt23289160&rhash=77ed0696a538f4',
      '#IMG_POSTER':
        'https://m.media-amazon.com/images/M/MV5BOTI5MjNjMTMtN2NiNC00YjBlLTgzMWQtMGRhZDZkYmY1NGU2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg',
      photo_width: 1168,
      photo_height: 1731,
    },
  ];
  const loadFilterItems = () => {
    const newResult = items?.filter(
      item =>
        item['#TITLE'].toLowerCase().includes(term.toLowerCase()) ||
        item['#AKA'].toLowerCase().includes(term.toLowerCase()),
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
          <IText text={`${newItems?.length} Resultados encontrados`} />
        </View>
      )
    );
  };
  const ResultHeaderComponent = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          marginTop:0,
          marginBottom: 10,
        }}>
        <ITitle text={`Lista de resultados`} />
      </View>
    );
  };

  useEffect(() => {
    if (term == '') {
      setNewItems([]);
    } else {
      loadFilterItems();
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
            items={items}
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
