import style from './modal-item.module.css'
import {Context} from '../../App'
import { useContext } from 'react';


function ModalItem(props) {
console.log(props.e)
const ctx=useContext(Context)

const addOneItem=ctx.addItems.bind(null, {...props.e, amount:1})
const removeOneItem=ctx.removeItems.bind(null, props.e.id)

    return ( 
        <div className={style['modal-item']}>
<div className={style["modal-item-info"]}>
<span>{props.e.name}</span>
<div className={style["modal-price-and-amount"]}>
    <div className="modal-price">${props.e.price}</div>
    <div className={style['modal-amount']}>x{props.e.amount}</div>
</div>
</div>
<div className="modal-buttons">
    <button className={style['modal-button']} onClick={removeOneItem}>-</button>
    <button className={style['modal-button']} onClick={addOneItem}>+</button>
</div>
        </div>
     );
}

export default ModalItem;