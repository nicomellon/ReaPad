import React, { useContext } from 'react';
import { ReaperContext } from '../../context/reaper.context';
import { NativeEventEmitter } from 'react-native';
import Osc from 'react-native-osc';

export default function CreateOscConnection() {
  const { value, setValue } = useContext(ReaperContext);

  //OSC server IP address and port
  const SEND_ADDRESS = '192.168.1.57';
  const SEND_PORT = 8000;
  const LISTEN_PORT = 9000;

  //create an event emiter sending the native osc module as parameter
  const eventEmitter = new NativeEventEmitter(Osc);

  //subscribe to GotMessage event to receive OSC messages
  eventEmitter.addListener('GotMessage', (oscMessage) => {
    const { address, data } = oscMessage;
    console.group('oscMessage ->');
    console.log('address: ', address);
    console.log('data: ', data);
    console.groupEnd();
  });

  //create the client & server
  Osc.createClient(SEND_ADDRESS, SEND_PORT);
  Osc.createServer(LISTEN_PORT);

  // return invisible component
  return <></>;
}
