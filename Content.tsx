import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {useOvermind} from './overmind';

export default function() {
  const {state, actions} = useOvermind();
  return (
    <View>
      <Button title="Increment" onPress={() => actions.increment(1)}></Button>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            padding: 8,
            textAlign: 'center',
          }}>
          {state.counter.toString()}
        </Text>
      </View>
      <Button title="Decrement" onPress={() => actions.decrement(1)}></Button>
    </View>
  );
}
