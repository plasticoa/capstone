import SHOP_DATA from '../../shop-data.json';
import { useContext } from 'react';
import { ProductContext } from '../../context/product.context';
import Productcard from '../../components/Productcard/Productcard.component';
import './Shop.styles.scss';
const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className='products-container'>
            {SHOP_DATA.map((product) => (
                <Productcard key={product.id} product={product}>
                </Productcard>

            ))}
        </div>
    )
}
export default Shop;