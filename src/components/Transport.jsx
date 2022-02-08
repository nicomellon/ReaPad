import { useState } from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import Osc from 'react-native-osc';
import * as icons from '../assets/transport/icons.js';

function TransportIcon({ icon, osc }) {
  const [pressed, setPressed] = useState(false);

  // set icon depending on state of UI
  const iconSrc = pressed ? icon.pressed : icon.default;

  // handlers
  const handlePressIn = () => setPressed(true);

  const handlePressOut = () => {
    Osc.sendMessage(osc.address, osc.args);
    setPressed(false);
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Image source={iconSrc} />
    </Pressable>
  );
}

function TransportIconWithFeedback({ icon, osc, active }) {
  const [pressed, setPressed] = useState(false);
  // console.log(`component ${osc.address} rendered`);

  // set default icon
  let iconSrc = icon.inactive.default;

  // update icon depending on state
  if (active) iconSrc = pressed ? icon.active.pressed : icon.active.default;
  else iconSrc = pressed ? icon.inactive.pressed : icon.inactive.default;

  // handlers
  const handlePressIn = () => setPressed(true);

  const handlePressOut = () => {
    Osc.sendMessage(osc.address, osc.args);
    setPressed(false);
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Image source={iconSrc} />
    </Pressable>
  );
}

export default function Transport() {
  const state = useSelector((state) => state.transport);

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
        active={state['/record'][0] === 1}
      />

      {/* play button */}
      <TransportIconWithFeedback
        icon={icons.play}
        osc={{ address: '/play', args: [] }}
        active={state['/play'][0] === 1 || state['/pause'][0] === 1}
      />

      {/* repeat button */}
      <TransportIconWithFeedback
        icon={icons.repeat}
        osc={{ address: '/repeat', args: [] }}
        active={state['/repeat'][0] === 1}
      />

      {/* stop button */}
      <TransportIcon icon={icons.stop} osc={{ address: '/stop', args: [] }} />

      {/* pause button */}
      <TransportIconWithFeedback
        icon={icons.pause}
        osc={{ address: '/pause', args: [] }}
        active={state['/pause'][0] === 1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
