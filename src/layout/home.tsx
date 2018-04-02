import * as React from 'react'
import {Header} from "../component/header/header";
import UIBlocker from "../component/ui-block/ui-blocker";
import {ScrollTop} from "../component/scroll-to-top/scrollTop";

export class Home extends React.Component<{}, {}> {

    componentWillMount(){
        document.body.style.backgroundColor = '';
    }

    render() {
        return (
            <div className="container">
                <Header/>
                {this.props.children}
                <UIBlocker/>
                <ScrollTop/>
            </div>
        )
    }
}