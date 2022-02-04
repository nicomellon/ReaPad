import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import axios from 'axios';

export default function StopBtn(props) {
  const icon = require('../../assets/transport/transport_stop.png');

  function handlePress(event) {
    axios
      .get('/transport/stop')
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
