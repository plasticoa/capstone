import Singup from "../../components/Signup/Signup.component";
import Signinform from "../../components/Signinform/Signinform.component";

import "./Signin.style.scss";
const Signin = () => {

    return (
        <div className="authentication-container">
            <Signinform />
            <Singup />
        </div>
    )
}
export default Signin;