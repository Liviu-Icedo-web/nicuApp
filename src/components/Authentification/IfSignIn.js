import React ,{  useContext  } from 'react';
import { View } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';

const IfSignIn = (props) => {
    const { state } = useContext(AuthContext);

    return (
        <>
          {state.token ?
            <View>
                {props.children}
            </View>
            : null
          }
        </>   
    );
};
export default IfSignIn;
