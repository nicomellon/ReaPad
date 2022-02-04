import { Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

export default function PauseBtn(props) {
  const { active } = props;
  const icon = active
    ? require('../../assets/transport/transport_pause_on.png')
    : require('../../assets/transport/transport_pause.png');

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
