import { useEffect } from 'react';
import { StyleSheet, View, NativeEventEmitter } from 'react-native';
import Osc from 'react-native-osc';
import { TransportProviderWrapper } from './context/transport.context';
import Transport from './components/transport/Transport';

//OSC server IP address and port
const SEND_ADDRESS = '192.168.1.57';
const SEND_PORT = 8000;
const LISTEN_PORT = 9000;

export default function App() {
  useEffect(() => {
    //create an event emiter sending the native osc module as parameter
    const eventEmitter = new NativeEventEmitter(Osc);

    //subscribe to GotMessage event to receive OSC messages
    eventEmitter.addListener('GotMessage', (oscMessage) =>
      console.log(oscMessage)
    );

    //create the client & server
    Osc.createClient(SEND_ADDRESS, SEND_PORT);
    Osc.createServer(LISTEN_PORT);
  }, []);

  return (
    <View style={styles.container}>
      <TransportProviderWrapper>
        <Transport />
      </TransportProviderWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
