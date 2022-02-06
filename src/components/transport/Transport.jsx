import { View, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { ReaperContext } from '../../context/reaper.context';
import HomeBtn from './HomeBtn';
import EndBtn from './EndBtn';
import RecordBtn from './RecordBtn';
import PlayBtn from './PlayBtn';
import RepeatBtn from './RepeatBtn';
import StopBtn from './StopBtn';
import PauseBtn from './PauseBtn';

export default function Transport() {
  const { value } = useContext(ReaperContext);
  console.log('ransctx', value);

  return (
    <View style={styles.container}>
      <HomeBtn />
      <EndBtn />
      <RecordBtn active={value.recording} />
      <PlayBtn active={value.playing} />
      <RepeatBtn active={value.repeat} />
      <StopBtn />
      <PauseBtn active={value.paused} />
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
