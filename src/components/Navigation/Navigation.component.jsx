import { Outlet, Link } from 'react-router-dom';
import { useContext, Fragment } from 'react';
import "./Navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/Firebase.utils";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);


    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <div><Logo className="logo"></Logo></div>
                </Link>
                <div className='nav-links-container'>
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>
                                {''}  SIGN OUT {''} </span>
                        ) : (
                            <Link className="nav-link" to='/signin'>SIGN IN</Link>
                        )
                    }
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}
export default Navigation;

