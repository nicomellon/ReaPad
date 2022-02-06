import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Osc from 'react-native-osc';

export default function RecordBtn(props) {
  const { active } = props;
  const icon = active
    ? require('../../assets/transport/transport_record_on.png')
    : require('../../assets/transport/transport_record.png');

  const handlePress = () => Osc.sendMessage('/record', []);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image source={icon} />
    </TouchableWithoutFeedback>
  );
}
