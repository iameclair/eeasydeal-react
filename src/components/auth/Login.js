import React, {Component} from 'react'
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import {AuthActions} from "../../actions/AuthAction";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
            },
            name: null,
            loggedIn: false,
            redirect:false
        };
    }

    _handleSubmit = (values, {setSubmitting}) => {
        const user = {
            "username": values.username,
            "password": values.password
        };
        this.props.login(user);
        setSubmitting(false);
    };

    componentDidMount() {
        const {auth} = this.props;
        if (auth.loggedIn) {
            setTimeout(()=>{
                this.setState({redirect: true});
            }, 3000);
        }
    }

    redirectToLandingPage=()=>{
        setTimeout(()=>{
            this.setState({redirect: true});
        }, 3000);
    };

    render() {
        if(this.state.redirect){
            return <Redirect to="/"/>
        }
        const {auth} = this.props;
        if(auth.loggedIn){
            this.redirectToLandingPage()
        }
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
                            {auth.error? <div className="alert alert-danger m-2 text-center">
                                email or password incorrect please try again
                            </div>:<div className="d-none"/>}
                            {auth.success? <div className="alert alert-success m-2 text-center">
                                login successfully
                            </div>:<div className="d-none"/>}
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
        )
    };
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(AuthActions.login(user));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);