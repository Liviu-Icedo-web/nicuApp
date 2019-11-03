import React ,{  useContext, useEffect  } from 'react';
import { View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const IfSignOut = (props) => {
    const { state } = useContext(AuthContext);

    return (
        <>
          {!state.token ?
            <View>
                {props.children}
            </View>
            : null
          }
        </>   
    );
};
export default IfSignOut;
