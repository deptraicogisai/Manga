import * as React from 'react'
import {Book} from "../../model/book";
import {connect} from 'react-redux';
import {GetBookBaseCategory, GetTags} from "../../action/book-action";
import * as C from '../../constant/constants';
import {SectionBook} from "../landing/section-book";
import {InfiniteScroll} from "../infinite-scroll/infinite-scroll";
import FilterButton from "../filter-category/filter-button";
import {TabCategory} from "../tabs/tab-category";
import {Category} from "../../model/category";
import {Filter} from "../../model/filter";


interface thisProps {
    books: Book[],
    params: any,
    filters: Filter[]
}

interface thisState {
    page: number,
    activeTab: number
    tags: string,
    section: string,
    categoryType: number,
    path: string,
    includeTab: boolean,
    category?: Category[]
}

class BookCategory extends React.Component<thisProps, thisState> {

    componentWillMount() {

        this.setState({
            page: 1,
            tags: '',
            section: C.Section.POPULAR,
            categoryType: C.Category.POPULAR,
            path: this.props.location.pathname,
            includeTab: false,
            activeTab: 0
        }, () => {
            this.receiveProps(this.props);
        })
    }

    receiveProps(props) {
        if (props.params && props.params.category) {

            const {category} = props.params;

            let section = C.Section.POPULAR;

            let categoryType = C.Category.POPULAR;

            let includeTab = false;

            let categories = [];

            if (category.toString().toUpperCase().indexOf('LATEST') > -1) {

                categoryType = C.Category.LATEST;

                section = C.Section.LATEST;

            } else if (category.toString().toUpperCase().indexOf('DIRECTORY') > -1) {

                includeTab = true

                categoryType = C.Category.POPULAR;

                section = C.Section.POPULAR;

                categories = C.Section_Directory;
            } else if (category.toString().toUpperCase().indexOf('STORY') > -1) {
                includeTab = true

                categoryType = C.Category.RECOMMEND;

                section = C.Section.RECOMMEND;

                categories = C.Section_Original;
            }

            if (categoryType != C.Category.RECOMMEND && categoryType != C.Category.NEWEST)
                this.props.GetTags('');
            else
                this.props.GetTags("/3");

            this.setState({
                ...this.state,
                page: 1,
                activeTab: 0,
                section,
                categoryType,
                includeTab,
                category: categories
            }, () => {
                this.loadData();
            });
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (this.state.path != nextProps.location.pathname) {

            this.setState({
                path: nextProps.location.pathname
            }, () => {
                this.receiveProps(nextProps);
            })


        }
    }

    callBackLoadData(categoryType, activeTab) {
        this.setState({...this.state, page: 1, categoryType, activeTab}, () => {
            this.loadData();
        });
    }

    setTags(tags) {
        this.setState({
            tags: tags
        })
    }

    loadMore() {
        this.setState({
                ...this.state,
                page: this.state.page + 1
            },
            () => {
                this.loadData();
            }
        )
    }

    loadData() {
        this.props.GetBookBaseCategory(this.state.categoryType, this.state.page, this.state.tags);
    }

    render() {
        return (
            <div>
                <TabCategory includeTab={this.state.includeTab} category={this.state.category}
                             callBack={(x, y) => this.callBackLoadData(x, y)} activeTab={this.state.activeTab}/>
                <div>
                    <FilterButton categoryType={this.state.categoryType} setTags={(tags) => this.setTags(tags)}
                                  filters={this.props.filters}/>
                </div>
                <InfiniteScroll loadMore={() => this.loadMore()} hasMore={true}>
                    <SectionBook categoryType={this.state.categoryType} section={this.state.section}
                                 items={this.props.books} noRenderMore={true}/>
                </InfiniteScroll>
            </div>
        )
    }
}

export default connect(({book}) => ({
    books: book.books
}), {GetBookBaseCategory, GetTags})(BookCategory);