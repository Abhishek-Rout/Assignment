import { StatusBar, StyleSheet, View } from 'react-native';
import OtpScreen from './src/screen/OtpScreen';
function App() {
  const isDarkMode = true;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <OtpScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
