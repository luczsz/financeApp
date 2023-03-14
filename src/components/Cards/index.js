import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './style';

export default function Cards() {
 return (
   <View style={ styles.container } >
          
          

    <ScrollView horizontal 
      style={{ height: 140, paddingEnd: 8,    }}
    >

            <View style={[styles.cardGeral, styles.cardReceitas]}>
                <Text>
                    GERAL
                </Text>
            </View>

            <View style={[styles.cardDespesas, styles.cardGeral]}>
              <Text>
                  DESPESAS
              </Text>
            </View>
            
    </ScrollView>

        

   </View>
  );
}