import React, {Component, Fragment} from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {AuthActions} from "../../actions/AuthAction";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import Spinner from "../main/Spinner";

class Login extends Component {

    _handleSubmit = (values, {setSubmitting}) => {
        const user = {
            "email": values.username,
            "password": values.password
        };
        this.props.login(user);
        setSubmitting(false);
    };

    componentDidMount() {
    }

    renderSpinner = (attempted, loading) => {
        if (attempted && loading) return <Spinner/>;
    };
    renderMessage = (attempted, loggedIn, message, loading) => {
        if (attempted && loggedIn && !loading) {
            return <div className="alert alert-success m-2 text-center">{message}</div>
        } else if (attempted && !loggedIn && !loading) {
            return <div className="alert alert-danger m-2 text-center">{message}</div>
        }
    };

    render() {
        const {auth} = this.props;
        const {attempted, loading, loggedIn, message, profile} = auth;
        const validationSchema = Yup.object().shape({
            username: Yup.string()
                .email('Email is not valid!')
                .required('Email is required!'),
            password: Yup.string()
                .min(8, 'Pass word must be a minimum of 8 characters')
                .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    "password must include at least an uppercase letter a number and a special case")
                .required('Password is required'),
        });

        return (
            <Fragment>
                {this.renderSpinner(attempted, loading)}
                {this.renderMessage(attempted,loggedIn,message,loading)}
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={this._handleSubmit}
                    render={props => {
                        return (
                            <div className="container" id="login">
                                {auth.attempt && !auth.loggedIn ? <div className="alert alert-danger m-2 text-center">
                                    {auth.message}
                                </div> : <div className="d-none"/>}
                                {auth.attempt && auth.loggedIn ? <div className="alert alert-success m-2 text-center">
                                    {auth.message}
                                </div> : <div className="d-none"/>}
                                <div className="Auth">
                                    <div className="auth-form-title"><h2>Login</h2></div>
                                    <div className="auth-form-content">
                                        <Form>
                                            <div className="Input">
                                                <Field type="text"
                                                       name="username"
                                                       placeholder="Email"
                                                       className="form-control"
                                                />
                                                <span className="errorMessage"><ErrorMessage name="username"/></span>
                                            </div>
                                            <div className="Input">
                                                <Field type="password"
                                                       name="password"
                                                       placeholder="Password"
                                                       className="form-control"
                                                />
                                                <span className="errorMessage"><ErrorMessage name="password"/></span>
                                            </div>
                                            <div className="Input auth-link-container">
                                                <Link to="/forget-password">
                                                <span className="auth-click-link">
                                                     Forgot password?
                                                </span>
                                                </Link>
                                            </div>
                                            <div className="Input">
                                                <button type="submit"
                                                        disabled={props.isSubmitting || !props.isValid}
                                                        className="btn-primary btn-lg btn-block">
                                                    Login
                                                </button>
                                            </div>
                                            <div className="Input auth-link-container">
                                                <Link to="/register">
                                            <span className="auth-click-link">
                                                Don't have an account? Create Account
                                            </span>
                                                </Link>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                />
            </Fragment>
        )
    };
}


const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        cookies: ownProps.cookies
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (user) => {
            dispatch(AuthActions.login(user, ownProps));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);