import ModalItem from '../ModalItem/ModalItem'
import style from './modal.module.css'

function Modal(props) {
    return ( 
        <div className={style.modal}>
        <div className={style['modal-inner']}>
<div className={style["modal-item-wrapper"]}>{props.items.itemsList.map(e=><ModalItem key={e.id} e={e}/>)}
</div>

<div className={style['total-amount']}>Total amount: {props.items.totalAmount.toFixed(2)}$</div>

<div className={style['modal-buttons']}>
    <button className={style['modal-button']} onClick={()=>props.setModalVisibility(false)}>Close</button>
    <button className={style['modal-button']}>Order</button>
</div>
        </div>
        </div>
     );
}

export default Modal;