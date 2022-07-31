import React from 'react';
import { ScrollView, View, Image, Text, Pressable } from 'react-native';
import styles from './styles';
import iconeHome from '../../assets/icon-home.png';
import iconeGalaxias from '../../assets/icon-galaxy.png';
import imgPlanetas from '../../assets/planetas.png';
import imgPlanetas1 from '../../assets/planetas1.png';
import imgPlanetas3 from '../../assets/planeta-terra.png';


export default function TelaPlanetas(props) {
 return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.title}>Planetas</Text>
        <Text style={styles.description}>Os planetas do Sistema Solar são corpos celestes que orbitam o Sol com massa
        suficiente para que a sua própria gravidade possibilita que assumam uma forma arredondada, ou seja, a forma de 
        equilíbrio estático.</Text>
        <Image source={imgPlanetas1} style={ styles.cardImg }/>

        <Text style={styles.description}>Os planetas do nosso Sistema Solar formam um conjunto de oito planetas que giram 
        em torno do sol. Eles são: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.</Text>
        <Image source={imgPlanetas} style={ styles.cardImg }/>

        <Text style={styles.description}>A Terra é o terceiro planeta a contar do Sol e o quinto maior do Sistema Solar. 
        Até onde se sabe o planeta em que vivemos é o único do nosso sistema solar em condições de abrigar vida da forma 
        como a conhecemos.</Text>
        <Image source={imgPlanetas3} style={ styles.cardImg }/>

        <Pressable style={styles.btn} onPress={()=>{ props.navigation.navigate('Galáxias') }}>
          <Image style={styles.icon} source={iconeGalaxias}/>
          <Text style={styles.btnLabel}>Galáxias</Text>
        </Pressable>

        <Pressable style={styles.btn} onPress={()=>{ props.navigation.navigate('Tela Inicial') }}>
          <Image style={styles.icon} source={iconeHome}/>
          <Text style={styles.btnLabel}>Início</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}