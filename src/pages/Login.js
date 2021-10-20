import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const validate = values => {

    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }
    return errors;

};

const Login = () => {
    //(formik is variable) --- const formik = useFormik()
    const { handleBlur, handleChange, handleReset, handleSubmit, values, errors } = useFormik({
        //first parameter of useFormik()
        initialValues: {
            email: '',
            password: '',
        },
        //onSubmit is also in key value form, and as a value takes a call back function
        validate,
        onSubmit: (values) => {
            console.log(values);
        },// on submit it availables values of initialValues as argumrent in the function
    })

    return (

        <form onSubmit={handleSubmit} className="w-25" >
            < label htmlFor="email" > Email Address</label >
            <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                className="form-control"
            />
            {errors.email ? <div className="text-danger">{errors.email}</div> : null}
            <label htmlFor="password" > Password </label >
            <input
                id="password"
                name="password"
                type="text"
                onChange={handleChange}
                value={values.password}
                className="form-control"
            />
            {errors.password ? <div className="text-danger">{errors.password}</div> : null}
            < button type="submit" className="btn btn-primary mt-3 mb-3"> Submit</button >
            <div>
                <Link to="/register">Create New Account</Link>  
            </div>
        </form >

    )
}

export default Login

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {

//Simple Form Handling
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')
// const [emailError, setEmailError] = useState('')
// const [passwordError, setPasswordError] = useState('')

// const handleEmailChange = (event) => {
//     setEmail(event.target.value)
//     //directly event change be called inside the clickHandler i.e,
//     //in Email tag => <input type="email" onChange=((e)=> setEmail(e.target.value) />
// }
// const handlePasswordChange = (event) => {
//     setPassword(event.target.value)
//     //directly event change be called inside the clickHandler i.e,
//     //in Password tag => <input type="password" onChange=((e)=> setPassword(e.target.value) />
// }

//Simple Form Handling
// const handleSubmit = (event) => {
//     event.preventDefault()
//     if (email === '' || email === null) {
//         setEmailError('Please Provide an Email')
//     } else {
//         setEmailError('')
//     }
//     if (password === '' || password === null) {
//         setPasswordError('Please Provide an Password')
//     } else {
//         setPasswordError('')
//     }
// }

// return (
//     <div>
//         <form className="row g-3 w-50" onSubmit={handleSubmit}>
//             <div className="col-md-12">
//                 <label for="email" className="form-label">Email</label>
//                 <input type="text" className="form-control" id="emails" placeholder="email" onChange={handleEmailChange} />
//                 <p style={{ color: 'red' }}>{emailError}</p>
//                 <label for="password" className="form-label">Password</label>
//                 <input type="password" className="form-control" id="password" placeholder="password" onChange={handlePasswordChange} />
//                 <p style={{ color: 'red' }}>{passwordError}</p>
//             </div>
//             <div>
//                 <button className="btn btn-primary">Click here</button>
//             </div>
//         </form >
//     </div >
// )
// }

// export default Login