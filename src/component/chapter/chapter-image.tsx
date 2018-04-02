import * as React from 'react'
import {connect} from 'react-redux'
import {GetChapterImage} from "../../action/book-action";
import ReactImageFallback from "react-image-fallback";
import LazyLoad from 'react-lazyload';
import {Placeholder} from "../placeholder/placeholder";

interface thisProps {
    chapterImages: string[]
    categoryType: number;
}

class ChapterImage extends React.Component<thisProps, {}> {

    componentWillMount() {

        if (this.props.params && this.props.params.chapterId) {

            let chapterId = this.props.params.chapterId;

            let categoryType = +(this.props.params.title[this.props.params.title.length - 1]);

            this.props.GetChapterImage(chapterId, categoryType);
        }
    }

    render() {
        const chapterLength = this.props && this.props.chapterImages ? this.props.chapterImages.length : 0
        return (
            <div className="container text-center">
                {
                    this.props && this.props.chapterImages ?
                        this.props.chapterImages.map((item, index) => {
                            return <div className="chapter-secton" key={index}>
                                <LazyLoad key={index} height={200}
                                          placeholder={<Placeholder/>} debounce={500} once>
                                    <img src={item} className="chapter-image img img-responsive"
                                         style={{'display': 'inline'}}/>
                                </LazyLoad>
                                <div className="chapter-page">
                                    {index + 1}/{chapterLength}
                                </div>
                            </div>
                        }) : null
                }
            </div>
        )
    }
}

export default connect(({book}) => ({
    chapterImages: book.chapterImages
}), {GetChapterImage})(ChapterImage);