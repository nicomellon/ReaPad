import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Osc from 'react-native-osc';

export default function HomeBtn(props) {
  const icon = require('../../assets/transport/transport_home.png');

  const handlePress = () => Osc.sendMessage('/action', [40042]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image source={icon} />
    </TouchableWithoutFeedback>
  );
}
