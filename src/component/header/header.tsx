import * as React from 'react'
import './memenu.css';
import {Link} from "react-router";
import * as C from '../../constant/constants';
import {browserHistory} from 'react-router';


interface thisState {
    search: string
}

export class Header extends React.Component<{}, thisState> {

    render() {
        return (
            <div>
                <div className="logo">
                    <a href="/"><h1>Manga Book Online</h1></a>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="header">
                            <div className="col-xs-12 col-md-8 header-left">
                                <div className="top-nav">
                                    <ul className="memenu skyblue">
                                        <li className="grid col-xs-12 col-sm-2 col-md-2">
                                            <Link to={`${C.URL.POPULAR}`}>
                                                Popular
                                            </Link>
                                        </li>
                                        <li className="grid col-xs-12 col-sm-2 col-md-2">
                                            <Link to={`${C.URL.LATEST}`}>
                                                Latest
                                            </Link>
                                        </li>
                                        <li className="grid col-xs-12 col-sm-2 col-md-2">
                                            <Link to={`${C.URL.DIRECTORY}`}>
                                                Directory
                                            </Link>
                                        </li>
                                        <li className="grid col-xs-12 col-sm-2 col-md-2">
                                            <Link to={`${C.URL.Original}`}>
                                                Original
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-xs-12 col-md-4 header-right">
                                <form action="" className="search-form" onSubmit={e => {
                                    e.preventDefault();
                                }}>
                                    <div className="form-group has-feedback">
                                        <label className="sr-only">Search</label>
                                        <input type="text" className="form-control" name="search" id="search"
                                               placeholder="Search titles or authors"
                                               onChange={(e) => {
                                                   this.setState({
                                                       search: e.target.value
                                                   })
                                               }}
                                               onKeyPress={(e) => {
                                                   if (e.key == 'Enter') {
                                                       browserHistory.push(`${C.URL.SEARCH_BOOK}/${this.state.search}`)
                                                   }
                                               }}
                                        />
                                        <span className="fa fa-search form-control-feedback"></span>
                                    </div>
                                </form>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
