import * as React from 'react'

declare var $: any;

interface thisState {
    showButtonTop: boolean
}

export class ScrollTop extends React.Component<{}, thisState> {

    scrollListener = () => {
        if ($(document).height() - 1000 <= $(window).scrollTop() + $(window).height()) {
            this.setState({
                showButtonTop: true
            })
        } else {
            this.setState({
                showButtonTop: false
            })
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

    scrollToTop() {
        $('html,body').animate({scrollTop: 0});
    }


    render() {
        return (
            <div>
                <a onClick={() => this.scrollToTop()}
                   className={this.state && this.state.showButtonTop ? 'return-to-top animated fadeInUp' : ' fadeOutUp'}><i
                    className="fa fa-chevron-up"></i></a>
            </div>
        )
    }
}