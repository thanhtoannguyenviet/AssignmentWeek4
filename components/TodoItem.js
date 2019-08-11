import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';


export default class TodoItem extends Component {
  render() {
    const {
      data: { body, status,id},
      OnPressDetailItem,onLongPress
    } = this.props

    const statusStyle = {
      backgroundColor: status === 'Done' ? 'green' : 'red'
    };
    return (


      <TouchableOpacity style={[styles.button, statusStyle]} onPress={OnPressDetailItem} onLongPress={onLongPress}>
        <Text style={styles.text}>
          {id}:{body}
        </Text>
      </TouchableOpacity>
    );
  }
};
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 10,
    color: 'white'
  },
  button: {
    backgroundColor: 'brown',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width:'90%',
    marginTop:15
  }
})