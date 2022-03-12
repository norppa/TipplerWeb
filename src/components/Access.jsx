
import { useEffect, useState } from 'react'

import API from '../api'
import Input from './Input'
import './Access.css'


const Access = ({ login }) => {

    const [isLogin, setIsLogin] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => setError(''), [username, password])

    const submit = () => {
        API.access(username, password, isLogin)
            .then(response => {
                if (response.error) setError(response.error)
                else login(response.token)
            })
    }

    return (
        <div className='Access'>
            <div className='upper'>
                <h1>{isLogin ? "Sign in to Tippler" : "Register to Tippler"}</h1>

                <div className='inputs'>
                    Username
                    <Input text={[username, setUsername]} />
                    Password
                    <Input text={[password, setPassword]} />

                    {error && <div className='error'>{error}</div>}

                    <button className='submit'
                        onClick={submit}
                        disabled={!password || !username}>
                        {isLogin ? "Sign in" : "Register"}
                    </button>
                </div>



            </div>

            <div className='lower'>
                {isLogin ? 'New to Tippler?' : 'Already have an account?'}
                <a onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Create an account.' : 'Sign in'}</a>
            </div>
        </div>
    )
}

export default Access