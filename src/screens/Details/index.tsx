import React, {useState} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IText, ITitle} from '../../components/Text';
import {useMovieDetails} from '../../hooks/useMovieDetails';
import LoadingScreen from '../Loading';
import {useSelector} from 'react-redux';
import {selectLoadingDetailsMovies} from '../../store/slices/movieSlice';
import IButton from '../../components/Button';
import {useAuth} from '../../hooks/useAuth';
import useDimension from '../../hooks/useSize';

const {width, height} = useDimension;
const DetailsScreen: React.FC = () => {
  const {
    container,
    actorContainer,
    actorsSection,
    contentView,
    descriptionContainer,
    descriptionView,
    firstSection,
    genresSection,
    imgBackground,
    keywordContainer,
    keywordView,
    keywordViewText,
    linearGradient,
    nameContainer,
    scrollViewContainer,
    signOutText,
  } = styles;

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
          style={imgBackground}>
          <LinearGradient
            colors={['transparent', 'rgba(25,25,25,1)']}
            style={linearGradient}
          />
        </ImageBackground>

        <ScrollView style={scrollViewContainer}>
          {name && (
            <View style={nameContainer}>
              <ITitle text={`${name}`} color="white" size={40} />
            </View>
          )}
          <View style={contentView}>
            {loading ? (
              <LoadingScreen oposite />
            ) : (
              <>
                <View style={firstSection}>
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
                  <View style={genresSection}>
                    {genres?.length > 0 && (
                      <IText text={genres} color="grey" size={14} />
                    )}
                  </View>
                )}
                {actors.length > 0 && (
                  <View style={actorsSection}>
                    {actors.length > 0 &&
                      actors?.map(actor => {
                        return (
                          actor && (
                            <View key={actor} style={actorContainer}>
                              <IText text={actor} color="white" size={14} />
                            </View>
                          )
                        );
                      })}
                  </View>
                )}
                <View style={descriptionView}>
                  <IText text={'Description: '} color="white" />
                  {description && (
                    <View style={descriptionContainer}>
                      <IText
                        text={description}
                        color="grey"
                        size={14}
                        adjustsFontSizeToFit
                      />
                    </View>
                  )}
                </View>
                <View style={keywordContainer}>
                  <IText text={'Keywords '} color="white" />
                  {keywords && (
                    <View style={keywordView}>
                      <IText
                        text={keywords}
                        style={keywordViewText}
                        adjustsFontSizeToFit
                      />
                    </View>
                  )}
                </View>
                <IButton
                  secondary={'secondary'}
                  loading={buttonLoading}
                  onPress={handleSignout}>
                  <IText text={'Sign out'} style={signOutText} />
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
  imgBackground: {
    width: width,
    height: height / 2,
    flex: 1,
  },
  linearGradient: {
    height: height / 2,
  },
  scrollViewContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  nameContainer: {flexDirection: 'row'},
  contentView: {
    flex: 1,
    marginTop: 20,
  },
  firstSection: {marginTop: 20, flexDirection: 'row'},
  genresSection: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'flex-end',
  },
  actorsSection: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-end',
  },
  actorContainer: {
    paddingHorizontal: 5,
    marginRight: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  descriptionContainer: {marginVertical: 5},
  descriptionView: {
    flexDirection: 'column',
    marginTop: 30,
  },
  keywordContainer: {marginTop: 20},
  keywordView: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  keywordViewText: {
    flex: 1,
    flexWrap: 'wrap',
    color: 'grey',
    fontSize: 15,
  },
  signOutText: {
    width: '100%',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default DetailsScreen;
