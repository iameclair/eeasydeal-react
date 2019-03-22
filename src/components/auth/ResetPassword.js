import React, {Component} from 'react';
import {connect} from "react-redux"
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import {AuthActions} from "../../actions/AuthAction";

class ResetPassword extends Component {

    _handleSubmit=(values, {setSubmitting})=> {
        this.props.resetPassword(values.email);
        setSubmitting(false);
    };

    render() {
        const validationSchema = Yup.object().shape({
            newPassword: Yup.string()
                .min(8, 'Pass word must be a minimum of 8 characters')
                .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    "password must include at least an uppercase letter a number and a special case")
                .required('Password is required'),
            confirmNewPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], "password do not match")
                .required('Confirm password is required')
        });
        return (
            <Formik
                initialValues={{
                    newPassword:'',
                    confirmNewPassword:''
                }}
                validationSchema={validationSchema}
                onSubmit={this._handleSubmit}
                render={props => {
                    return(
                        <div className="container" id="forget">
                            <div className="Auth">
                                <div className="auth-form-title"><h2>Reset Password</h2></div>
                                <div className="auth-form-content">
                                    <Form>
                                        <div className="Input">
                                            <Field type="password"
                                                   name="newPassword"
                                                   className="form-control"
                                                   placeholder="Enter new password"
                                            />
                                            <span className="errorMessage">
                                            <ErrorMessage name="newPassword"/>
                                        </span>
                                        </div>
                                        <div className="Input">
                                            <Field type="password"
                                                   name="confirmNewPassword"
                                                   className="form-control"
                                                   placeholder="Confirm new password"
                                            />
                                            <span className="errorMessage">
                                            <ErrorMessage name="confirmNewPassword"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);