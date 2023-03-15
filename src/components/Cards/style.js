import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        //backgroundColor: '#DDD',
        height: 150,
        marginTop: 10,
        paddingStart: 3,
        paddingEnd: 3,
        //borderRadius: 12,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardGeral:{
       width: 290,
       height: 135,
       marginLeft: 10,
       alignItems:'center',
       justifyContent: 'center',
       borderRadius: 12,
    },

    cardDespesas:{
        backgroundColor: theme.colors.primary,
        paddingStart: 12,
        alignItems: 'flex-start',
    },
    cardReceitas:{
        backgroundColor: theme.colors.on,
        paddingStart: 12,
        alignItems: 'flex-start',
    },

    texts:{
        color: theme.colors.teste3,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

})