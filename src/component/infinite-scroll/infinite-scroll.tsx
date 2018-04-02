import * as React from 'react'

declare var $: any


interface thisProps {
    hasMore: boolean,
    loadMore: any
}

export class InfiniteScroll extends React.Component<thisProps, {}> {

    scrollListener = () => {
        if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
            this.props.loadMore();
        }
    }

    attachScrollListener() {
        window.addEventListener('scroll', this.scrollListener);
        window.addEventListener('resize', this.scrollListener);
    }

    detachScrollListener() {
        window.removeEventListener('scroll', this.scrollListener);
        window.removeEventListener('resize', this.scrollListener);
    }


    componentWillUnmount() {
        this.detachScrollListener();
    }

    componentDidMount() {
        this.attachScrollListener();
    }


    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}