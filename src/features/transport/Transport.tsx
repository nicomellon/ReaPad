import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useAppSelector } from '../../app/hooks';
import * as icons from '../../assets/transport/icons.js';
import { useState } from 'react';
import Osc from 'react-native-osc';

export function ReaperIcon({
  icon,
  osc,
}: {
  icon: { default: number; pressed: number };
  osc: { address: string; args: any[] };
}) {
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

export function ReaperIconWithFeedback({
  icon,
  osc,
  active,
}: {
  icon: {
    inactive: { default: number; pressed: number };
    active: { default: number; pressed: number };
  };
  osc: { address: string; args: any[] };
  active: boolean;
}) {
  const [pressed, setPressed] = useState(false);

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
  const state = useAppSelector((state) => state.transport);

  return (
    <View style={styles.container}>
      {/* home button */}
      <ReaperIcon
        icon={icons.home}
        osc={{ address: '/action', args: [40042] }}
      />

      {/* end button */}
      <ReaperIcon
        icon={icons.end}
        osc={{ address: '/action', args: [40043] }}
      />

      {/* record button */}
      <ReaperIconWithFeedback
        icon={icons.record}
        osc={{ address: '/record', args: [] }}
        active={state['/record']}
      />

      {/* play button */}
      <ReaperIconWithFeedback
        icon={icons.play}
        osc={{ address: '/play', args: [] }}
        active={state['/play'] || state['/pause']}
      />

      {/* repeat button */}
      <ReaperIconWithFeedback
        icon={icons.repeat}
        osc={{ address: '/repeat', args: [] }}
        active={state['/repeat']}
      />

      {/* stop button */}
      <ReaperIcon icon={icons.stop} osc={{ address: '/stop', args: [] }} />

      {/* pause button */}
      <ReaperIconWithFeedback
        icon={icons.pause}
        osc={{ address: '/pause', args: [] }}
        active={state['/pause']}
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
