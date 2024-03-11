import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IText, ITitle} from '../../components/Text';
import {useMovieDetails} from '../../hooks/useMovieDetails';
import LoadingScreen from '../Loading';
import {useSelector} from 'react-redux';
import {selectLoadingDetailsMovies} from '../../store/slices/movieSlice';
import IButton from '../../components/Button';
import {useAuth} from '../../hooks/useAuth';

const DetailsScreen: React.FC = props => {
  const {container} = styles;
  const {width, height} = Dimensions.get('window');
  const {SignOutEvent} = useAuth();
  const movieDetails = useMovieDetails();
  const loading = useSelector(selectLoadingDetailsMovies);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  const {imageUrl, year} = movieDetails?.item;
  const {name, actors, description, duration, genres, keywords, rating} =
    movieDetails?.details;

  const handleSignout = async () => {
    setButtonLoading(true);
    await SignOutEvent();
    setTimeout(() => {
      setButtonLoading(false);
    }, 3000);
  };

  return (
    <>
      <View style={container}>
        <ImageBackground
          source={{uri: imageUrl ?? 'http://via.placeholder.com/2000x2000'}}
          resizeMode="cover"
          style={{
            width: width,
            height: height / 2,
            flex: 1,
          }}>
          <LinearGradient
            colors={['transparent', 'rgba(25,25,25,1)']}
            style={{
              height: height / 2,
            }}
          />
        </ImageBackground>

        <ScrollView
          style={{
            flex: 1,
            marginHorizontal: 20,
            marginBottom: 40,
          }}>
          {name && (
            <View style={{flexDirection: 'row'}}>
              <ITitle text={`${name}`} color="white" size={40} />
            </View>
          )}
          <View
            style={{
              flex: 1,
              marginTop: 20,
            }}>
            {loading ? (
              <LoadingScreen oposite />
            ) : (
              <>
                <View style={{marginTop: 20, flexDirection: 'row'}}>
                  {year && (
                    <IText
                      text={year}
                      color="grey"
                      size={18}
                      adjustsFontSizeToFit
                    />
                  )}
                  {rating && (
                    <IText
                      text={` | Rating: ${rating}`}
                      color="grey"
                      size={18}
                      adjustsFontSizeToFit
                    />
                  )}
                  {duration && (
                    <IText
                      text={` | Duration: ${duration
                        .split('PT')[1]
                        .toLowerCase()}`}
                      color="grey"
                      size={18}
                      adjustsFontSizeToFit
                    />
                  )}
                </View>
                {genres && genres?.length > 0 && (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'flex-end',
                    }}>
                    {genres?.length > 0 && (
                      // <View
                      //   style={{
                      //     paddingHorizontal: 5,
                      //     marginRight: 10,
                      //     paddingVertical: 5,
                      //     borderRadius: 5,
                      //     borderWidth: 0.5,
                      //     borderColor: 'grey',
                      //   }}>
                      <IText text={genres} color="grey" size={14} />
                      // </View>
                    )}
                  </View>
                )}
                {actors.length > 0 && (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 20,
                      alignItems: 'flex-end',
                    }}>
                    {actors.length > 0 &&
                      actors?.map(actor => {
                        return (
                          actor && (
                            <View
                              style={{
                                paddingHorizontal: 5,
                                marginRight: 10,
                                paddingVertical: 5,
                                borderRadius: 5,
                                borderWidth: 0.5,
                                borderColor: 'grey',
                              }}>
                              <IText text={actor} color="white" size={14} />
                            </View>
                          )
                        );
                      })}
                  </View>
                )}
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 30,
                  }}>
                  <IText text={'Description: '} color="white" />
                  {description && (
                    <View style={{marginVertical: 5}}>
                      <IText
                        text={description}
                        color="grey"
                        size={14}
                        adjustsFontSizeToFit
                      />
                    </View>
                  )}
                </View>
                <View style={{marginTop: 20}}>
                  <IText text={'Keywords '} color="white" />
                  {keywords && (
                    <View
                      style={{
                        flexDirection: 'row',
                        marginVertical: 5,
                      }}>
                      <IText
                        text={keywords}
                        style={{
                          flex: 1,
                          flexWrap: 'wrap',
                          color: 'grey',
                          fontSize: 15,
                        }}
                        adjustsFontSizeToFit
                      />
                    </View>
                  )}
                </View>
                <IButton
                  secondary={'secondary'}
                  loading={buttonLoading}
                  onPress={handleSignout}>
                  <IText
                    text={'Sign out'}
                    style={{
                      width: '100%',
                      color: 'white',
                      fontSize: 20,
                      textAlign: 'center',
                    }}
                  />
                </IButton>
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 500,
    flexDirection: 'column',
    backgroundColor: '#191919',
  },
});

export default DetailsScreen;
