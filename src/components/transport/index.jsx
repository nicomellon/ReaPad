import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import TransportIcon from './TransportIcon';
import TransportIconWithFeedback from './TransportIconWithFeedback';
import * as icons from './icons.js';

export default function Transport() {
  const state = useSelector((state) => state.transport);
  // console.log(state);

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
        icon={icons.record}
        osc={{ address: '/record', args: [] }}
        // active={state['/record'][0] === 1}
      />

      {/* play button */}
      <TransportIconWithFeedback
        icon={icons.play}
        osc={{ address: '/play', args: [] }}
        // active={state['/play'][0] === 1 || state['/pause'][0] === 1}
      />

      {/* repeat button */}
      <TransportIconWithFeedback
        icon={icons.repeat}
        osc={{ address: '/repeat', args: [] }}
        // active={state['/repeat'][0] === 1}
      />

      {/* stop button */}
      <TransportIcon icon={icons.stop} osc={{ address: '/stop', args: [] }} />

      {/* pause button */}
      <TransportIconWithFeedback
        icon={icons.pause}
        osc={{ address: '/pause', args: [] }}
        // active={state['/pause'][0] === 1}
      />
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
