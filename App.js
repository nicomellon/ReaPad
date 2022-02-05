import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Osc from 'react-native-osc';
import Transport from './components/transport/Transport';

//OSC server IP address and port
const address = '192.168.1.136';
const portOut = 9090;

export default function App() {
  useEffect(() => {
    Osc.createClient(address, portOut);
  }, []);

  return (
    <View style={styles.container}>
      <Transport />
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
