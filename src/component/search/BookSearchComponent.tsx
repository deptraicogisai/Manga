import * as React from 'react'
import {Book} from "../../model/book";
import {SearchBook} from "../../action/book-action";
import {connect} from 'react-redux'

interface thisProps {
    books: Book[]
}

class BookSearchComponent extends React.Component<thisProps, {}> {

    componentDidMount() {
        this.props.SearchBook(this.props.params.querySearch, 1);
    }


    render() {
        return (
            <div>
                {
                    this.props && this.props.books ? this.props.books.map((item, index) => {
                        return item.title
                    }) : null
                }
            </div>
        )
    }
}

export default connect(({book}) => ({
    books: book.books
}), {SearchBook})(BookSearchComponent);