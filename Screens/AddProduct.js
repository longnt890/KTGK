// AddProductScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const AddProduct = ({navigation }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');


  const productsRef = firestore().collection('product');

  async function handleAddProduct(){
    // Create a reference to the Firestore collection
    
    // Add a new document with product data
    await productsRef
      .add({
        name: productName,
        price: productPrice,
      })
      .then(() => {
        console.log('Product added successfully!');
        // Navigate back to the "Product List" screen
        navigation.navigate('HomeScreen');
      })
      .catch((error) => {
        console.error('Error adding product: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Service name *</Text>
      <TextInput
        placeholder="Input a service name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Price *</Text>
      <TextInput
        keyboardType="numeric"
        value={productPrice}
        onChangeText={(text) => setProductPrice(text)}
        placeholder="0"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight:'bold',
    color: 'black'
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: '#D8D9DA',
  },
  button: {
    backgroundColor: '#DA0C81',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    fontWeight: 40
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});