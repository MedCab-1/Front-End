import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';

const Signup = ({ values, errors, touched, status, history }) => {
    // const [newUser, setNewUser] = useState([]);

    // useEffect(() => {
    //     if (status === true) {
    //         history.push('/');
    //     }
    // }, [status]);

    return (
        <div className='sign-up'>
            <h1>Med Cabinet</h1>
                <h3>Sign Up Today!</h3>
                    <Form>
                        <Field
                            type='text'
                            name='first_name'
                            placeholder='First Name' 
                            />
                        {touched.first_name && errors.first_name && (
                            <p className='errors'>
                                {errors.first_name} </p>
                            )}
                        <Field
                            type='text'
                            name='last_name'
                            placeholder='Last Name' 
                            />
                        {touched.last_name && errors.last_name && (
                            <p className='errors'>
                                {errors.last_name} </p>
                            )}
                        <Field
                            type='text'
                            name='email'
                            placeholder='Email'
                            />
                        {touched.email && errors.email && (
                            <p className='errors'>
                            {errors.email}</p>
                        )}
                        <Field  
                            type='password'
                            name='password'
                            placeholder='Password'
                            />
                        {touched.password && errors.password && (
                            <p className='errors'>
                            {errors.password}</p>
                        )}
                        <button type='submit'>Sign Up</button>
                            <p className='login-link'>Already a Member? 
                        <Link to='/login'> Login Here</Link></p>
                    </Form>
                    {/* {newUser.map(user => {
                        <ul key={user.id}>
                            <li>First Name: {user.first_name}</li>
                            <li>Last Name: {user.first_name}</li>
                            <li>Email: {user.email}</li>
                            <li>Password: {user.password}</li>
                        </ul>
                    })} */}
        </div>
    );
};

const FormikSignUpForms = withFormik ({
    mapPropsToValues({ first_name, last_name, email, password }) {
        return {
            first_name: first_name || '',
            last_name: last_name || '',
            email: email || '',
            password: password || ''
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Required Field'),
        email: Yup.string().required('Required Field'),
        password: Yup.string().required('Required Field')
    }),
    handleSubmit(values, { setStatus, props }) {
        console.log('Submit', values);
        const URL = ''; // need to insert link to next page when it's built

        const newUsers = {
            first_name: values.first_name,
            last_name: values.last_name,
            primaryemail: values.email,
            password: values.password
        };

        axios
            .post(`${URL}`, newUsers) 
            .then(res => {
                console.log(`Login Successful`, res);
                setStatus(res.data);
                props.history.push(''); //need to insert link to next page when it's built
            })
            .catch(err => console.log(err.response))
    }
})(Signup);

export default FormikSignUpForms;