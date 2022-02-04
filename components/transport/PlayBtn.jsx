import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import axios from 'axios';

export default function PlayBtn(props) {
  const { active } = props;
  const icon = active
    ? require('../../assets/transport/transport_play_on.png')
    : require('../../assets/transport/transport_play.png');

  function handlePress(event) {
    axios
      .get('/transport/play')
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
