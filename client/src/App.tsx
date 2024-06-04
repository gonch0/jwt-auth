import { observer } from 'mobx-react-lite';
import React, {
    useContext,
    useEffect,
    useState,
} from 'react';
import LoginForm from './components/LoginForm';
import { Context } from './index';
import { IUser } from './models/IUser';
import UserService from './services/UserService';

function App() {
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }

    }, []);

    async function getUsers() {
        try {
            const response = await UserService.getUsers()
            setUsers(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    if (store.isLoading) {
        return <div>Loading...</div>
    }

    if (!store.isAuth) {
        return (
            <>
                <LoginForm />

                <button onClick={getUsers}>
                    Получить список пользователей
                </button>
            </>
        )
    }


  return (
    <div className="App">
        <h1>{store.isAuth ?
            `Пользователь авторизован ${store.user.email}`
            : "Авторизуйтесь"}
        </h1>

        <h1>{store.user.isActivated ?
            `Аккаунт подтвержден ${store.user.email}`
            : "Подтвердите аккаунт"}

        </h1>

        <button
            onClick={() => store.logout()}
        >
            Выйти
        </button>

        <div>
            <button onClick={getUsers}>
                Получить список пользователей
            </button>
        </div>

        {users.map(user => (
            <div key={user.email}>{user.email}</div>))}
    </div>
  );
}

export default observer(App);
