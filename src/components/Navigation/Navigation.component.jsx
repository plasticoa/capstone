import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import "./Navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <div><Logo className="logo"></Logo></div>
                </Link>
                <div className='nav-links-container'>
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                </div>
                <div className='nav-links-container'>
                    <Link className="nav-link" to='/signin'>SIGN IN</Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}
export default Navigation;

