import React, {Component} from "react";
import {connect} from "react-redux";
import {AuthActions} from "../../actions/AuthAction";
import Spinner from "../main/Spinner";

class ActivateAccount extends Component{
    componentDidMount() {
        const {match:{params}}= this.props;
        const {token} = params;
        this.props.accountActivation(token);
    }
    renderSpinner =(attempt, loading)=>{
        if(attempt && loading) return <Spinner/>;
    };
    accountActivated=(attempt, active, message, loading)=>{
        if(attempt && active && !loading){
            return <div className="alert alert-success m-2 text-center">{message}</div>
        }else if(attempt && !active && !loading){
            return <div className="alert alert-danger m-2 text-center">{message}</div>
        }
    };
    render() {
        const {activateAccount} = this.props;
        const {attempt, loading, active, message} = activateAccount;
        return(
            <div className="container">
                {this.renderSpinner(attempt, loading)}
                {this.accountActivated(attempt,active,message,loading)}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        accountActivation:(activate)=>{
            dispatch(AuthActions.activateAccount(activate, ownProps))
        }
    }
};
const mapStateToProps=(state)=>{
    return{
        activateAccount: state.activateAccount
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivateAccount);