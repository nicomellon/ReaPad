import { Image, Pressable } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Osc from 'react-native-osc';

const selectState = (state) => state['/repeat'];

export default function RepeatBtn() {
  const active = useSelector(selectState);
  const [pressed, setPressed] = useState(false);

  let icon;

  if (active[0] === 0)
    icon = pressed
      ? require('../../assets/transport/pressed/transport_repeat_off.png')
      : require('../../assets/transport/default/transport_repeat_off.png');
  else
    icon = pressed
      ? require('../../assets/transport/pressed/transport_repeat_on.png')
      : require('../../assets/transport/default/transport_repeat_on.png');

  const handlePressIn = () => setPressed(true);

  const handlePressOut = () => {
    Osc.sendMessage('/repeat', []);
    setPressed(false);
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Image source={icon} />
    </Pressable>
  );
}
