import { Image, Pressable } from 'react-native';
import { useState } from 'react';
import Osc from 'react-native-osc';

export default function TransportIcon({ icon, osc }) {
  const [pressed, setPressed] = useState(false);

  // set icon depending on state of UI
  const iconSrc = pressed ? icon.pressed : icon.default;

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
