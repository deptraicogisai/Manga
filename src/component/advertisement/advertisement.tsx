import * as React from 'react'
import {connect} from 'react-redux'
import {GetAdvertisement} from "../../action/advertisement-action";
import {Advertisement} from "../../model/advertisement";
declare var $: any;

interface thisProps {
    adverts?: Advertisement[];
    bigEyes?: Advertisement[]
}


interface HState {
    bigEyes: string[],
    adverts: string[]
}


class AdvertisementComponent extends React.Component<thisProps, HState> {

    componentWillMount() {
        this.setState({
            bigEyes: [
                    'http://h.zingbox.me/avatar/images/fames/bigeye/B/b0284395-0120-46c4-ae2a-b290ef1019d3.jpg',
                'http://h.zingbox.me/avatar/images/fames/bigeye/B/a0011d87-0575-4579-8f5d-6764e24bb041.jpg'
            ],
            adverts: [
                'http://h.zingbox.me/avatar/images/fames/bigeye/A/80ae1593-6808-4728-b8ad-fc1784e9bf3a.jpg',
                'http://h.zingbox.me/avatar/images/fames/bigeye/A/1eee37f7-dd0e-4640-a2e8-46b61513bb29.jpg',
                'http://h.zingbox.me/avatar/images/fames/bigeye/A/12e2ce14-9f98-45f4-8375-6a434e388d22.jpg'
            ]
        }, () => {
            $('.flexslider').flexslider();
        })

       // this.props.GetAdvertisement();
    }

    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-9 col-md-9">
                    <div id="slider" className="flexslider">
                        <ul className="slides">
                            {
                                this.state.bigEyes ?
                                    this.state.bigEyes.map((item, index) => {
                                        return <li key={index}><img
                                            src={item}/></li>
                                    }) : <li><img
                                        src='http://h.zingbox.me/avatar/images/fames/bigeye/B/b0284395-0120-46c4-ae2a-b290ef1019d3.jpg'/>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3 advertisement">
                    <ul>
                        {
                            this.state.adverts ?
                                this.state.adverts.map((item, index) => {
                                    return <li key={index}><img
                                        src={item} width='300' height='125'/></li>
                                }) : <li><img
                                    src='http://h.zingbox.me/avatar/images/fames/bigeye/B/b0284395-0120-46c4-ae2a-b290ef1019d3.jpg'/>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(({advertisement}) => ({
    adverts: advertisement.adverts,
    bigEyes: advertisement.bigEyes
}), {GetAdvertisement})(AdvertisementComponent);