import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, withFormik, validateYupSchema, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function LoginForm({ values, errors, touched, isSubmitting }) {
    // const [user, setUser] = useState([]);

    // useEffect(() => {
    //     if (status === true) {
    //         history.pushState('/')
    //     }
    // }, [status]);
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
        handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
            axios.post('https://med-cabinet-1.herokuapp.com/api/user/login', values)
            .then(res => {
                console.log(res);
                localStorage.setItem('user', JSON.stringify(res.data))
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.error(err);
                setSubmitting(false);
            });
        }
    })(LoginForm);
    export default FormikLoginForm;