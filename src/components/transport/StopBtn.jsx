import { Image, Pressable } from 'react-native';
import { useState } from 'react';
import Osc from 'react-native-osc';

export default function StopBtn() {
  const [pressed, setPressed] = useState(false);

  const icon = pressed
    ? require('../../assets/transport/pressed/transport_stop.png')
    : require('../../assets/transport/default/transport_stop.png');

  const handlePressIn = () => setPressed(true);

  const handlePressOut = () => {
    Osc.sendMessage('/stop', []);
    setPressed(false);
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Image source={icon} />
    </Pressable>
  );
}
