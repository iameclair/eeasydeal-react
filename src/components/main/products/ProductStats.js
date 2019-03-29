import React, {PureComponent} from 'react';

class ProductStats extends PureComponent {
    render() {
        return (
            <div className="ProductStats d-flex justify-content-center align-items-center">
                <div className="stat-item">
                     <span className="text-center">
                     <i className="fa fa-database"/><br/>
                     <span style={{color: '#E50914'}}>13 remaining</span>
                 </span>
                </div>
                <div className="stat-item">
                    <span className="text-center">
                    <i className="fa fa-eye"/><br/> 467 viewed today
                </span>
                </div>
                <div className="stat-item">
                    <span className="text-center">
                         <i className="fa fa-star"/><br/>See all reviews
                    </span>
                </div>
            </div>
        )
    }
}

export default ProductStats;