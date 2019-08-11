import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class InputTodo extends Component {
    const
    render() {
        return (
             <View>
          <TextInput style={styles.input} onChangeText={this.AddItem} value={inputText} />
          <Button title="submit" onPress={this.onSubmit} />
          </View>
        )
    }
}
