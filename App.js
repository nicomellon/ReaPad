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
    console.log('hi');
    axios
      .get('/')
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Image style={styles.play} source={require('./assets/gen_play.png')} />
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
  play: {
    width: 72,
    height: 24,
  },
});
