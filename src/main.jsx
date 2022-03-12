import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './main.css'

import Access from './components/Access'

const KEY = '@TipplerToken'

const App = () => {
  const [token, setToken] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem(KEY)
    if (token) setToken(token)
  }, [])

  const login = (token) => {
      localStorage.setItem(KEY, token)
      setToken(token)
  }

  const logout = () => {
      localStorage.removeItem(KEY)
      setToken(false)
  }

  if (!token) return <Access login={login} />

  return null // <Tippler logout={logout} />

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
