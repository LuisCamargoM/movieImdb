import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IText, ITitle} from '../../components/Text';
import {getMovieDetails} from '../../services/api';
import {Details} from '../../services/types';
const DetailsScreen: React.FC = props => {
  const {container} = styles;
  const {item} = props.route.params;
  const {width, height} = Dimensions.get('window');
  const [details, setDetails] = useState<Details>();

  const actors = item?.actors.split(',');

  const fetchMovieDetails = async () => {
    const result = await getMovieDetails(item?.imdbId);
    setDetails(result.details);
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);
  return (
    <>
      <View style={container}>
        <ImageBackground
          source={{uri: item.imgPoster}}
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
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            //
          }}>
          <ScrollView
            style={{
              flex: 1,
              marginHorizontal: 20,
            }}>
            {details?.name && (
              <View style={{flexDirection: 'row'}}>
                <ITitle text={`${details?.name}`} color="white" size={40} />
              </View>
            )}
            <View style={{marginTop: 15, flexDirection: 'row'}}>
              {item?.year && (
                <IText
                  text={item.year}
                  color="grey"
                  size={18}
                  adjustsFontSizeToFit
                />
              )}
              {details?.rating && (
                <IText
                  text={` | Rating: ${details.rating}`}
                  color="grey"
                  size={18}
                  adjustsFontSizeToFit
                />
              )}
              {details?.duration && (
                <IText
                  text={` | Duration: ${details?.duration
                    .split('PT')[1]
                    .toLowerCase()}`}
                  color="grey"
                  size={18}
                  adjustsFontSizeToFit
                />
              )}
            </View>
            {actors.length > 0 && (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
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
                          <IText text={actor} color="grey" size={14} />
                        </View>
                      )
                    );
                  })}
              </View>
            )}
            <View
              style={{
                flexDirection: 'column',
                marginVertical: 30,
              }}>
              <IText text={'Description: '} color="white" />
              {details?.description && (
                <View style={{marginVertical: 5}}>
                  <IText
                    text={details?.description}
                    color="grey"
                    size={14}
                    adjustsFontSizeToFit
                  />
                </View>
              )}
            </View>
            <IText text={'Keywords '} color="white" />
            {details?.keywords && (
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <IText
                  text={details?.keywords}
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
          </ScrollView>
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
    height: 500,
    flexDirection: 'column',
    backgroundColor: '#191919',
  },
});

export default DetailsScreen;
