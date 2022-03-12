import { useEffect, useState } from 'react'

import API from '../api'
import Card from './Card'

import './Tippler.css'


const Tippler = ({ logout, token }) => {

    const [error, setError] = useState('')
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        API.getCocktails(token).then(response => {
            if (response.error) setError(response.error)
            else {
                console.log(response)
                setCocktails(response)
            }
        })
    }, [])

    return (
        <div className='Tippler'>
            <div className='contentArea'>
                {cocktails.map(cocktail => <Card {...cocktail} />)}
            </div>
        </div>
    )
}
export default Tippler