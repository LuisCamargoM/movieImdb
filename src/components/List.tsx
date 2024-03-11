import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLoadingMovies} from '../store/slices/movieSlice';
import LoadingScreen from '../screens/Loading';

interface MovieListProps {
  RenderItem: React.FC<{item: any}>;
  items: any[];
  HeaderComponent?: React.ReactNode;
  type: 'home' | 'search';
}

const MovieList: React.FC<MovieListProps> = ({
  items,
  RenderItem,
  HeaderComponent,
  type,
}) => {
  const loading = useSelector(selectLoadingMovies);
  if (loading) return <LoadingScreen />;
  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => item}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <RenderItem item={item} styleType={type ?? 'search'} />
      )}
      ListHeaderComponent={HeaderComponent}
    />
  );
};

export default MovieList;
