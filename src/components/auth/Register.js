import React, {Component} from 'react';

import {RegisterAction} from "../../actions/RegisterAction";
import {connect} from "react-redux"
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Redirect} from "react-router-dom";

class Register extends Component {
    state = {
        redirect: false
    };

    _handleSubmit = (values,
                     {props = this.props, setSubmitting}) => {
        const user = {
            "username": values.email,
            "first_name": values.first_name,
            "last_name": values.last_name,
            "email": values.email,
            "seller": {
                "designation": "Mr",
                "cellphone": "0780531190"
            },
            "password": values.password,
            "password2": values.confirmPassword
        };
        props.createAccount(user);
        setSubmitting(false);
    };

    redirectToLogin = () => {
        const {registration} = this.props;
        if (registration.success) {
            setTimeout(() => {
                this.setState({redirect: true});
            }, 3000);
        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to="/login"/>;
        }
        const {registration} = this.props;
        if (registration.success) {
            this.redirectToLogin();
        }
        const validationSchema = Yup.object().shape({
            first_name: Yup.string()
                .required('First name is required!'),
            last_name: Yup.string()
                .required('Last name is required!'),
            email: Yup.string()
                .email('Email is not valid!')
                .required('Email is required!'),
            password: Yup.string()
                .min(8, 'Pass word must be a minimum of 8 characters')
                .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    "password must include at least an uppercase letter a number and a special case")
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], "password do not match")
                .required('Confirm password is required')
        });

        return (
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={validationSchema}
                onSubmit={this._handleSubmit}
                render={props => {
                    return (
                        <div className="container" id="register">
                            {registration.error ? <div className="alert alert-danger m-2 text-center">
                                Unable to register the user
                            </div> : <div className="d-none"/>}
                            {registration.success ? <div className="alert alert-success m-2 text-center">
                                registration successfully! Please check your email to activate your account before login
                            </div> : <div className="d-none"/>}
                            <div className="Auth">
                                <div className="auth-form-title"><h2>Register</h2></div>
                                <div className="auth-form-content">
                                    <Form>
                                        <div className="Input">
                                            <Field
                                                type="text"
                                                name="first_name"
                                                placeholder="First Name"
                                                className="form-control"
                                            />
                                            <span className="errorMessage"><ErrorMessage name="first_name"/></span>
                                        </div>
                                        <div className="Input">
                                            <Field
                                                type="text"
                                                name="last_name"
                                                placeholder="Last Name"
                                                className="form-control"
                                            />
                                            <span className="errorMessage"><ErrorMessage name="last_name"/></span>
                                        </div>
                                        <div className="Input">
                                            <Field type="email"
                                                   name="email"
                                                   placeholder="Email"
                                                   className="form-control"
                                            />
                                            <span className="errorMessage"><ErrorMessage name="email"/></span>
                                        </div>
                                        <div className="Input">
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="password"
                                                className="form-control"
                                            />
                                            <span className="errorMessage"><ErrorMessage name="password"/></span>
                                        </div>
                                        <div className="Input">
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="confirm Password"
                                                className="form-control"
                                            />
                                            <span className="errorMessage"><ErrorMessage name="confirmPassword"/></span>
                                        </div>
                                        <div className="Input">
                                            <button type="submit"
                                                    disabled={props.isSubmitting || !props.isValid}
                                                    className="btn-primary btn-lg btn-block">
                                                Register
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    );
                }}
            />

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: (user) => {
            dispatch(RegisterAction.register(user));
        }
    }
};
const mapStateToProps = (state) => {
    return {
        registration: state.registration
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);