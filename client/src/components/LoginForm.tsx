import { observer } from 'mobx-react-lite';
import {
    FC,
    useContext,
    useState,
} from 'react';
import { Context } from '../index';

function LoginForm() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const {store} = useContext(Context);

    return (
        <div>
            <input
                type='email'
                value={email}
                placeholder='email'
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type='password'
                value={pass}
                placeholder='pass'
                onChange={e => setPass(e.target.value)}
            />

            <button
                onClick={() => store.login(email, pass)}
            >
                Login
            </button>

            <button
                onClick={() => store.registration(email, pass)}
            >
                Registration
            </button>
        </div>
    );
}

export default observer(LoginForm)