import { NativeEventEmitter } from 'react-native';
import Osc from 'react-native-osc';
import * as config from './config';
import store from '../redux/store';
import * as actions from '../redux/actionTypes';

export default function createOscConnection() {
  //create an event emiter sending the native osc module as parameter
  const eventEmitter = new NativeEventEmitter(Osc);

  //subscribe to GotMessage event to receive OSC messages
  eventEmitter.addListener('GotMessage', (oscMessage) => {
    const { address, data } = oscMessage;
    store.dispatch({
      type: actions.OSC_MSG,
      payload: {
        address,
        data,
      },
    });
  });

  //create the client & server
  Osc.createClient(config.SEND_ADDRESS, config.SEND_PORT);
  Osc.createServer(config.LISTEN_PORT);
}
