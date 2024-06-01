import {
    FC,
    useState,
} from 'react';

export const LoginForm: FC = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


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

            <button>Login</button>
            <button>Registration</button>
        </div>
    );
};
