import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

export default function HomeBtn(props) {
  const icon = require('../../assets/transport/transport_home.png');

  function handlePress(event) {
    axios
      .get('/')
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
