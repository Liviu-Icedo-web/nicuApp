
import * as React from 'react';
import { Image, View , TouchableOpacity, Text } from 'react-native';
import StyleSheet from '../../styles';



// AQUI TENEMOS QUE PONER EL CODIGO PARA HACER UNA CAPTURA CON EL WEBCAM
export default class WebCamCapture extends React.Component {
  state = {
    capture: null,
  };

  render() {
    let { capture } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {capture &&
          <Image source={{ uri: image }} style={{ width: 200, height: 170 }} /> 
        }
        <TouchableOpacity style={StyleSheet.webView} >
            <Text style={StyleSheet.white}>Foloseste Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  
}