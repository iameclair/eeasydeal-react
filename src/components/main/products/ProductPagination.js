import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {ProductAction} from "../../../actions/ProductAction";

class ProductPagination extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1 ,
            firstPage: 1,
            lastPage: 0,
            disable: false
        };
    }
    componentDidMount() {
        let currentPage = this.props.currentPage;
        console.log("The component is mounted now");
        this.trackCurrentPage(currentPage);
    }

    gotoPage = page => {
        this.props.fetchProductOfPage(page);
    };

    getNumberOfPages=(pages, i= 1)=> {
        console.log("number of pages: ", pages, "index: ", i);
        let ranges = [];
        while (i <= pages){
            ranges.push(i);
            i+=1;
        }
        return ranges;
    };
    handleClick=(page, evt)=>{
        evt.preventDefault();
        console.log("Handle click: ", page);
        this.gotoPage(page);
    };
    trackCurrentPage = curr =>{
        if(curr === 1){
            let link =  document.getElementById("previous-link");
            link.style.display="none";
        }
        if(curr > 1){
            let link =  document.getElementById("previous-link");
            link.style.display="block";
        }
    };
    render(){
        let numberOfPages = this.getNumberOfPages(this.props.numberOfPages);
        let currentPage = this.props.currentPage;
        let lastPage = this.props.lastPage;
        return(
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="prev page-item" id="previous-link" onClick={e => this.handleClick(currentPage-1, e)}>
                        <button className="page-link">&lt;</button>
                    </li>
                    <li className="first page-item" onClick={e => this.handleClick(1, e)}>
                        <button className="page-link">&lt;&lt;</button>
                    </li>
                    {numberOfPages.map((value, index) =>
                        <div key={index}>
                            <li className="page-item" onClick={e => this.handleClick(value, e)}>
                                <button className="page-link">{value}</button>
                            </li>
                        </div>)}
                    <li className="next" onClick={e => this.handleClick(currentPage+1, e)}>
                        <button className="page-link">&gt;</button>
                    </li>
                    <li className="last" onClick={e => this.handleClick(lastPage, e)}>
                        <button className="page-link">&gt;&gt;</button>
                    </li>
                </ul>
            </nav>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchProductOfPage: (page) =>{
            dispatch(ProductAction.getProductsOfPage(page))
        }
    }
};

const mapStateToProps=(state)=>{
    return{
        products: state.products
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductPagination)