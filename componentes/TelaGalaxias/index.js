import React from 'react';
import { ScrollView, View, Image, Text, Pressable } from 'react-native';
import styles from './styles';
import iconePlanetas from '../../assets/icon-planet.png';
import iconeBuraco from '../../assets/icon-buraco-negro.png';
import iconeHome from '../../assets/icon-home.png';
import imgGalaxias1 from '../../assets/galaxias1.png';
import imgGalaxias2 from '../../assets/galaxias2.png';

export default function TelaGalaxias(props) {
 return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Galáxias</Text>

        <Text style={styles.description}>Na cosmologia, uma galáxia é um grande sistema, gravitacionalmente
         ligado, que consiste de estrelas, remanescentes de estrelas, um meio interestelar de gás e poeira, 
         e um, importante mas insuficientemente conhecido, componente apelidado de matéria escura.</Text>
        <Image source={imgGalaxias1} style={styles.cardImg}/>

        <Text style={styles.description}>A Via Láctea é uma galáxia espiral, da qual o Sistema Solar faz parte. 
        Vista da Terra, aparece como uma faixa brilhante e difusa que circunda toda a esfera celeste, recortada 
        por nuvens moleculares que lhe conferem um intrincado aspecto irregular e recortado.</Text>
        <Image source={imgGalaxias2} style={styles.cardImg}/>

        <Pressable style={styles.btn} onPress={()=>{ props.navigation.navigate('Planetas') }}>
          <Image style={styles.icon} source={iconePlanetas}/>
          <Text style={styles.btnLabel}>Planetas</Text>
        </Pressable>

        <Pressable style={styles.btn} onPress={()=>{ props.navigation.navigate('Buraco Negro') }}>
          <Image style={styles.icon} source={iconeBuraco}/>
          <Text style={styles.btnLabel}>Buraco Negro</Text>
        </Pressable>

        <Pressable style={styles.btn} onPress={()=>{ props.navigation.navigate('Tela Inicial') }}>
          <Image style={styles.icon} source={iconeHome}/>
          <Text style={styles.btnLabel}>Início</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}