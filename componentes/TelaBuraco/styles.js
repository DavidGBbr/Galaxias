import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#121212',
        padding:20,
    },

    title:{
        fontSize:26,
        marginBottom:15,
        color:'#cf9556',
        fontWeight:'bold',
    },

    description:{
        color:'#b2b2b2',
        width:320,
        marginHorizontal:25,
        marginBottom:25,
    },

    img:{
        width:320,
        height:200,
        borderRadius:10,
        marginBottom:40,
    },

    btn:{
        backgroundColor:'#cf9556',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:5,
        marginBottom:10,
        borderRadius:25,
        flexDirection:'row',
        width:200,
    },

    icon:{
        height:25,
        width:25,
    },

    btnLabel:{
        fontWeight:'bold',
        textAlign:'center',
        color:'#252535',
        paddingLeft:5
    }
});

export default styles;