import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './styles';
import imgFundo from '../../assets/fundo-tela-inicial.png';

export default function TelaInicial(props) {
 return (
  <View style={styles.container}>
    <Image style={styles.img} source={imgFundo} />

    <Text style={styles.title}>Conheça um pouco sobre o universo</Text>
    <Text style={styles.description}>Toque nos botões abaixo e conheça um pouco mais sobre o que existe no céu.</Text>

    <View style={styles.boxBotoes}>
      <Pressable style={styles.btn} onPress={()=>{ props.navigation.navigate('Planetas') }}>
        <Text style={styles.btnLabel}>Planetas</Text>
      </Pressable>

      <Pressable style={styles.btn} onPress={()=>{ props.navigation.navigate('Galáxias') }}>
        <Text style={styles.btnLabel}>Galáxias</Text>
      </Pressable>

      <Pressable style={styles.btn} onPress={()=>{ props.navigation.navigate('Buraco Negro') }}>
        <Text style={styles.btnLabel}>Buraco Negro</Text>
      </Pressable>
    </View>
  </View>
  );
}