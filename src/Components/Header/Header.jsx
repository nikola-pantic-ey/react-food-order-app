import style from './header.module.css'

function Header(props) {
    return ( 
        <div className={style.header}>

<span>React Meals</span>
<button className={style.cart} onClick={()=>props.setModalVisibility(true)}>
    <span>Your cart: </span>
    <span className={style['cart-number']}>{props.items.itemsList.length}</span>
</button>
        </div>
     );
}

export default Header;