import { NativeEventEmitter } from 'react-native';
import Osc from 'react-native-osc';
import * as config from './config';
import store from '../redux/store';
import { setState } from '../redux/transportSlice';

export default function createOscConnection() {
  //create an event emiter sending the native osc module as parameter
  const eventEmitter = new NativeEventEmitter(Osc);

  //subscribe to GotMessage event to receive OSC messages
  eventEmitter.addListener('GotMessage', (oscMessage) => {
    store.dispatch(setState(oscMessage));
  });

  //create the client & server
  Osc.createClient(config.SEND_ADDRESS, config.SEND_PORT);
  Osc.createServer(config.LISTEN_PORT);
}
