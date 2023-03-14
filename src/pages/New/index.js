import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

export default function Adicionar({ data }) {
 return (
   <View style={styles.container} >
        <Text> {data.despesa} </Text>
        
        <View style={styles.nowView} >
          <Text> R$ {data.valor} </Text>
          <Text> {data.data} </Text>
        </View>
   </View>
  );
}