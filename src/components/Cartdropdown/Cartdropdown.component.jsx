import './cart-dropdown.styles.scss'
import Button from '../Button/Button.component';
const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <Button>GO CHECKOUT</Button>
            </div>
        </div>
    )
}
export default CartDropdown;