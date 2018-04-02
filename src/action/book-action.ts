import * as Constant from '../constant/actionType'

export const GetBookLanding = () => ({
    type: Constant.FETCH_BOOK_LANDING
});

export const GetBookDetail = (bookId: string, categoryType) => ({
    type: Constant.FETCH_BOOK_DETAIL,
    bookId,
    categoryType
});

export const GetChapterImage = (chapterId: string, categoryType) => ({
    type: Constant.FETCH_CHAPTER,
    chapterId: chapterId,
    categoryType
});

export const GetBookBaseCategory = (categoryType: number, page: number, tags: string) => ({
    type: Constant.FETCH_BOOK_BASE_CATEGORY,
    categoryType,
    page: page,
    tags: tags
});

export const GetTags = (extra) => ({
    type: Constant.FETCH_TAGS,
    extra: extra
});

export const SearchBook = (querySearch: string, page: number) => (
    {
        type: Constant.FETCH_SEARCH_BOOKS,
        querySearch,
        page
    }
)