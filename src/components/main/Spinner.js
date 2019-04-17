import React, {PureComponent, Fragment} from 'react';

class Spinner extends PureComponent{
    render() {
        return(
            <Fragment>
                <div className="loader"/>
            </Fragment>
        )
    }
}

export default Spinner;