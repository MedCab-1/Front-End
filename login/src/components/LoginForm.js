import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, withFormik, validateYupSchema, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';



function LoginForm({ values, errors, touched, isSubmitting }) {
    return (
        <Form>
            <div>
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type="username" name="username" placeholder="username" />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="password" />
            </div>
            <button type='submit'>Login</button>
        </Form>
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
            axios.get('https://cors-anywhere.herokuapp.com/https://med-cabinet-1.herokuapp.com/api/user/login', values)
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
    export default FormikLoginForm;