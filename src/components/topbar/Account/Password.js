import React, {PureComponent} from 'react';

class Password extends PureComponent {
    render() {
        return (
            <div className="Password">
                <h3>Change your password</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="current" className="col-sm-2 col-form-label">Current Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputEmail3" placeholder="Current Password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="new" className="col-sm-2 col-form-label">New Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputEmail3" placeholder="New Password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="retype" className="col-sm-2 col-form-label">Retype New Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputEmail3" placeholder="Retype New Password"/>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">Update Password</button>
                </form>
            </div>
        )
    }
}

export default Password;
