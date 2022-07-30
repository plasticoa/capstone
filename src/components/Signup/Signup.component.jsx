import { useState } from "react";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const Signup = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handledChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={() => { }}>
                <label>Display  Name</label>
                <input type="text" required onChange={handledChange} name="displayName" value={displayName}></input>
                <label>Email</label>
                <input type="email" required onChange={handledChange} name="email" value={email}></input>
                <label>Pasword</label>
                <input type="password" required onChange={handledChange} name="password" value={password}></input>
                <label>Confirm Password</label>
                <input type="password" required onChange={handledChange} name="confirmPassword" value={confirmPassword}></input>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default Signup;