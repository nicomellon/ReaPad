import { View, StyleSheet } from 'react-native';
import RecordBtn from './RecordBtn';
import PlayBtn from './PlayBtn';
import RepeatBtn from './RepeatBtn';
import PauseBtn from './PauseBtn';
import TransportIcon from './TransportIcon';
import TransportIconWithFeedback from './TransportIconWithFeedback';
import * as icons from './icons.js';

export default function Transport() {
  return (
    <View style={styles.container}>
      {/* home button */}
      <TransportIcon
        icon={icons.home}
        osc={{ address: '/action', args: [40042] }}
      />

      {/* end button */}
      <TransportIcon
        icon={icons.end}
        osc={{ address: '/action', args: [40043] }}
      />

      {/* record button */}
      <TransportIconWithFeedback
        icon={icons.stop}
        osc={{ address: '/record', args: [] }}
        active={false}
      />
      <RecordBtn />

      {/* play button */}
      <PlayBtn />

      {/* repeat button */}
      <RepeatBtn />

      {/* stop button */}
      <TransportIcon icon={icons.stop} osc={{ address: '/stop', args: [] }} />

      {/* pause button */}
      <PauseBtn />
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
