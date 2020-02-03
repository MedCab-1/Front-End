import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, withFormik, validateYupSchema, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function LoginForm({ values, errors, touched, isSubmitting }) {
    return (
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
                .required('Please enter a username'),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required('Please enter a password')
        }),
        handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
            axios.post('', values)
            .then(res => {
                console.log(res);
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.error(err);
                setSubmitting(false);
            });
        }
    })(LoginForm);
    export default FormikLoginForm