import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

export default function TasksList({data}) {
 return (
   <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.6} 
   >
        <Text> {data.despesa} </Text>

        <View style={styles.nowView} >
            <Text> {data.valor} </Text>
            <Text> {data.data} </Text>
        </View>
   </TouchableOpacity>
  );
}