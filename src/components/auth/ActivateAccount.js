import React, {Component} from "react";
import {connect} from "react-redux";
import {AuthActions} from "../../actions/AuthAction";
import {Redirect} from "react-router-dom";


class ActivateAccount extends Component{
    state = {
        redirect: false
    };

    componentDidMount() {
        const {match:{params}}= this.props;
        const activate = {
            uid: params.uid,
            token: params.token
        };
        this.props.accountActivation(activate);
    }

    redirectToLogin = () =>{
        const {auth} = this.props;
        if(auth.active){
            setTimeout(()=>{
                this.setState({redirect: true});
            }, 4000);
        }
    };

    render() {
        if(this.state.redirect){
            return <Redirect to="/login"/>
        }
        const {auth} = this.props;
        if(auth.active){
            this.redirectToLogin();
        }
        return(
            <div className="container">
                {auth.active?<div>
                    <div className="alert alert-success m-2 text-center">
                        Account activated successfully, redirecting to login
                    </div>:<div className="d-none"/>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border"  style={{width: "5rem", height: "5rem"}} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>:<div className="d-none"/>}
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        accountActivation:(activate)=>{
            dispatch(AuthActions.activateAccount(activate))
        }
    }
};
const mapStateToProps=(state)=>{
    return{
        auth: state.auth
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivateAccount);