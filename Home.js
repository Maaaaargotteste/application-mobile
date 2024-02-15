import React from 'react';
import {ImageBackground, StyleSheet, Image, View, TouchableOpacity,Text} from 'react-native';


const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('MoreInfo');
  };
 
  
  return (
    <View style={styles.container}>
      <Image
        source={require('./logo-domotique-bleu.png')}
        style={styles.logo}
      />

<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}
>
   <Text style={styles.buttonText}>c'est parti</Text>
</TouchableOpacity>
    </View>

  

  );

  

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#00D4C4',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#fff',
    width:150
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    
    
  }
  
});

export default Home;
