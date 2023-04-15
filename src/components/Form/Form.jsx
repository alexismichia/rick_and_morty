import style from "./Form.module.css";
import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit} style={{ backgroundColor: "#f2f2f2", fontFamily: "Arial, sans-serif" }}>
            <label htmlFor="email" style={{ color: "white", marginRight: "10px" }}>Email: </label>
            <input type="email" name='email' value={userData.email} onChange={handleChange} style={{ color: "black" }}/>
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <hr />
            <label htmlFor="password" style={{ color: "white", marginRight: "10px" }}>Password: </label>
            <input type="text" name="password" value={userData.password} onChange={handleChange} style={{ color: "black" }}/>
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

            <button style={{ backgroundColor: "#4CAF50", color: "white" }}>Submit</button>
        </form>
    )
}

export default Form;