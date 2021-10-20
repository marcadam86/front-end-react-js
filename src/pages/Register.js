import React from 'react';
import { useFormik } from 'formik';


const validate = values => {

    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }



    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }



    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
    } else if (values.confirmPassword.length > 20) {
        errors.confirmPassword = 'Must be 20 characters or less';
    }

    return errors;
};

const Register = () => {

    const { formik, handleChange, handleSubmit, errors, values } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
        } //onSubmit takes a call back function as value
    })

    return (
        <form onSubmit={handleSubmit} className="w-25">
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={handleChange}
                value={values.firstName}
                className="form-control"
            />
            {errors.firstName ? <div>{errors.firstName}</div> : null}

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={handleChange}
                value={values.lastName}
                className="form-control"
            />
            {errors.lastName ? <div>{errors.lastName}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                className="form-control"
            />
            {errors.password ? <div>{errors.password}</div> : null}

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                value={values.password}
                className="form-control"
            />
            {errors.password ? <div>{errors.password}</div> : null}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                id="confirmPassword"
                name="confirmPpassword"
                type="confimPassword"
                onChange={handleChange}
                value={values.confirmPassword}
                className="form-control"
            />
            {errors.confirmPassword ? <div>{errors.confirmPassword}</div> : null}

            <button type="submit" className="btn btn-primary w-100 mt-2">Submit</button>

        </form>

    );

};

export default Register





// import React from 'react'
// import { useState } from 'react'
// import Register from './Register';
// const Register = () => {

//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')

//     const [firstNameError, setFirstNameError] = useState('')
//     const [lastNameError, setLastNameError] = useState('')
//     const [emailError, setEmailError] = useState('')
//     const [passwordError, setPasswordError] = useState('')
//     const [confirmPasswordError, setConfirmPasswordError] = useState('')

//     const handleFirstNameChange = (e) => {
//         if(email === '' || null)
//         setFirstName(e.target.value)
//     }

//     const handleLastNameChange = (e) => {
//         setLastName(e.target.value)
//     }

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value)
//     }

//     const handlePassowrdChange = (e) => {
//         setPassword(e.target.value)
//     }

//     const handleConfirmPasswordChange = (e) => {
//         setConfirmPassword(e.target.value)
//     }


//     const handleSubmit = (e) => {

//         e.preventDefault()
//         if (firstName === '' || firstName === null) {
//             setFirstNameError('Please provide a First Name')
//         } else setFirstNameError('')

//         if (lastName === '' || lastName === null) {
//             setLastNameError('Please provide a Last Name')
//         } else setLastNameError('')

//         if (email === '' || email === null) {
//             setEmailError('Please provide an Email')
//         } else setEmailError('')

//         if (password === '' || password === null) {
//             setPasswordError('Please provide a Password')
//         } else setPasswordError('')

//         if (confirmPassword === '' || confirmPassword === null) {
//             setConfirmPasswordError('Please Confirm Password')
//         } else setConfirmPasswordError('')

//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div className="row w-50">
//                     <label id="first-name">First Name</label>
//                     <input type="text" name="" id="first-name" placeholder="First Name" onChange={handleFirstNameChange} />
//                     <p style={{ color: 'red' }}>{firstNameError}</p>
//                     <label id="last-name">Last Name</label>
//                     <input type="text" name="" id="last-name" placeholder="Last Name" onChange={handleLastNameChange} />
//                     <p style={{ color: 'red' }}>{lastNameError}</p>
//                     <label id="email">Email</label>
//                     <input type="Email" name="" id="email" placeholder="Email" onChange={handleEmailChange} />
//                     <p style={{ color: 'red' }}>{emailError}</p>
//                     <label id="password">Password</label>
//                     <input type="Password" name="" id="password" placeholder="Password" onChange={handlePassowrdChange} />
//                     <p style={{ color: 'red' }}>{passwordError}</p>
//                     <label id="confirm-password">Confirm Password</label>
//                     <input type="confirmPassword" name="" id="confirm-password" placeholder="Confirm Password" onChange={handleConfirmPasswordChange} />
//                     <p style={{ color: 'red' }}>{confirmPasswordError}</p>
//                 </div>
//                 <div className="row w-50 mt-3">
//                     <button className="btn btn-primary">Register</button>
//                 </div>
//             </form>
//         </div>
//     )
// }
