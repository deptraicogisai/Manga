import * as React from 'react'

export class Placeholder extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <img src="https://loading.io/spinners/flickr/index.orbit-balls-loading-gif.gif" />
            </div>
        )
    }
}