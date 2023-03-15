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
                <Text style={styles.texts} >Receitas</Text>
                <Text style={styles.texts} >
                    RECEITA: R$ 19,00
                </Text>
            </View>

            <View style={[styles.cardGeral, styles.cardDespesas]}>
            <Text style={styles.texts} >Gastos</Text>
                <Text style={styles.texts} >
                    Gasto: R$ 19,00
                </Text>
            </View>
            
    </ScrollView>

        

   </View>
  );
}