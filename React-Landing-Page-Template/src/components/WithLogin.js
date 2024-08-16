import React from 'react';
import { useLogin } from './LoginContext';

const WithLogin = (Component)=>{
    const {login, setLogin} = useLogin()
    return ()=>{

        return <Component login={login} setLogin={setLogin}/>;

    }


}

export default WithLogin;
