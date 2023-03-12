import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.secondary100,
        
    },
    header:{
        flexDirection: 'row',
        height: 60,
        marginTop: 31,
        backgroundColor: theme.colors.secondary30,

        paddingStart: 14,
        paddingEnd: 14,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title:{
        color: theme.colors.secondary90,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    content:{
        flex: 1,
        //backgroundColor: '#DDD',
    },


    //Botões
    btsnContainer:{
        flexDirection: 'row',
    },
    aBnt:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44,
        margin: 5,
    },
});

export const styled = StyleSheet.create({
    //GERAL
    modalHeader:{
        height: 60,
        backgroundColor: theme.colors.secondary30,
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'space-between',

        paddingStart: 14,
        paddingEnd: 14,
    },
    modalContent:{
        flex:1,
        backgroundColor: theme.colors.secondary40,
        marginTop: 20,
    },
    modalTitle:{
        color: theme.colors.teste3,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        margin: 5,
    },
    modalInputContent:{
        flex: 1,
        //backgroundColor: '#DDD',
        paddingStart: 14,
        paddingEnd: 14,
    },
    modalBntsContent:{
        height: 80,
        //backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalInput:{
        height: 60,
        padding: 12,
        borderRadius: 12,
        backgroundColor: theme.colors.heading
    },

   
   
    //ADICIONAR
    modalContainer:{
        flex: 1,
        backgroundColor: theme.colors.secondary40,
        
    },
    modalAddBnt:{
        width: '80%',
        height: 50,
        backgroundColor: theme.colors.secondary30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },

    //EDITAR
    modal2:{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    }
})