import React from 'react';
import {FlatList, View} from 'react-native';

interface MovieListProps {
  RenderItem: React.FC<{item: any}>;
  items: any[];
  HeaderComponent?: React.ReactNode;
  type: 'home' | 'search';
}

const MovieList: React.FC<MovieListProps> = ({
  RenderItem,
  items,
  HeaderComponent,
  type,
}) => {
  return (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <RenderItem item={item} styleType={type ?? 'search'} />
      )}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={() => <View style={{paddingVertical: 10}} />}
    />
  );
};

export default MovieList;
