import axios from 'axios';
import { StyleSheet, View } from 'react-native';
import Transport from './components/transport/Transport';

axios.defaults.baseURL = 'http://192.168.1.57:8080';

export default function App() {
  return (
    <View style={styles.container}>
      <Transport />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
