import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import HomeBtn from './HomeBtn';
import EndBtn from './EndBtn';
import RecordBtn from './RecordBtn';
import PlayBtn from './PlayBtn';
import RepeatBtn from './RepeatBtn';
import StopBtn from './StopBtn';
import PauseBtn from './PauseBtn';

export default function Transport() {
  const [transportState, setTransportState] = useState({
    recording: false,
    playing: false,
    repeat: false,
    paused: false,
  });

  return (
    <View style={styles.container}>
      <HomeBtn />
      <EndBtn />
      <RecordBtn active={transportState.recording} />
      <PlayBtn active={transportState.playing} />
      <RepeatBtn active={transportState.repeat} />
      <StopBtn />
      <PauseBtn active={transportState.paused} />
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
