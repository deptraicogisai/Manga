import * as React from 'react'
import {Book} from "../../model/book";
import {connect} from 'react-redux'
import {GetBookLanding} from "../../action/book-action";
import AdvertisementComponent from '../advertisement/advertisement'
import {SectionBook} from "./section-book";
import * as C from '../../constant/constants';

interface thisProps {
    adventureList: Book[],
    popularList: Book[],
    romanceList: Book[],
    updatedList: Book[]
}

class Landing extends React.Component<thisProps, {}> {

    componentWillMount() {
        this.props.GetBookLanding();
    }

    render() {
        return (
            <div className="container">
                <AdvertisementComponent/>
                <div className="clearfix"></div>
                <SectionBook section={C.Section.LATEST} items={this.props.updatedList} redirectUrl={C.URL.LATEST}/>
                <SectionBook section={C.Section.POPULAR} items={this.props.popularList} redirectUrl={C.URL.POPULAR}/>
                <SectionBook section={C.Section.ADVENTURE} items={this.props.adventureList}
                             redirectUrl={C.URL.POPULAR_ADVENTURE}/>
                <SectionBook section={C.Section.ROMANCE} items={this.props.romanceList}
                             redirectUrl={C.URL.POPULAR_ROMANCE}/>
            </div>
        )
    }
}


export default connect(({book}) => ({
    adventureList: book.adventureList,
    popularList: book.popularList,
    romanceList: book.romanceList,
    updatedList: book.updatedList
}), {GetBookLanding})(Landing);