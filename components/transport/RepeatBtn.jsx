import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import axios from 'axios';

export default function RepeatBtn(props) {
  const { active } = props;
  const icon = active
    ? require('../../assets/transport/transport_repeat_on.png')
    : require('../../assets/transport/transport_repeat_off.png');

  function handlePress(event) {
    axios
      .get('/transport/repeat')
      .then((response) =>
        console.log(
          response.request._method,
          response.request.responseURL,
          response.status
        )
      )
      .catch((err) => console.log(err));
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image source={icon} />
    </TouchableWithoutFeedback>
  );
}
