import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setMovieSelected} from '../store/slices/movieSlice';
import { Movie } from '../services/types';

interface MovieItemProps {
  item: Movie;
  styleType: 'home' | 'search';
}

const MovieItem: React.FC<MovieItemProps> = ({item, styleType = 'home'}) => {
  const dispatch = useDispatch();
  const onPressHandler = () => {
    dispatch(setMovieSelected({movieSelected: item}));
    navigation.navigate('Details');
  };

  const navigation = useNavigation();

  const containerStyle =
    styleType === 'home'
      ? {backgroundColor: '#292929', color: '#ffffff'}
      : {backgroundColor: '#ffffff', color: '#292929'};

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
          uri: item.imgPoster || 'http://via.placeholder.com/60x90',
        }}
        width={60}
        height={90}
        style={{borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}
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
        <View style={{flexDirection: 'row'}}>
          <Text
            adjustsFontSizeToFit
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: containerStyle.color,
            }}>
            {`${item.title}`} {`| ${item.year}`}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: containerStyle.color,
            }}></Text>
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
            Rank #{item.rank}
          </Text>
          <Text
            style={{
              color: containerStyle.color,
              fontSize: 14,
              textAlign: 'right',
              marginRight: 0,
            }}>
            ID: {item.imdbId}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;
