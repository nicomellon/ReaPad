import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
} from 'react-native';

export default function App() {
  console.log(require('./assets/gen_play.png'));

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => console.log('image tapped')}>
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
