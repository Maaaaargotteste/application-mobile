import React, { useState } from 'react';
import { View, Text, Image, Switch, StyleSheet, TouchableOpacity } from 'react-native';
// import { launchCamera } from 'react-native-image-picker';

const Salon = () => {
  const [photo, setPhoto] = useState(null);
  const [lightsOn, setLightsOn] = useState(false);
  const [shutterOpen, setShutterOpen] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const handleLightToggle = () => {
    setLightsOn(previousState => !previousState);
  };

  const handleShutterToggle = () => {
    setShutterOpen(previousState => !previousState);
  };

  const handleCameraToggle = () => {
    setCameraOn(previousState => !previousState);
  };

  const handleMusicToggle = () => {
    setMusicOn(previousState => !previousState);
  };

  const handleTakePhoto = () => {
    // launchCamera({}, response => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else {
    //     setPhoto(response.uri);
    //   }
    // });
  };

  return (
    <View style={styles.container}>
         <Image source={{ uri:'https://i.pinimg.com/564x/2d/2b/74/2d2b745d11dd061268cfe04e377f7c6e.jpg' }} style={styles.image} />

      <View style={styles.controls}>
        <Text>Lumières</Text>
        <Switch value={lightsOn} onValueChange={handleLightToggle} />
      </View>
      <View style={styles.controls}>
        <Text>Volets</Text>
        <Switch value={shutterOpen} onValueChange={handleShutterToggle} />
      </View>
      <View style={styles.controls}>
        <Text>Caméra</Text>
        <Switch value={cameraOn} onValueChange={handleCameraToggle} />
      </View>
      <View style={styles.controls}>
        <Text>Musique</Text>
        <Switch value={musicOn} onValueChange={handleMusicToggle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10,
  },
});

export default Salon;
