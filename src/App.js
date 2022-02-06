import { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Transport from './components/transport/Transport';

import createOscConnection from './osc/CreateOscConnection';

import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  useEffect(() => {
    createOscConnection();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Transport />
      </SafeAreaView>
    </Provider>
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
