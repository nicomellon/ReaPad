import { Image, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import Osc from 'react-native-osc';

const selectState = (state) => state['/play'];

export default function PlayBtn() {
  const active = useSelector(selectState);

  const icon = active[0]
    ? require('../../assets/transport/transport_play_on.png')
    : require('../../assets/transport/transport_play.png');

  const handlePress = () => Osc.sendMessage('/play', []);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image source={icon} />
    </TouchableWithoutFeedback>
  );
}
