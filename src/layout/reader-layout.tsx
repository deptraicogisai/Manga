import * as React from 'react'
import {ScrollTop} from "../component/scroll-to-top/scrollTop";
import UIBlocker from "../component/ui-block/ui-blocker";

export class ReaderLayout extends React.Component<{},{}>{

    componentWillMount(){
        document.body.style.backgroundColor = 'black';
    }

    render(){
        return(
            <div className="container reader-layout">
                {this.props.children}
                <UIBlocker/>
                <ScrollTop/>
            </div>
        )
    }
}