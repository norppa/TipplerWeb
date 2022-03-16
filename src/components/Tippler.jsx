import { useEffect, useState } from 'react'

import API from '../api'
import Card from './Card'
import Search from './Search'

import './Tippler.css'


const Tippler = ({ logout, token }) => {

    const [error, setError] = useState('')
    const [cocktails, setCocktails] = useState([])
    const [search, setSearch] = useState({ text: '', fromIngredients: false })

    useEffect(() => {
        API.getCocktails(token).then(response => {
            if (response.error) setError(response.error)
            else {
                console.log(response)
                setCocktails(response)
            }
        })
    }, [])

    const matchesSearch = (target) => {
        const x = target.toLowerCase().includes(search.text.toLowerCase())
        console.log('target', target, 'search', search, 'result', x)
        return x

    }

    const Cocktails = () => {

        const toCard = (cocktail) => <Card key={cocktail.id} {...cocktail} />

        return <>{
            cocktails.filter(cocktail => {
                if (!search.text) return true
                if (matchesSearch(cocktail.name)) return true
                if (search.fromIngredients && cocktail.ingredients.some(ingredient => matchesSearch(ingredient.name))) return true
            }).map(toCard)
        }</>

    }

    return (
        <div className='Tippler'>
            <div className='contentArea'>
                <Search search={search} setSearch={setSearch} />
                <Cocktails />
            </div>
        </div>
    )
}
export default Tippler