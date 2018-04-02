import * as React from 'react'
import {Chapter} from "../../model/chapter";
import {Link} from "react-router";
import * as Util from '../../util/MangaUtil'

interface thisProps {
    chapter: Chapter,
    title: string
}

export class ChapterItem extends React.Component<thisProps, {}> {
    render() {
        let {chapterId, title, summary} = this.props.chapter;

        let originSummary = summary;

        summary = summary ? " - " + summary : '';

        return (
            <li className="col-xs-12 col-sm-4 col-md-4 chapter-item animated fadeInRight">
                <span className="glyphicon glyphicon-certificate"></span>
                <Link to={`/${this.props.title}/chapter/${chapterId}`} title={originSummary}>
                    Chapter {title}{Util.WordSubstring(summary, 30)}
                </Link>
            </li>
        )
    }
}