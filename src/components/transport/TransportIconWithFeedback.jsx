import { Image, Pressable } from 'react-native';
import { useState } from 'react';
import Osc from 'react-native-osc';

export default function RecordBtn({ icon, osc, active }) {
  const [pressed, setPressed] = useState(false);
  // console.log(`${osc.address} component refreshed`);

  // set default icon
  let iconSrc = icon.inactive.default;

  // update icon depending on state
  if (active) iconSrc = pressed ? icon.active.pressed : icon.active.default;
  else iconSrc = pressed ? icon.inactive.pressed : icon.inactive.default;

  // handlers
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
