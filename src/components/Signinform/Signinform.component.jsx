import { useState, useContext } from "react";
import {
    createUserWithEmail,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInUserWithEmail
} from "../../utils/firebase/Firebase.utils";
import Forminput from "../Forminput/Forminput.component";
import "./Signin.styles.scss";
import Button from "../Button/Button.component";
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
    email: "",
    password: "",
}

const Signinform = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    //setting  user context
    const { setCurrentUser } = useContext(UserContext);

    const resetFields = () => {
        setFormFields(defaultFormFields);
    }

    const handledChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const handledSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInUserWithEmail(email, password);
            resetFields();
            alert("Successfully user logged in");
            setCurrentUser(user);
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("Wrong password");
                    break;
                case "auth/user-not-found":
                    alert("User not found");
                    break;
                default:
                    alert("Something went wrong");
                    break;
            }

            console.log(error);
        }
    }
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign In</span>
            <form onSubmit={handledSubmit}>

                <Forminput
                    label="Email"
                    type="email"
                    required onChange={handledChange}
                    name="email"
                    value={email}
                ></Forminput>
                <Forminput
                    label="Password"
                    type="password"
                    required onChange={handledChange}
                    name="password"
                    value={password}
                ></Forminput>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>
                        Google Sign in</Button>
                </div>
            </form>
        </div>
    )
}
export default Signinform;