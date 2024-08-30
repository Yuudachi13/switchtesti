import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  return (
    <View style={styles.container}>
    <View style={styles.fields}>
      <Text>Enable</Text>
      <Switch
       trackColor={{false: 'red', true: 'blue'}}
       thumbColor={isEnabled ? 'green' : 'purple'}
       ios_backgroundColor="black"
       value={isEnabled}
       onValueChange={toggleSwitch}
      />
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  fields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  }
});
