import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setMovieSelected} from '../store/slices/movieSlice';
import {Movie} from '../services/types';

interface MovieItemProps {
  item: Movie;
  styleType: 'home' | 'search';
}

const MovieItem: React.FC<MovieItemProps> = ({item, styleType = 'home'}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const containerStyle =
    styleType === 'home'
      ? {backgroundColor: '#292929', color: '#ffffff'}
      : {backgroundColor: '#ffffff', color: '#292929'};

  const {
    container,
    imgContainer,
    itemsContainer,
    titleNYearText,
    rankNIDText,
    rankText,
    idText,
  } = styles(containerStyle);
  const onPressHandler = () => {
    dispatch(setMovieSelected({movieSelected: item}));
    navigation.navigate('Details');
  };

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[containerStyle, , container]}>
      <Image
        source={{
          uri: item.imgPoster || 'http://via.placeholder.com/60x90',
        }}
        width={60}
        height={90}
        style={imgContainer}
      />
      <View style={itemsContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text adjustsFontSizeToFit style={titleNYearText}>
            {`${item.title}`} {`| ${item.year}`}
          </Text>
        </View>
        <View style={rankNIDText}>
          <Text style={rankText}>Rank #{item.rank}</Text>
          <Text style={idText}>ID: {item.imdbId}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = containerStyle =>
  StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 5,
      borderRadius: 10,
      zIndex: -5,
    },
    imgContainer: {borderTopLeftRadius: 10, borderBottomLeftRadius: 10},
    itemsContainer: {
      justifyContent: 'space-between',
      flexDirection: 'column',
      marginHorizontal: 10,
      height: 80,
      width: '100%',
      flex: 1,
    },
    titleNYearText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: containerStyle.color,
    },
    rankNIDText: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    rankText: {
      color: containerStyle.color,
      fontSize: 14,
      textAlign: 'right',
      marginRight: 0,
    },
    idText: {
      color: containerStyle.color,
      fontSize: 14,
      textAlign: 'right',
      marginRight: 0,
    },
  });
export default MovieItem;
