import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Home} from "./layout/home";
import {Provider} from 'react-redux';
import store from "./store";
import {Router, browserHistory, Route, IndexRoute} from "react-router";
import Landing from "./component/landing/Landing";
import BookDetail from "./component/book/book-detail";
import * as ConstanURL from './constant/apiURL'
import {ReaderLayout} from "./layout/reader-layout";
import ChapterImage from "./component/chapter/chapter-image";
import BookCategory from "./component/book/book-category";
import BookSearchComponent from "./component/search/BookSearchComponent";

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Home}>
                <IndexRoute component={Landing}/>
                <Route path={`${ConstanURL.MANGA_DETAIL_URL}/:bookId/:title`} component={BookDetail}/>
                <Route path=':category(/:tag)' component={BookCategory}/>
                <Route path='story/search/:querySearch' component={BookSearchComponent}/>
            </Route>
            <Route path=':title/chapter/' component={ReaderLayout}>
                <Route path=':chapterId' component={ChapterImage}/>
            </Route>
        </Router>
    </Provider>
,
document.getElementById('example')
);