import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const Piece = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
  
        <Card>
          <Card.Title>SALON:</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://i.pinimg.com/564x/2d/2b/74/2d2b745d11dd061268cfe04e377f7c6e.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}></Text>
          <Button
           onPress={() => navigation.navigate('Salon')}
            color="red"
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 22,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              color:"red",
              backgroundColor:'#00D4C4'
            }}
            title="voir les infos"
          />
        </Card>

        <Card>
          <Card.Title>CHAMBRE PARENTALE:</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://i.pinimg.com/474x/4f/d6/0c/4fd60c49cb9655572156227d605c4bf2.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}></Text>
          <Button
  color="#00D4C4"
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 22,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              color:"red",
              backgroundColor:'#00D4C4'
            }}
            title="voir les infos"
          />
        </Card>


        <Card>
          <Card.Title>CHAMBRE MARGOT:</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://i.pinimg.com/564x/b9/07/69/b90769394f38dbf295f82c568b250fcd.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}></Text>
          <Button
  color="#00D4C4"
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 22,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              color:"red",
              backgroundColor:'#00D4C4'
            }}
            title="voir les infos"
          />
        </Card>

        <Card>
          <Card.Title>JARDIN:</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://i.pinimg.com/564x/53/ca/ae/53caae11aa6664af17cc86d6fe39061e.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}></Text>
          <Button
 
            color="red"
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 22,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              color:"red",
              backgroundColor:'#00D4C4'
            }}
            title="voir les infos"
          />
        </Card>

        

<Card>
          <Card.Title>GARAGE:</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://i.pinimg.com/564x/89/fa/92/89fa923fa34a5342ede60416812a40e7.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}></Text>
          <Button
  color="#00D4C4"
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 22,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              color:"red",
              backgroundColor:'#00D4C4'
            }}
            title="voir les infos"
          />
        </Card>











        
   

    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default Piece;



