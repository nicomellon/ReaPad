import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Osc from 'react-native-osc';

export default function StopBtn(props) {
  const icon = require('../../assets/transport/default/transport_stop.png');

  const handlePress = () => Osc.sendMessage('/stop', []);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image source={icon} />
    </TouchableWithoutFeedback>
  );
}
