import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const HelloScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          paddingHorizontal: 64,
          paddingVertical: 10,
          backgroundColor: 'lightblue',
          borderRadius: 8,
        }}>
        <Text style={{color: 'white'}}>"Go to Login"</Text>
      </TouchableOpacity>
    </View>
  );
};

export {HelloScreen};
