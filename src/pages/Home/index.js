import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Modal, TextInput, FlatList } from 'react-native';

import { styled, styles } from './style';
import { Feather } from '@expo/vector-icons';
import Adicionar from '../New';


import { useNavigation } from '@react-navigation/native';

import * as SQLite from 'expo-sqlite';

function OpenDB(){
  const db = SQLite.openDatabase("fianceDB");
  return db;
}

const db = OpenDB();

export default function Home() {
  const navigation = useNavigation();

  const [add, setAdd] = useState(false);
  const [md2, setMd2] = useState(false);

  const [despesa, setDespesa] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [tasks, setTasks] = useState([]);

  const [id, setId] = useState(0);

  db.transaction( (tx) => {
    tx.executeSql(
      "create table if not exists tasks (id integer primary key, despesa TEXT, valor TEXT, data TEXT)"
    );
  });

  useEffect( () => {
    function verificar(){

      db.transaction( (tx) => {
        tx.executeSql(
          "SELECT * FROM tasks",
          [],
          (tx, results) => {
            var len = results.rows.length;
            if(len > 0){
              console.log('existem:' + results.rows.length + 'registros');
              setId( results.rows.length);
            }
            else{
              console.log('Sem registros');
              console.log(results);
            }
          }
        )
      })
    }

    function listar(){
        db.transaction( (tx) => {
          tx.executeSql(
            "SELECT * FROM tasks",
            [],
            (_,{rows}) => {
              setTasks([]);

              rows._array.forEach( (childItem) => {
                let list = {
                  id: childItem.id,
                  despesa: childItem.despesa,
                  valor: childItem.valor,
                  data: childItem.data,
                }
                setTasks(oldArray => [...oldArray, list])
              })
            }
          )
        })
    }
    listar();
    verificar();
  }, []);

  function Listar(){
    db.transaction( (tx) => {
      tx.executeSql(
        "SELECT * FROM tasks",
        [],
        (_,{rows}) => {
          setTasks([]);

          rows._array.forEach( (childItem) => {
            let list = {
              id: childItem.id,
              despesa: childItem.despesa,
              valor: childItem.valor,
              data: childItem.data,
            }
            setTasks(oldArray => [...oldArray, list])
          })
        }
      )
    })
  }

  function registrar(){
    setId(id + 1);

    db.transaction( (tx) => {
      tx.executeSql(
        "INSERT INTO tasks (id, despesa, valor, data) values (?, ?, ?, ?);", [id, despesa, valor, data]
      )
    },
    (Error) => {
      console.log(Error.message);
      setDespesa('');
      setValor('');
      setData('');
      setAdd(false);
      Listar();
    },
    () => {
      console.log('Certo');
      setDespesa('');
      setValor('');
      setData('');
      setAdd(false);
      Listar();
    }
    
    )

  }
  
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
            <View style={styles.listContainer} >
              <FlatList
                data={tasks}
                keyExtractor={ (item) => item.id}
                renderItem={ ({item}) => <Adicionar data={item} /> }
              />
            </View>
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
                    value={despesa}
                    onChangeText={ (text) => setDespesa(text)}
                  />
                  
                  <Text style={styled.modalTitle}>
                    Valor: 
                  </Text>
                  <TextInput
                    style={styled.modalInput}
                    placeholder='Ex:12,00'
                    value={valor}
                    onChangeText={ (text) => setValor(text)}
                  />
                  
                  <Text style={styled.modalTitle}>
                    Data: 
                  </Text>
                  <TextInput
                    style={styled.modalInput}
                    placeholder='Ex: 17 de outubro'
                    value={data}
                    onChangeText={ (text) => setData(text)}
                  />

                  
                </View>

                <View style={styled.modalBntsContent} >
                  <TouchableOpacity
                    style={styled.modalAddBnt}
                    onPress={ () => registrar()}
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