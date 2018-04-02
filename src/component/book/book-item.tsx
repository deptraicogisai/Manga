import * as React from 'react'
import {Book} from "../../model/book";
import * as Util from '../../util/MangaUtil'
import {Link} from "react-router";
import * as ConstanURL from '../../constant/apiURL'
import ReactImageFallback from "react-image-fallback";

interface thisProps {
    item: Book,
    categoryType?: number
}

export class BookItem extends React.Component<thisProps, {}> {
    render() {
        return (
            <li className="col-xs-12 col-sm-4 col-md-3 fadeInRight animated" style={{'minHeight': '350px'}}>
                <div className="catgimg2_container">
                <ReactImageFallback
                    src={this.props.item.cover}
                    fallbackImage="http://www.zingbox.me/image/index/default.jpg"
                    initialImage="http://www.zingbox.me/image/index/default.jpg"
                    alt="cool image should be here"
                />
            </div>
                <h4 className="catg_titile">
                    <Link
                        to={`${ConstanURL.MANGA_DETAIL_URL}/${this.props.item.bookId}/${Util.WordReplace(this.props.item.title, " ", "_")}_${this.props.categoryType ? this.props.categoryType : ''}`}>
                        {Util.WordSubstring(this.props.item.title, 15)}
                    </Link>
                </h4>
                <div className="author">
                    <span>{this.props.item.author ? this.props.item.author.substr(0.20) : Util.WordSubstring(this.props.item.tag, 20)}</span>
                </div>
                <div className="meta"><span className="meta_view">{this.props.item.views}</span><span
                    className="meta_chapter">{this.props.item.latestChapter}</span>
                </div>
            </li>
        )
    }
}