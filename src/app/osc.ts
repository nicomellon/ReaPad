import { NativeEventEmitter } from 'react-native';
import Osc from 'react-native-osc';
import { store } from './store';
import { setTransport } from '../features/transport/transportSlice';
import { setMaster, setTrack } from '../features/mixer/mixerSlice';

//OSC server IP address and port
const SEND_ADDRESS = 'localhost';
const SEND_PORT = 8000;
const LISTEN_PORT = 9000;

export default function createOscConnection() {
  //create an event emiter sending the native osc module as parameter
  const eventEmitter = new NativeEventEmitter(Osc);

  //subscribe to GotMessage event to receive OSC messages
  eventEmitter.addListener('GotMessage', (oscMessage) => {
    switch (true) {
      case ['/play', '/pause', '/record', '/repeat'].includes(
        oscMessage.address
      ):
        store.dispatch(setTransport(oscMessage));
        break;
      case oscMessage.address.startsWith('/master'):
        store.dispatch(setMaster(oscMessage));
        break;
      case /track\/([0-9])*\/.*/.test(oscMessage.address):
        const stripPrefix = oscMessage.address.slice(7);
        const trackNum = stripPrefix.split('/')[0];

        oscMessage.data.unshift(trackNum);

        store.dispatch(setTrack(oscMessage));
        break;
      default:
        break;
    }
  });

  //create the client & server
  Osc.createClient(SEND_ADDRESS, SEND_PORT);
  Osc.createServer(LISTEN_PORT);
}
