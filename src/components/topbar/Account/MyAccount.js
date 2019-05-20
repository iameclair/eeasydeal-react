import React, {Component} from 'react';
import AccountNavigation from "./AccountNavigation";
import AccountContent from "./AccountContent";
import {connect} from 'react-redux';

class MyAccount extends Component{
    state={
        page: 'myaccount',
        mounted: false,
    };
    componentDidMount(){
        const {match: {params}} = this.props;
        let page = params.page;
        this.setState({page, mounted:true});
    }
    showPageContent=(page, profile)=>{
        return  <AccountContent page={page} profile={profile}/>
    };
    handleNavigation = (page) =>{
        this.setState({page:page})
    };
    render() {
        const {profile} = this.props.auth;
        return(
            <div className="MyAccount m-2">
                <div className="container">
                    <div className="row">
                        <div className="account-navigation col col-sm-3 col-md-3 col-lg-3">
                           <AccountNavigation changePage={this.handleNavigation}/>
                        </div>
                        <div className="account-content col col-sm-9 col-md-9 col-lg-9">
                            {this.state.mounted? this.showPageContent(this.state.page, profile):<div className="d-none"/>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth: state.auth
    }
};
export default connect(mapStateToProps, null)(MyAccount);
