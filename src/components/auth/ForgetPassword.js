import React, {Component} from 'react';
import {connect} from "react-redux"
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import {AuthActions} from "../../actions/AuthAction";

class ForgetPassword extends Component {

    _handleSubmit=(values, {setSubmitting})=> {
        this.props.resetPassword(values.email);
        setSubmitting(false);
    };

    render() {
        const validationSchema = Yup.object().shape({
            email: Yup.string()
                .email('Email is not valid!')
                .required('Email is required!'),
        });
        return (
            <Formik
                initialValues={{
                    email:''
                }}
                validationSchema={validationSchema}
                onSubmit={this._handleSubmit}
                render={props => {
                    return(
                        <div className="container" id="forget">
                            <div className="Auth">
                                <div className="auth-form-title"><h3>Forgot Password?</h3></div>
                                <div className="auth-form-content">
                                    <Form>
                                        <div className="Input">
                                            <Field type="email"
                                                   name="email"
                                                   className="form-control"
                                                   placeholder="Enter Email"
                                            />
                                            <span className="errorMessage">
                                                <ErrorMessage name="username"/>
                                            </span>
                                        </div>
                                        <div className="Input">
                                            <button type="submit"
                                                    disabled={props.isSubmitting || !props.isValid}
                                                    className="btn-primary btn-lg btn-block">
                                                Send Password
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    )
                }}
            />
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        resetPassword: (email) =>{
            dispatch(AuthActions.resetPassword(email));
        }
    }
};
const mapStateToProps = (state) => {
    return {
        passwordManagment: state.passwordManagment
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);