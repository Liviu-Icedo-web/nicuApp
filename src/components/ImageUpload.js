import * as React from 'react';
import {Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Spacer from './Spacer';

//MODEL https://stackoverflow.com/questions/55831213/uploading-multiple-images-with-react
// https://jsmanifest.com/uploading-files-in-react-while-keeping-ui-completely-in-sync/

// https://www.youtube.com/watch?v=b6Oe2puTdMQ
// https://github.com/bradtraversy/react_file_uploader/blob/master/client/src/components/FileUpload.js

export default class ImageUpload extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 170 }} /> 
        }
        <Spacer/>
         <Button
          title="Urca Imagine"
          onPress={this._pickImage}
          type="outline"
        />  
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      allowsMultipleSelection:true
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
    

  };
}