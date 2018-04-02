import * as React from 'react'
import {Category} from "../../model/category";

interface thisProps {
    category?: Category[],
    includeTab: boolean,
    callBack: any,
    activeTab: number
}

interface thisState {
    activeTab: number
}

export class TabCategory extends React.Component<thisProps, thisState> {

    componentWillMount() {
        this.setState({
            activeTab: 0
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.includeTab ?
                        <ul className="nav nav-tabs">
                            {
                                this.props.category ? this.props.category.map((item, index) => {
                                    return <li
                                        style={{'cursor': 'pointer'}}
                                        className={index == this.props.activeTab ? "active" : ""}
                                        key={index} onClick={() => {
                                        this.props.callBack(item.type, index);
                                    }}><a
                                        data-toggle="tab">{item.name}</a></li>
                                }) : null
                            }
                        </ul>
                        :
                        null
                }
            </div>
        )
    }
}