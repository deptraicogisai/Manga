import {put, takeLatest, call} from 'redux-saga/effects';
import {FetchDataServiceInstance} from "../service/fetch-service";
import * as Constant from '../constant/actionType'
import {SearchBook} from "../action/book-action";

function* GetBookLanding() {
    try {
        const result = yield call(FetchDataServiceInstance.GetBookLanding);

        yield put({type: Constant.FETCH_BOOK_LANDING_COMPLETED, book: result});

    } catch (error) {

    }
}

function* GetBookDetail(action) {
    try {
        const result = yield call(FetchDataServiceInstance.GetBookDetail, action.bookId, action.categoryType);

        yield put({type: Constant.FETCH_BOOK_DETAIL_COMPLETED, bookDetail: result});

    } catch (error) {

    }
}

function* GetChapterImage(action) {
    try {
        const result = yield call(FetchDataServiceInstance.GetChapterImages, action.chapterId, action.categoryType);

        yield put({type: Constant.FETCH_CHAPTER_COMPLETE, chapterImages: result.images});

    } catch (error) {

    }
}

function* GetBookBaseCategory(action) {
    try {

        const result = yield call(FetchDataServiceInstance.GetBookBaseCategory, action.categoryType, action.page, action.tags);

        yield put({type: Constant.FETCH_BOOK_BASE_CATEGORY_COMPLETED, books: result.child, page: action.page});

    } catch (error) {

    }
}

function* GetTags(action) {
    try {

        const result = yield call(FetchDataServiceInstance.GetTags, action.extra);

        yield put({type: Constant.FETCH_TAGS_COMPLETE, filters: result.child});

    } catch (error) {

    }
}

function* SearcbBook(action) {
    try {

        const result = yield call(FetchDataServiceInstance.SearchBook, action.querySearch, action.page);

        console.log(result);

        yield put({type: Constant.FETCH_SEARCH_BOOKS_COMPLETE, books: result.child});

    } catch (error) {

    }
}

export function* BookRequest() {

    yield takeLatest(Constant.FETCH_BOOK_LANDING, GetBookLanding);

    yield takeLatest(Constant.FETCH_BOOK_DETAIL, GetBookDetail);

    yield takeLatest(Constant.FETCH_CHAPTER, GetChapterImage);

    yield takeLatest(Constant.FETCH_BOOK_BASE_CATEGORY, GetBookBaseCategory);

    yield takeLatest(Constant.FETCH_TAGS, GetTags);

    yield takeLatest(Constant.FETCH_SEARCH_BOOKS, SearcbBook);

}
