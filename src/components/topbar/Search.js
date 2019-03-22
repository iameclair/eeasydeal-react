import React, {PureComponent} from 'react';

class SearchBar extends PureComponent{
    render(){
        return(
            <div className="SearchBar">
                <div className="input-group">
                    <label className="sr-only" htmlFor="searchForm">search box</label>
                    <div className="input-group input-group-container">
                        <input type="text" className="form-control"
                               id="searchForm"
                               placeholder="e.g events near me"/>
                        <div className="input-group-prepend input-group-prepend-container">
                            <div className="input-group-text">
                                Search &nbsp; <i className="fa fa-search"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchBar;