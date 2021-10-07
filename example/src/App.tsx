import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import CodersCamera from 'react-native-coders-camera';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    setTimeout(() => {
      CodersCamera.openCamera().then(setResult);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
