import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './styles';
import buracoNegro from '../../assets/galaxias1.png';
import iconeGalaxias from '../../assets/icon-galaxy.png';
import iconeHome from '../../assets/icon-home.png';

export default function TelaBuraco(props) {
 return (
   <View style={styles.container}>
    <Text style={styles.title}>Buraco Negro</Text>
    <Text style={styles.description}>Buraco negro é uma região do espaço-tempo em que o campo gravitacional
    é tão intenso que nada pode escapar dela. A teoria da relatividade geral prevê que uma massa suficientemente
    compacta pode deformar o espaço-tempo para formar um buraco negro.</Text>
    <Image style={styles.img} source={buracoNegro}/>
    <Pressable style={styles.btn} onPress={()=>{ props.navigation.navigate('Galáxias') }}>
        <Image style={styles.icon} source={iconeGalaxias}/>
        <Text style={styles.btnLabel}>Galáxias</Text>
      </Pressable>

      <Pressable style={styles.btn} onPress={()=>{ props.navigation.navigate('Tela Inicial') }}>
        <Image style={styles.icon} source={iconeHome}/>
        <Text style={styles.btnLabel}>Início</Text>
      </Pressable>
   </View>
  );
}