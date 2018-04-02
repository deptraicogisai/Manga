import * as Constant from '../constant/actionType'
import {Advertisement} from "../model/advertisement";
import {Book} from "../model/book";
import {Filter} from "../model/filter";

interface thisState {
    adventureList?: Book[],
    popularList?: Book[],
    romanceList?: Book[],
    updatedList?: Book[],
    bookDetail?: Book,
    chapterImages?: string[],
    books?: Book[],
    filters?: Filter[]
}

export default function (state: thisState = {}, action) {
    switch (action.type) {

        case Constant.FETCH_BOOK_LANDING_COMPLETED:
            const {adventureList, popularList, romanceList, updatedList} = action.book;
            return {...state, adventureList, popularList, romanceList, updatedList};

        case Constant.FETCH_BOOK_DETAIL_COMPLETED:
            const {bookDetail} = action;
            return {...state, bookDetail};

        case Constant.FETCH_CHAPTER_COMPLETE:
            const {chapterImages} = action;
            return {...state, chapterImages};

        case Constant.FETCH_SEARCH_BOOKS_COMPLETE:
        case Constant.FETCH_BOOK_BASE_CATEGORY_COMPLETED:
            let {books} = action;

            if (action.page == 1) {
                state.books = [];
            }

            if (state.books) {
                books = state.books.concat(books);
            }
            return {...state, books};

        case Constant.FETCH_TAGS_COMPLETE:
            const {filters} = action;
            return {...state, filters};
    }

    return state;
};
