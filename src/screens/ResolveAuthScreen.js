import { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const { tryLocalSignin, fetchUserAuth } = useContext(AuthContext);

    useEffect(() => {
       
        fetchUserAuth() ,       
        tryLocalSignin();
        
    }, []);

    return null;
};

export default ResolveAuthScreen;
