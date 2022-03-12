import coupe from '../../../SolidTipplerWeb/src/assets/coupe.png'
import { useState } from 'react'

import './Card.css'

const Card = ({ id, name, glass, method, garnish, source, info, ingredients }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const ClosedCard = () => <h2>{name}</h2>

    const OpenCard = () => <div className='contents'>
        <h2>{name}</h2>
        <img className='glass' src={coupe} alt={glass} />
        <span className='method'>{method}</span>
        <ul className='ingredients'>
            {ingredients.map(({id, amount, name}) => <li key={`amount-${id}`}>{amount} {name}</li>)}
        </ul>
        <div className='optional'>
            { garnish && <div className='garnish'>{garnish}</div>}
            {info && <div className='info'>{info}</div>}
            {source && <div className='source'><b>Source:</b> {source}</div>}
        </div>

    </div>

    return (
        <div className='Card' cardId={id} onClick={toggle}>
            {isOpen ? <OpenCard /> : <ClosedCard />}
        </div>
    )
}

export default Card