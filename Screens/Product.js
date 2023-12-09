import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import Material Icons from react-native-vector-icons

function Product({id, title, complete}) {
  async function toggleComplete() {
    await firestore().collection('product').doc(id).update({
      complete: !complete,
    });
  }

  return (
    <List.Item
      title={title}
      onPress={() => toggleComplete()}
      left={() => (
        <Icon
          name={complete ? 'check' : 'cancel'}
          size={24}
          color="black" // Set the color you want
        />
      )}
    />
  );
}

export default Product;
