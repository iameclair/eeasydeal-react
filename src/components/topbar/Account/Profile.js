import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <div className="profile-personal-info">
                    <h3>Personal Info</h3>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="FirstName" className="col-sm-2 col-form-label">First name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" value="Eclair"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="LastName" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" value="Lumu"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="EmailAddress" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3"
                                       value="eclairlumu@gmail.com"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="profile-personal-info">
                    <h3>Address</h3>
                    <form>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="Address">Address</label>
                                <input type="text" className="form-control" placeholder="Address"/>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" placeholder="City"/>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="postcode">Postcode</label>
                                <input type="text" className="form-control" placeholder="Post code" required/>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="country">Country</label>
                                <input type="text" className="form-control" placeholder="Country" required/>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block" type="submit">Update</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile;
