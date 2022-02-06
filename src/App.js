import { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Transport from './components/transport/Transport';
import createOscConnection from './osc/CreateOscConnection';

export default function App() {
  useEffect(() => {
    createOscConnection();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Transport />
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
