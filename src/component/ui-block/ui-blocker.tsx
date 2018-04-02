import * as React from 'react';
import {Block, Unblock} from "../../action/block";
import {connect} from 'react-redux'

declare var $: any;

interface thisProps {
    currentThread: number;
}

interface thisState {
    currentThread: number,
    element: any
}

class UIBlocker extends React.Component<thisProps, thisState> {
    static instance;

    componentWillMount() {
        UIBlocker.instance = this;

        this.setState({
            element: document.getElementById('ipl-progress-indicator')
        })
    }

    render() {
        if (!this.props.currentThread) {
            this.state.element.classList.add('available')
        }
        else {
            this.state.element.classList.remove('available')
        }

        return null;
    }
}

export default connect(({block}) => ({
    currentThread: block.currentThread
}))(UIBlocker);