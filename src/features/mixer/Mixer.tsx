import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import Osc from 'react-native-osc';
import * as icons from '../../assets/mixer/icons';

const Fader = ({ trackNum }) => {
  const [value, setValue] = useState(0.716);

  const handleValueChange = (e: number) => {
    Osc.sendMessage(`/track/${trackNum}/volume`, [e]);
  };

  return (
    <Slider
      style={styles.fader}
      thumbImage={icons.volThumb}
      minimumValue={0}
      maximumValue={1}
      step={0.001}
      value={value}
      onValueChange={handleValueChange}
      minimumTrackTintColor="#000000"
      maximumTrackTintColor="#000000"
    />
  );
};

const ReaperToggleIcon = ({ trackNum, icon, oscAction, active }) => {
  const [pressed, setPressed] = useState(false);
  const oscValue = active ? 0 : 1;

  // set default icon
  let iconSrc = icon.inactive.default;

  // update icon depending on state
  if (active) iconSrc = pressed ? icon.active.pressed : icon.active.default;
  else iconSrc = pressed ? icon.inactive.pressed : icon.inactive.default;

  // handlers
  const handlePressIn = () => setPressed(true);

  const handlePressOut = () => {
    Osc.sendMessage(`/track/${trackNum}/${oscAction}`, [oscValue]);
    setPressed(false);
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Image source={iconSrc} />
    </Pressable>
  );
};

const MasterChannelStrip = ({ trackNum }) => {
  return (
    <View style={styles.master}>
      <View style={styles.darkGrey}>
        <Text>Hi</Text>
      </View>
      <View style={styles.column}>
        <View style={styles.faderDiv}>
          <Fader trackNum={trackNum} />
        </View>
        <View style={styles.row}>
          <ReaperToggleIcon
            trackNum={trackNum}
            icon={icons.mute}
            oscAction={'mute'}
            active={false}
          />
          <ReaperToggleIcon
            trackNum={trackNum}
            icon={icons.solo}
            oscAction={'solo'}
            active={false}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.darkGrey}>
          <Text>MASTER</Text>
        </View>
      </View>
    </View>
  );
};

const ChannelStrip = ({ trackNum }) => {
  return (
    <View style={styles.channel}>
      <View style={styles.grey}>
        <Text>Hi</Text>
      </View>
      <View style={styles.column}>
        <View style={styles.faderDiv}>
          <Fader trackNum={trackNum} />
        </View>
        <View style={styles.row}>
          <ReaperToggleIcon
            trackNum={trackNum}
            icon={icons.mute}
            oscAction={'mute'}
            active={false}
          />
          <ReaperToggleIcon
            trackNum={trackNum}
            icon={icons.solo}
            oscAction={'solo'}
            active={false}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.grey}>
          <Text>Track {trackNum}</Text>
        </View>
      </View>
    </View>
  );
};

const Mixer = () => {
  return (
    <View style={styles.mixer}>
      <MasterChannelStrip trackNum={0} />
      <ChannelStrip trackNum={1} />
      <ChannelStrip trackNum={2} />
      <ChannelStrip trackNum={3} />
      <ChannelStrip trackNum={4} />
      <ChannelStrip trackNum={5} />
      <ChannelStrip trackNum={6} />
      <ChannelStrip trackNum={7} />
      <ChannelStrip trackNum={8} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mixer: {
    flex: 9,
    flexDirection: 'row',
    backgroundColor: '#333333',
  },
  master: {
    flex: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  channel: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  faderDiv: {
    maxWidth: 100,
    minHeight: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fader: {
    transform: [{ rotate: '-90deg' }],
    minWidth: 400,
    height: 100,
  },
  column: {
    flexDirection: 'column',
    backgroundColor: '#222222',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grey: {
    flex: 1,
    backgroundColor: '#ABB1B1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkGrey: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Mixer;
