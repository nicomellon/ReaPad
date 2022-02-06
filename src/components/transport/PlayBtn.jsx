import { Image, Pressable } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Osc from 'react-native-osc';

const playState = (state) => state['/play'];
const pauseState = (state) => state['/pause'];

export default function PlayBtn() {
  const playing = useSelector(playState);
  const paused = useSelector(pauseState);
  const [pressed, setPressed] = useState(false);

  console.log({ playing, paused });

  let icon;

  if (playing[0] === 1 || paused[0] === 1)
    icon = pressed
      ? require('../../assets/transport/pressed/transport_play_on.png')
      : require('../../assets/transport/default/transport_play_on.png');
  else
    icon = pressed
      ? require('../../assets/transport/pressed/transport_play.png')
      : require('../../assets/transport/default/transport_play.png');

  const handlePressIn = () => setPressed(true);

  const handlePressOut = () => {
    Osc.sendMessage('/play', []);
    setPressed(false);
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Image source={icon} />
    </Pressable>
  );
}
