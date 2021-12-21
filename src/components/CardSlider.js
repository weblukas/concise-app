import React from 'react'
import Card from './Card'

export const cards = [
    {
        id: 1,
        name: "card1",
        cardNumber: 123456789,
        cardHolderName: 'Jan Kowalski',
    },
    {
        id: 2,
        name: "card2",
        cardNumber: 4444444789,
        cardHolderName: 'John Doe',
    }
]


const CardSlider = () => {
    return (
        <div className='card-slider'>
            <Card />
        </div>
    )
}

export default CardSlider
