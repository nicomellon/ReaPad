import { View, StyleSheet } from 'react-native';
import HomeBtn from './HomeBtn';
import EndBtn from './EndBtn';
import RecordBtn from './RecordBtn';
import PlayBtn from './PlayBtn';
import RepeatBtn from './RepeatBtn';
import StopBtn from './StopBtn';
import PauseBtn from './PauseBtn';

export default function Transport() {
  return (
    <View style={styles.container}>
      <HomeBtn />
      <EndBtn />
      <RecordBtn active={false} />
      <PlayBtn active={false} />
      <RepeatBtn active={false} />
      <StopBtn />
      <PauseBtn active={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
