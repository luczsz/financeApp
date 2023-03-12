import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Modal, TextInput } from 'react-native';

import { styled, styles } from './style';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const [add, setAdd] = useState(false);
  const [md2, setMd2] = useState(false);
  
 return (
   <SafeAreaView style={ styles.container} >
    
          <View style={styles.header}>
            <Text style={styles.title} >Inicio</Text>

            <View style={styles.btsnContainer} >

              <TouchableOpacity 
                style={styles.aBnt}
                onPress={ () => setAdd(true) }
              >
                <Feather name="plus" size={24} color="#0A1033" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.aBnt}
              >
                <Feather name="edit-3" size={24} color="#0A1033" />
              </TouchableOpacity>


            </View>

          </View>
          
          <View style={styles.content} >
            <Text>CONTEUDO</Text>
          </View>

       {/*  ADICIONAR */}
        <Modal
          visible={add}
          onRequestClose={ () => setAdd(false)}
          animationType="fade"
          >
            <View style={styled.modalContainer} >
              
              <View style={styled.modalHeader} >
                <TouchableOpacity
                  onPress={ () => setAdd(false)}
                >
                    <Feather name="arrow-left-circle" size={30} color="#0A1033" />
                </TouchableOpacity>


                <Text style={styles.title} >Adicionar</Text>
              </View>

              <View style={styled.modalContent} >

                <View style={styled.modalInputContent} >

                  <Text style={styled.modalTitle}>
                    Nome da despesa : 
                  </Text>
                  <TextInput
                    style={styled.modalInput}
                    placeholder='Ex: Janta'
                  />
                  
                  <Text style={styled.modalTitle}>
                    Valor: 
                  </Text>
                  <TextInput
                    style={styled.modalInput}
                    placeholder='Ex:12,00'
                  />
                  
                  <Text style={styled.modalTitle}>
                    Data: 
                  </Text>
                  <TextInput
                    style={styled.modalInput}
                    placeholder='Ex: 17 de outubro'
                  />

                  
                </View>

                <View style={styled.modalBntsContent} >
                  <TouchableOpacity
                    style={styled.modalAddBnt}
                  >
                      <Text style={styles.title} >
                        A D I C I O N A R
                      </Text>
                  </TouchableOpacity>
                </View>

              </View>

            </View>

        </Modal>


   </SafeAreaView>
  );
}