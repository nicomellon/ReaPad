import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Osc from 'react-native-osc';

export default function RepeatBtn(props) {
  const { active } = props;
  const icon = active
    ? require('../../assets/transport/default/transport_repeat_on.png')
    : require('../../assets/transport/default/transport_repeat_off.png');

  const handlePress = () => Osc.sendMessage('/repeat', []);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image source={icon} />
    </TouchableWithoutFeedback>
  );
}
