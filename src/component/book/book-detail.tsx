import * as React from 'react'
import {connect} from 'react-redux'
import {GetBookDetail} from "../../action/book-action";
import {Book} from "../../model/book";
import {FacebookButton, GooglePlusButton, TwitterButton, PinterestButton, TumblrButton} from 'react-social'
import {browserHistory} from 'react-router';
import * as Util from '../../util/MangaUtil'
import ReactImageFallback from "react-image-fallback";
import {ChapterItem} from "../chapter/chapter-item";
import {SocialShareButton} from "../share-button/social-share-button";
import {SocialComments} from "../share-button/social-comments";

interface thisProps {
    bookDetail: Book
    params: any
}

interface thisState {
    categoryType: number
}

class BookDetail extends React.Component<thisProps, thisState> {

    componentWillMount() {

        if (this.props.params && this.props.params.bookId) {
            let bookId = this.props.params.bookId;
            let categoryType = +(this.props.params.title[this.props.params.title.length - 1]);
            this.setState({
                categoryType
            })
            this.props.GetBookDetail(bookId, categoryType);
        }
    }

    render() {
        let renderDetail = null;

        if (this.props && this.props.bookDetail) {

            const chapterId = this.props.bookDetail.child.reverse()[0].chapterId;

            renderDetail = <div>
                <div className="col-xs-12 col-sm-4 col-md-3 single-top-left">
                    <ReactImageFallback
                        src={this.props.bookDetail.cover}
                        fallbackImage="http://www.zingbox.me/image/index/default.jpg"
                        initialImage="http://www.zingbox.me/image/index/default.jpg"
                        className="img img-responsive"
                    />

                </div>
                <div className="col-xs-12 col-sm-8 col-md-9 single-text">
                    <div className="details-left-info simpleCart_shelfItem">
                        <h3>{this.props.bookDetail.title}</h3>
                        <p className="availability">Author: <span
                            className="color">{this.props.bookDetail.author}</span></p>
                        <p className="availability">Status: <span
                            className="color">{this.props.bookDetail.updateStatus}</span></p>
                        <p className="availability">Category: <span
                            className="color">{this.props.bookDetail.tags}</span></p>
                        <p className="availability">Update: <span
                            className="color">{this.props.bookDetail.updateDate}</span></p>
                        <p className="availability">Views: <span className="color">{this.props.bookDetail.views}</span>
                        </p>
                        <h2 className="quick">Description</h2>
                        <p className="quick_desc"> {this.props.bookDetail.summary}</p>
                        <div className="row">
                            <div className="col-xs-3 col-sm-4 col-md-4">
                                <div className="single-but item_add">
                                    <input type="submit" value="Read"
                                           onClick={() => browserHistory.push(`/${Util.WordReplace(this.props.bookDetail.title, " ", "_")}_${this.state.categoryType ? this.state.categoryType : ''}/chapter/${chapterId}`)}/>
                                </div>
                            </div>
                            <div className="col-xs-9 col-sm-8 col-md-8 text-right">
                                <SocialShareButton/>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        }

        return (
            <div>
                {
                    this.props && this.props.bookDetail ?
                        renderDetail : null
                }
                <div className="clearfix"></div>
                <div className="row single_category">
                    <h2><span className="bold_line"><span></span></span> <span className="solid_line"></span> <span
                        className="title_text">Chapter List ({this.props && this.props.bookDetail ? this.props.bookDetail.child.length : 0})</span>
                    </h2><br/>
                    <ul>
                        {
                            this.props && this.props.bookDetail ?
                                this.props.bookDetail.child.map((item, index) => {
                                    return <ChapterItem chapter={item} key={index}
                                                        title={Util.WordReplace(this.props.bookDetail.title, " ", "_")}/>
                                }) : null
                        }
                    </ul>
                </div>
                <div>
                    <SocialComments url='https://twitter.com/'></SocialComments>
                </div>
            </div>
        )
    }
}

export default connect(({book}) => ({
    bookDetail: book.bookDetail
}), {GetBookDetail})(BookDetail);