import * as React from 'react'
import * as C from '../../constant/constants';
import {
    FacebookButton,
    GooglePlusButton,
    TwitterButton,
    PinterestButton,
    TumblrButton,
    FacebookCount,
    FacebookComment
} from 'react-social'

export class SocialShareButton extends React.Component<{}, {}> {
    render() {

        var link = "https://github.com/olahol/react-social/", facebookAppId = "1283005528398181",
            message = "React Social!"

        return (
            <div className="animated fadeInUp">
                <FacebookButton title="Share via Facebook" message={message} appId={C.SOCIAL.APP_ID}
                                url={link} element="a" className="social-share">
                    <img src="http://www.zingbox.me/image/comicDetail/facebookIcon.png"/>
                </FacebookButton>
                <GooglePlusButton title="Share via Google+" message={message} url={link} element="a"
                                  className="social-share">
                    <img src="http://www.zingbox.me/image/comicDetail/gIcon.png"/>
                </GooglePlusButton>
                <TwitterButton title="Share via Twitter" message={message} url={link} element="a"
                               className="social-share">
                    <img src="http://www.zingbox.me/image/comicDetail/tiwitterIcon.png"/>
                </TwitterButton>
                <PinterestButton title="Share via Twitter" message={message} url={link} element="a"
                                 className="social-share">
                    <img src="http://www.zingbox.me/image/comicDetail/u783.png"/>
                </PinterestButton>
                <TumblrButton title="Share via Twitter" message={message} url={link} element="a"
                              className="social-share">
                    <img src="http://www.zingbox.me/image/comicDetail/tIcon.png"/>
                </TumblrButton>
            </div>
        )
    }
}