import * as React from 'react'
import {Book} from "../../model/book";
import {BookItem} from "../book/book-item";
import {Link} from "react-router";

interface thisProps {
    section: string,
    items: Book[],
    redirectUrl?: string
    noRenderMore?: boolean,
    categoryType?: number
}

export class SectionBook extends React.Component<thisProps, {}> {
    render() {
        return (
            <div className="clearfix">
                <div className="row single_category">
                    <h2><span className="bold_line"><span></span></span> <span className="solid_line"></span> <a
                        className="title_text" href="#">{this.props.section}</a></h2><br/>
                    <div>
                        <ul>
                            {
                                this.props && this.props.items ?
                                    this.props.items.map((item, index) => {
                                        return <BookItem key={index} item={item}
                                                         categoryType={this.props.categoryType}/>
                                    }) : null
                            }
                        </ul>
                    </div>
                </div>
                <div className="row text-center" style={{'display': this.props.noRenderMore ? 'none' : ''}}>
                    <Link to={this.props.redirectUrl} className="more-link">Read More</Link>
                </div>
            </div>
        )
    }
}