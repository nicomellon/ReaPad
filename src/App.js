import { StyleSheet, SafeAreaView } from 'react-native';
import { ReaperProviderWrapper } from './context/reaper.context';
import Transport from './components/transport/Transport';
import CreateOscConnection from './components/osc/CreateOscConnection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ReaperProviderWrapper>
        <CreateOscConnection />
        <Transport />
      </ReaperProviderWrapper>
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
