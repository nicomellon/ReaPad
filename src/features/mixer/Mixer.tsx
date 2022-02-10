import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import Osc from 'react-native-osc';
import * as icons from '../../assets/mixer/mixerIcons';
import { useAppSelector } from '../../app/hooks';

const Fader = ({
  trackNum,
  volume,
  VU,
}: {
  trackNum: number;
  volume: number;
  VU: number;
}) => {
  const handleValueChange = (e: number) => {
    Osc.sendMessage(`/track/${trackNum}/volume`, [e]);
  };

  return (
    <>
      <Slider
        style={styles.fader}
        thumbTintColor="#FF000000"
        minimumValue={0}
        maximumValue={1}
        step={0.001}
        value={VU}
        minimumTrackTintColor="green"
        maximumTrackTintColor="#000000"
      />
      <Slider
        style={styles.fader}
        thumbImage={icons.volThumb}
        minimumValue={0}
        maximumValue={1}
        step={0.001}
        value={volume}
        onValueChange={handleValueChange}
        minimumTrackTintColor="#FF000000"
        maximumTrackTintColor="#FF000000"
      />
    </>
  );
};

const ReaperToggleIcon = ({
  trackNum,
  icon,
  oscAction,
  active,
}: {
  trackNum: number;
  icon: {
    inactive: { default: number; pressed: number };
    active: { default: number; pressed: number };
  };
  oscAction: string;
  active: boolean;
}) => {
  const [pressed, setPressed] = useState(false);
  const oscArg = active ? 0 : 1;

  // update icon depending on state
  let iconSrc = icon.inactive.default;
  if (active) iconSrc = pressed ? icon.active.pressed : icon.active.default;
  else iconSrc = pressed ? icon.inactive.pressed : icon.inactive.default;

  // handlers
  const handlePressIn = () => setPressed(true);

  const handlePressOut = () => {
    Osc.sendMessage(`/track/${trackNum}/${oscAction}`, [oscArg]);
    setPressed(false);
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Image source={iconSrc} />
    </Pressable>
  );
};

const MasterChannelStrip = ({ trackNum }: { trackNum: number }) => {
  const state = useAppSelector((state) => state.mixer);
  console.log(state);

  return (
    <View style={styles.master}>
      <View style={styles.masterHeader}></View>
      <View style={styles.faderDiv}>
        <Fader
          trackNum={trackNum}
          volume={state.master['/master/volume']}
          VU={state.master['/master/vu']}
        />
      </View>
      <View style={styles.muteSolo}>
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
      <View style={styles.masterFooter}>
        <Text>MASTER</Text>
      </View>
    </View>
  );
};

const ChannelStrip = ({ trackNum }: { trackNum: number }) => {
  return (
    <View style={styles.channel}>
      <View style={styles.trackHeader}></View>
      <View style={styles.faderDiv}>
        <Fader trackNum={trackNum} volume={0.716} />
      </View>
      <View style={styles.muteSolo}>
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
      <View style={styles.trackFooter}>
        <Text>Track {trackNum}</Text>
      </View>
    </View>
  );
};

const Mixer = () => {
  return (
    <View style={styles.container}>
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
    // maxWidth: 400,
    flex: 10,
    flexDirection: 'row',
    // minHeight: 450,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fader: {
    transform: [{ rotate: '-90deg' }],
    position: 'absolute',
    minWidth: 400,
  },
  masterHeader: {
    flex: 3,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackHeader: {
    flex: 3,
    backgroundColor: '#ABB1B1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  muteSolo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  trackFooter: {
    flex: 1,
    backgroundColor: '#ABB1B1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  masterFooter: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Mixer;
