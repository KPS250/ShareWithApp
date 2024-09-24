import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

function App(props: any): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>{JSON.stringify(props)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
