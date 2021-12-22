import React from 'react'
import '../App.css';
import { cards } from './CardSlider';

const Card = () => {
   
    return (
        <div className='slider-container'>
          {cards.map((item, index)=>{
            return(
                <div key={item.id} >
                    <p>{item.name}</p>
                    <p>{item.cardNumber}</p>
                    <p>{item.cardHolderName}</p>
                    
                </div>
            )
          })}
        </div>
    )

}

export default Card
