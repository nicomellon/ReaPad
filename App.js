import axios from 'axios';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
} from 'react-native';

axios.defaults.baseURL = 'http://192.168.1.57:8080';

export default function App() {
  function handlePress(event) {
    axios
      .get('/')
      .then((response) =>
        console.log(
          response.request._method,
          response.request.responseURL,
          response.status
        )
      )
      .catch((err) => console.log(err));
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Image
          style={styles.ui}
          source={require('./assets/transport/gen_play.png')}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui: {
    width: 48,
    height: 48,
  },
});
