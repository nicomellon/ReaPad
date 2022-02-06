import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Osc from 'react-native-osc';

export default function EndBtn(props) {
  const icon = require('../../assets/transport/default/transport_end.png');

  const handlePress = () => Osc.sendMessage('/action', [40043]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image source={icon} />
    </TouchableWithoutFeedback>
  );
}
