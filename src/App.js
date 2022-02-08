import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/store';
import createOscConnection from './app/osc';
import Transport from './features/transport/Transport';

export default function App() {
  useEffect(() => {
    createOscConnection();
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Transport />
      </View>
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
