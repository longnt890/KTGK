import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({route}) => {

    const {product} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.detailItem}>
        <Text style={styles.title}>Service name:</Text>
        <Text style={styles.content}>{product.name}</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={styles.title}>Price:</Text>
        <Text style={styles.content}>${product.price}</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={styles.title}>Creator:</Text>
        <Text style={styles.content}>Hung</Text>
      </View>

    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF', // or any color that matches your design
  },
  title: {
    fontWeight: 'bold',
    color: 'black'
  },
  content:{
      marginLeft: 5
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom:10
  },
})