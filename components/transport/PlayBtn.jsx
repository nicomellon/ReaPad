import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Osc from 'react-native-osc';

export default function PlayBtn(props) {
  const { active } = props;
  const icon = active
    ? require('../../assets/transport/transport_play_on.png')
    : require('../../assets/transport/transport_play.png');

  const handlePress = () => Osc.sendMessage('/play', []);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image source={icon} />
    </TouchableWithoutFeedback>
  );
}
