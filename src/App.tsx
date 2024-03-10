import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './navigation/AppNavigator';
import {AuthProvider} from './context/Auth';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {container} = styles;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SafeAreaView style={[container, backgroundStyle]}>
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
