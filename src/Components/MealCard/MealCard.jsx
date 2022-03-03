import { useContext, useRef } from 'react';
import style from './meal-card.module.css'
import {Context} from '../../App'


function MealCard(props) {
    const ctx=useContext(Context)
    const amountOfMeals=useRef()
 

    return ( 
        <div className={style['meal-card']}>
<div className='meal-info'>
    <div className='meal-name'>{props.e.name}</div>
    <div className='meal-description'>{props.e.description}</div>
    <div className='meal-price'>{props.e.price}$</div>
</div>

<div className={style['adding-meal-form']}>
    <div className="adding-amount">
<span>Amount: </span>
<input ref={amountOfMeals} type="number" min='1' max='10' defaultValue='1'/>
    </div>
    <button className={style['adding-button']} onClick={()=>ctx.addItems({id: props.e.id, name: props.e.name, price: props.e.price, amount: +amountOfMeals.current.value})}> +Add</button>
</div>
        </div>
     );
}

export default MealCard;