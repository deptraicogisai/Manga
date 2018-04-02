import * as React from 'react'
import * as C from '../../constant/constants';
import FacebookProvider, {Comments, EmbeddedPost} from 'react-facebook';

interface thisProps {
    url: string
}

export class SocialComments extends React.Component<thisProps, {}> {
    render() {
        return (
            <FacebookProvider appId={C.SOCIAL.APP_ID}>
                <Comments href={this.props.url}/>
            </FacebookProvider>
        )
    }
}