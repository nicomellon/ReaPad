import { Image, Pressable } from 'react-native';
import { useState } from 'react';
import Osc from 'react-native-osc';

export default function EndBtn() {
  const [pressed, setPressed] = useState(false);

  const icon = pressed
    ? require('../../assets/transport/pressed/transport_end.png')
    : require('../../assets/transport/default/transport_end.png');

  const handlePressIn = () => setPressed(true);

  const handlePressOut = () => {
    Osc.sendMessage('/action', [40043]);
    setPressed(false);
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Image source={icon} />
    </Pressable>
  );
}
