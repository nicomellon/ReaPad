import { NativeEventEmitter } from 'react-native';
import Osc from 'react-native-osc';
import { store } from './store';
import {
  setPlaying,
  setPaused,
  setRecording,
  setRepeat,
} from '../features/transport/transportSlice';

//OSC server IP address and port
const SEND_ADDRESS = 'localhost';
const SEND_PORT = 8000;
const LISTEN_PORT = 9000;

export default function createOscConnection() {
  //create an event emiter sending the native osc module as parameter
  const eventEmitter = new NativeEventEmitter(Osc);

  //subscribe to GotMessage event to receive OSC messages
  eventEmitter.addListener('GotMessage', (oscMessage) => {
    switch (oscMessage.address) {
      case '/play':
        store.dispatch(setPlaying(oscMessage.data));
        break;
      case '/pause':
        store.dispatch(setPaused(oscMessage.data));
        break;
      case '/record':
        store.dispatch(setRecording(oscMessage.data));
        break;
      case '/repeat':
        store.dispatch(setRepeat(oscMessage.data));
        break;
      default:
        break;
    }
  });

  //create the client & server
  Osc.createClient(SEND_ADDRESS, SEND_PORT);
  Osc.createServer(LISTEN_PORT);
}
