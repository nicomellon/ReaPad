import { View, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { TransportContext } from '../../context/transport.context';
import HomeBtn from './HomeBtn';
import EndBtn from './EndBtn';
import RecordBtn from './RecordBtn';
import PlayBtn from './PlayBtn';
import RepeatBtn from './RepeatBtn';
import StopBtn from './StopBtn';
import PauseBtn from './PauseBtn';

export default function Transport() {
  const transport = useContext(TransportContext);
  console.log('ransctx', transport);

  return (
    <View style={styles.container}>
      <HomeBtn />
      <EndBtn />
      <RecordBtn active={transport.recording} />
      <PlayBtn active={transport.playing} />
      <RepeatBtn active={transport.repeat} />
      <StopBtn />
      <PauseBtn active={transport.paused} />
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
