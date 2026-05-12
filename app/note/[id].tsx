import {View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';


export default function NoteDetailScreen(){
    const {id,tittle} = useLocalSearchParams();
    

    return (
        <View style={styles.container} >
            <Text style={styles.tittle}>{tittle}</Text>
            <Text style={styles.text}>ID: {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },

    tittle:{
        fontSize:28,
        fontWeight:'bold',
        marginBottom:20,
    },

    text:{
        fontSize:18,
        color: "#f59e0b",
    },
})