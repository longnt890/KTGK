// ProductListScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Product from './Product';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

export const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Create a reference to the Firestore collection
    const productsRef = firestore().collection('product');

    // Subscribe to changes in the products collection
    const unsubscribe = productsRef.onSnapshot((querySnapshot) => {
      const updatedProducts = [];

      querySnapshot.forEach((doc) => {
        const { name, price } = doc.data();
        updatedProducts.push({
          id: doc.id,
          name,
          price,
        });
      });

      setProducts(updatedProducts);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleAddProduct = () => {
    // Navigate to the "Add Product" screen
    navigation.navigate('AddProduct');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Danh sách dịch vụ</Text>
        <TouchableOpacity 
          style={styles.fab}
          onPress={() => {
            navigation.navigate('AddProduct');
          }}
        >
          <Icon name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.itemContainer}
            onPress={() => {
              navigation.navigate('DetailsScreen', { product: item });
            }}
          >
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price} ₫</Text>
          </TouchableOpacity>
        )}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color:'black'
  },
  itemName: {
    fontSize: 16,
    color:'black'
  },
  itemPrice: {
    fontSize: 16,
    color:'black'
  },
  fab: {
    position: 'absolute',
    marginTop:15,
    marginBottom: 10,
    right: 0,
    bottom: 0,
    backgroundColor: 'tomato',
    width: 36,
    height: 36,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});

export default HomeScreen;