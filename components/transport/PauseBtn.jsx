import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Osc from 'react-native-osc';

export default function PauseBtn(props) {
  const { active } = props;
  const icon = active
    ? require('../../assets/transport/transport_pause_on.png')
    : require('../../assets/transport/transport_pause.png');

  const handlePress = () => Osc.sendMessage('/pause', []);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image source={icon} />
    </TouchableWithoutFeedback>
  );
}
