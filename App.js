import { StyleSheet,View, TextInput,Text, TouchableOpacity, Alert } from 'react-native';
import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';


class App extends Component {

  state = {
    textPerintah: '',
  };

  _handleKirimPerintah(value){
    firestore()
    .collection('iot')
    .doc('perintah')
    .set({
      lampu: value,
    })
    .then(() => {
      Alert.alert('Send data cloud firestore success')
    })
    .catch(error => console.error(error));
  }

  // _onPressButton() {
  //   Alert.alert('send data success')
  // }

  render() {
    return(
    <View style={styles.container}>
    <Text style={{
      color: 'black', 
      fontSize:30, 
      marginBottom: 10
      }}>
      Cloud Firestore
    </Text>
    <TextInput 
    style={styles.input}
    placeholder="Masukan teks perintah disini..."
    onChangeText={(value) => this.setState({textPerintah : value})}
    value={this.state.textPerintah}
    />

    <TouchableOpacity 
    style={styles.button} 
    onPress={() => this._handleKirimPerintah(this.state.textPerintah)}>
      <Text style={styles.textButton}>Kirim</Text>
    </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignContent: 'center',
    margin: 10,
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    paddingHorizontal: 20,
  },
  button: {
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
  }
 

});

export default App;