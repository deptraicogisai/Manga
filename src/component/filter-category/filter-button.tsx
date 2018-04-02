import * as React from 'react'
import {connect} from 'react-redux';
import {GetBookBaseCategory, GetTags} from "../../action/book-action";
import {Filter} from "../../model/filter";
import * as C from '../../constant/constants';

declare var $: any;

interface thisProps {
    categoryType: number
    filters?: Filter[],
    setTags: any
}

interface thisState {
    isOpen: boolean
}

class FilterButton extends React.Component<thisProps, thisState> {

    showFilter() {
        $('#filterModal').modal('show');
    }

    hideFilter() {
        $('#filterModal').modal('hide');
    }

    filter() {

        let chooseFilter = this.props.filters.filter((item) => {
            return item.isCheck;
        }).map((item) => {
            return item.name
        });

        let filterString = chooseFilter ? chooseFilter.join() : '';

        this.props.GetBookBaseCategory(this.props.categoryType, 1, filterString);

        this.props.setTags(filterString);

        this.hideFilter();
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <a className="more-link" style={{'border': 'none'}} onClick={() => this.showFilter()}>
                        <img src="https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-178_filter-24.png"/>
                    </a>
                </div>
                <div id="filterModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Filter Category</h4>
                            </div>
                            <div className="modal-body" style={{'height': 400, 'overflow': 'scroll'}}>
                                {
                                    this.props && this.props.filters ? this.props.filters.map((item, index) => {
                                        return <div className="col-xs-6 col-sm-4 col-md-3 filter-item animate fadeInUp"
                                                    key={index}><span><input
                                            type="checkbox"
                                            value={item.name}
                                            className="regular-checkbox"
                                            onChange={(e) => item.isCheck = e.target.checked}/> {item.name}</span>
                                        </div>
                                    }) : null
                                }
                            </div>
                            <div className="modal-footer" style={{'border': 'none'}}>
                                <button type="button" className="btn btn-default" onClick={() => this.filter()}>
                                    Filter
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(({book}) => ({
    filters: book.filters
}), {GetTags, GetBookBaseCategory})(FilterButton);