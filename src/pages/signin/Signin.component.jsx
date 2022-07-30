import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    auth
} from "../../utils/firebase/Firebase.utils";
import Singup from "../../components/Signup/Signup.component";

const Signin = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign in component</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <Singup />
        </div>
    )
}
export default Signin;