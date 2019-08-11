import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, TextInput, Button, Alert, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { TODOS } from '../constants/Util'
import TodoItem from '../components/TodoItem'
import InputTodo from '../components/InputTodo'
export default class AllScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      todoList: TODOS
    }
  }
  AddItem = text => {
    this.setState({
      inputText: text
    })
  }
  onSubmit = () => {
    const { todoList } = this.state;
    const newTodoItem = {
      body: this.state.inputText,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodoItem];
    this.setState({
      todoList: newTodoList,
      inputText: ''
    })
  }
  OnPressDetailItem = id => {
    const { todoList } = this.state;
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done'
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    this.setState({
      todoList: newTodoList
    },
      () => {
        setTimeout(() => {
          this.props.navigation.navigate("Detail", { data: todo })
        }, 1000)
      })
  }
  onDeleteTodo = id => {
    const { todoList } = this.state
    const newTodoList = todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList: newTodoList
    })
  }
  onLongPress = todo => {

    Alert.alert(
      'Delete your todo?',
      todo.body,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };
  render() {

    const { todoList, inputText } = this.state;
    return (
      <ImageBackground style={styles.container} source={ require('../assets/images/image.jpg') }>
        <KeyboardAvoidingView
          enabled
          behavior="padding"
        >
          <ScrollView contentContainerStyle={styles.container}>
            {
              todoList.map(item => {
                return (

                  <TodoItem data={item} key={item.id} OnPressDetailItem={() => this.OnPressDetailItem(item.id)} onLongPress={() => this.onLongPress(item)} />

                )
              })
            }
            <View style={styles.inputGroup}>
              <TextInput style={styles.input} onChangeText={this.AddItem} value={inputText} />
              <Button title="submit" onPress={this.onSubmit} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

AllScreen.navigationOptions = {
  title: 'All Todos',
};

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '95%',
    minHeight: 30,
    color: 'white',
    borderWidth: 2,
    marginTop: '20%',
    marginBottom: '5%',
    borderColor: 'red',
    borderRadius:20
  }, 
  inputGroup: {
    flex: 1,
    width: '90%',
    marginTop: 10,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  }
});
