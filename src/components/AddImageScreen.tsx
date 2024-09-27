import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddImageScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);

  const openCamera = () => {
    const options = { mediaType: 'photo', saveToPhotos: true };
    launchCamera(options, (response) => {
      if (!response.didCancel && !response.errorCode) {
        setImage(response.assets[0]);
        setModalVisible(false); // Close modal after taking the picture
      }
    });
  };

  const openGallery = () => {
    const options = { mediaType: 'photo' };
    launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.errorCode) {
        setImage(response.assets[0]);
        setModalVisible(false); // Close modal after selecting from gallery
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <MaterialCommunityIcons name="plus-circle" size={50} color="green" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose an option</Text>
            <TouchableOpacity onPress={openCamera} style={styles.button}>
              <Text style={styles.buttonText}>Take a Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openGallery} style={styles.button}>
              <Text style={styles.buttonText}>Add from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {image && (
        <View style={styles.imageContainer}>
          <Text>Selected Image:</Text>
          <Image source={{ uri: image.uri }} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

export default AddImageScreen;
