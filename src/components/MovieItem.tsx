import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MovieItemProps {
  item: any;
  styleType: 'home' | 'search';
}

const MovieItem: React.FC<MovieItemProps> = ({ item, styleType }) => {
  const onPressHandler = () => {
    console.log(item);
  };

  const containerStyle =
    styleType === 'home'
      ? { backgroundColor: '#292929', color: '#ffffff' }
      : { backgroundColor: '#ffffff', color: '#292929' };

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={{
        width: '100%',
        ...containerStyle,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 5,
        borderRadius: 10,
        zIndex: -5,
      }}>
      <Image
        source={{
          uri: item['#IMG_POSTER'],
        }}
        width={60}
        height={90}
        style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'column',
          marginHorizontal: 10,
          height: 80,
          width: '100%',
          flex: 1,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            adjustsFontSizeToFit
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: containerStyle.color,
            }}>
            {`${item['#TITLE']}`} {`| ${item['#YEAR']}`}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: containerStyle.color }}></Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: containerStyle.color,
              fontSize: 14,
              textAlign: 'right',
              marginRight: 0,
            }}>
            Rank #{item['#RANK']}
          </Text>
          <Text
            style={{
              color: containerStyle.color,
              fontSize: 14,
              textAlign: 'right',
              marginRight: 0,
            }}>
            ID: {item['#IMDB_ID']}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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

export default MovieItem;
