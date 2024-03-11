import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IText, ITitle} from '../../components/Text';
const DetailsScreen: React.FC = props => {
  const {container} = styles;
  const {item} = props.route.params;
  const {width, height} = Dimensions.get('window');
  const description =
    'Nove famílias nobres lutam pelo controle sobre as terras míticas de Westeros, enquanto um antigo inimigo retorna depois de estar adormecido por milhares de anos.';
  const actors = item.actors.split(',');
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
              //   top: -height / 3.8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <ITitle text={`${item.title}`} color="white" size={40} />
            </View>
            <View style={{marginLeft: 5, marginTop: 10}}>
              <IText
                text={item.year}
                color="grey"
                size={18}
                adjustsFontSizeToFit
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 20,
                alignItems: 'flex-end',
              }}>
              {actors?.map(actor => {
                return (
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
                );
              })}
            </View>
            <View style={{flexDirection: 'column', marginVertical: 20}}>
              <IText text={'Description: '} color="white" />

              <IText
                text={description}
                color="grey"
                size={14}
                adjustsFontSizeToFit
              />
            </View>
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
