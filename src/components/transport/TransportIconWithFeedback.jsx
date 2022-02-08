import { Image, Pressable } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Osc from 'react-native-osc';

const selectState = (state) => state['/record'];

export default function RecordBtn({ icon, osc }) {
  const active = useSelector(selectState);
  const [pressed, setPressed] = useState(false);

  let iconSrc;

  if (active[0] === 0)
    iconSrc = pressed
      ? require('../../assets/transport/pressed/transport_record.png')
      : require('../../assets/transport/default/transport_record.png');
  else
    iconSrc = pressed
      ? require('../../assets/transport/pressed/transport_record_on.png')
      : require('../../assets/transport/default/transport_record_on.png');

  const handlePressIn = () => setPressed(true);

  const handlePressOut = () => {
    Osc.sendMessage(osc.address, osc.args);
    setPressed(false);
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Image source={iconSrc} />
    </Pressable>
  );
}
