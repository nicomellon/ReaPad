import { NativeEventEmitter } from 'react-native';
import Osc from 'react-native-osc';
import { store } from './store';
import { setTransport } from '../features/transport/transportSlice';
import { setMaster } from '../features/mixer/mixerSlice';

//OSC server IP address and port
const SEND_ADDRESS = 'localhost';
const SEND_PORT = 8000;
const LISTEN_PORT = 9000;

export default function createOscConnection() {
  //create an event emiter sending the native osc module as parameter
  const eventEmitter = new NativeEventEmitter(Osc);

  //subscribe to GotMessage event to receive OSC messages
  eventEmitter.addListener('GotMessage', (oscMessage) => {
    // console.log(oscMessage.address.startsWith('/master'));
    switch (oscMessage.address) {
      case '/play':
      case '/pause':
      case '/record':
      case '/repeat':
        store.dispatch(setTransport(oscMessage));
        break;
      case '/master/volume':
      case '/master/pan':
      case '/master/vu':
      case '/master/L':
      case '/master/R':
        store.dispatch(setMaster(oscMessage));
        break;
      default:
        break;
    }
  });

  //create the client & server
  Osc.createClient(SEND_ADDRESS, SEND_PORT);
  Osc.createServer(LISTEN_PORT);
}
