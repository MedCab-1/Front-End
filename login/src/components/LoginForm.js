import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, withFormik, validateYupSchema, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'



function LoginForm({ values, errors, touched, isSubmitting }) {
    // const [user, setUser] = useState([]);

    // useEffect(() => {
    //     if (status === true) {
    //         history.pushState('/')
    //     }
    // }, [status]);
    return (
        <div className="login">
            <h1>Welcome</h1>
            <h3>Log in to view your account</h3>
            <h3>Don't have an account? <Link to='/Signup'>Sign up</Link></h3>
            <form>
                <div>
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    <Field type="username" name="username" placeholder="username" />
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type="password" name="password" placeholder="password" />
                </div>
                <button disabled={isSubmitting}>Login</button>
            </form>
        </div>
      );
    }
    
    const FormikLoginForm = withFormik({
        mapPropsToValues({ username, password }) {
            return {
                username: username || '',
                password: password || ''
            };
        },
        validationSchema: Yup.object().shape({
            username: Yup.string()
                .required('Field required'),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required('Field required')
        }),
        handleSubmit(values, { setStatus, props }) {
            axios.post('https://cors-anywhere.herokuapp.com/https://med-cabinet-1.herokuapp.com/api/user/login', values)
            .then(res => {
                console.log(res);
                setStatus(res.data);
                props.history.push('/');
            })
            .catch(err => {
                console.error(err);
            });
        }
    })(LoginForm);
    export default FormikLoginForm