import { useState } from "react";
import { createUserWithEmail, createUserDocumentFromAuth } from "../../utils/firebase/Firebase.utils";
import Forminput from "../Forminput/Forminput.component";
import "./Signup.styles.scss";
import Button from "../Button/Button.component";
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const Signup = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFields = () => {
        setFormFields(defaultFormFields);
    }

    const handledChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const handledSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }


        try {
            const { user } = await createUserWithEmail(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFields();
            alert("Successfully created user");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use");
            }
            console.log(error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Dont have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handledSubmit}>
                <Forminput
                    label="Display Name"
                    type="text"
                    required onChange={handledChange}
                    name="displayName"
                    value={displayName}
                ></Forminput>
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
                <Forminput
                    label="Confirm Password"
                    type="password"
                    required onChange={handledChange}
                    name="confirmPassword"
                    value={confirmPassword}
                ></Forminput>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default Signup;