import { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { TransportProviderWrapper } from './context/transport.context';
import Transport from './components/transport/Transport';
import createOscConnection from './osc/osc';

export default function App() {
  useEffect(() => {
    createOscConnection();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TransportProviderWrapper>
        <Transport />
      </TransportProviderWrapper>
    </SafeAreaView>
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
