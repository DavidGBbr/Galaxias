import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#121212',
    },

    img:{
        width:320,
        height:200,
        marginBottom:20
    },

    title:{
        fontSize:26,
        marginBottom:5,
        color:'#cf9556',
    },

    description:{
        color:'#b2b2b2',
        width:320,
        marginHorizontal:25,
        marginBottom:10,
    },

    boxBotoes:{
        flexDirection:'row',
    },

    btn:{
        backgroundColor:'#cf9556',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:5,
        paddingHorizontal:15,
        margin:5,
        borderRadius:20,
    },

    btnLabel:{
        fontWeight:'bold',
        textAlign:'center',
        color:'#252535'
    }
});

export default styles;