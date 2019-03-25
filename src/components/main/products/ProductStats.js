import React, {PureComponent} from 'react';

class ProductStats extends PureComponent {
    render() {
        return (
            <div className="ProductStats">
                 <span className="text-center">
                     <i className="fa fa-database fa-2x"/><br/>
                     <span style={{color: '#E50914'}}>13 remaining</span>
                 </span>
                <span className="text-center">
                    <i className="fa fa-eye fa-2x"/><br/> 467 viewed today
                </span>
                <span className="text-center">
                    <i className="fa fa-star fa-2x"/><br/>See all reviews
                </span>
            </div>
        )
    }
}

export default ProductStats;