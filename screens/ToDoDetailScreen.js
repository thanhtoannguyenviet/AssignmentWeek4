import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ToDoDetailScreen extends Component {
    render() {
        const {navigation}=this.props
        const todoItem= navigation.getParam('data')
        const {status,body}=todoItem
        return (
            <View>
                <Text> Statuc:{status} </Text>
                <Text> Body:{body} </Text>
            </View>
        )
    }
}
