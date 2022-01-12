import React , {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

function Auth({children}) {

    const history = useHistory();

    useEffect(()=>{
        const token = localStorage.getItem('user')
        if (!token) {
            history.push('/login')
        }
    },[history])

    return (<div>{children}</div>);
}

export default Auth;