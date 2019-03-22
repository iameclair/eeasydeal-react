import React, { Component } from 'react';

class ProductDescription extends Component {
    createMarkup = () =>{
        return {__html: this.props.description}
    };
    render() {
        return (
            <div className="ProductDescription" dangerouslySetInnerHTML={this.createMarkup()} />
        );
    }
}
export default ProductDescription;
