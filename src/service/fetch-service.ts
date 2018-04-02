import {Advertisement} from "../model/advertisement";
import {ServiceBase} from "./service-base";
import * as APIURL from '../constant/apiURL'
import * as C from '../constant/constants'

class FetchDataService extends ServiceBase {
    //Get advertisement images
    async GetAdvertisements() {

        let requestData = {
            "url": APIURL.API_GETHOME_URL,
            "method": APIURL.GET_METHOD
        };

        return await super.Post(APIURL.BASE_URL, requestData)
    }

    //Get book landing page
    async GetBookLanding() {

        let requestData = {
            "url": APIURL.API_MANGA_HOME_URL,
            "method": APIURL.GET_METHOD,
            "api": APIURL.API
        };

        return await super.Post(APIURL.BASE_URL, requestData)
    }

    //Get book detail by BookId
    async GetBookDetail(bookId: string, categoryType: number) {

        let requestData = {
            "url": `${APIURL.API_MANGA_DETAIL_URL}/${bookId}`,
            "method": APIURL.GET_METHOD,
            "api": APIURL.API
        };

        if (categoryType === C.Category.RECOMMEND || categoryType === C.Category.NEWEST)
            delete requestData.api

        return await super.Post(APIURL.BASE_URL, requestData)
    }

    //Get chapter images
    async GetChapterImages(chapterId: string, categoryType: number) {
        let requestData = {
            "url": `${APIURL.API_MANGA_CHAPTER_URL}/${chapterId}`,
            "method": APIURL.GET_METHOD,
            "api": APIURL.API
        };

        if (categoryType === C.Category.RECOMMEND || categoryType === C.Category.NEWEST)
            delete requestData.api

        return await super.Post(APIURL.BASE_URL, requestData)
    }

    //Get book based on category
    async GetBookBaseCategory(categoryType: number, page: number, tags: string) {

        let url = '';

        switch (categoryType) {
            case C.Category.POPULAR:
                url = APIURL.API_MANGA_POPULAR_URL;
                break;
            case C.Category.LATEST:
                url = APIURL.API_MANGA_LATEST_URL;
                break;
            case C.Category.RECOMMEND:
                url = APIURL.API_MANGA_RECOMMEND_URL;
                break;
            case C.Category.NEWEST:
                url = APIURL.API_MANGA_NEWEST_URL;
                break;
            case C.Category.AZ:
                url = APIURL.API_MANGA_AZ_URL;
                break;
            case C.Category.COMPLETED:
                url = APIURL.API_MANGA_COMPLETED_URL;
                break;
        }

        let requestData = {
            "url": `${url}/${page}?tag=${tags}`,
            "method": APIURL.GET_METHOD,
            "api": APIURL.API
        };

        if (categoryType === C.Category.RECOMMEND || categoryType === C.Category.NEWEST)
            delete requestData.api

        return await super.Post(APIURL.BASE_URL, requestData, false)
    }

    //Get tags
    async GetTags(extra) {

        let requestData = {
            "url": `${APIURL.API_MANGA_TAGS_URL}`,
            "method": APIURL.GET_METHOD,
            "api": APIURL.API
        };

        if (extra != '') {
            requestData.url = '/tags/getTags/3';
            delete  requestData.api;
        }

        return await super.Post(APIURL.BASE_URL, requestData)
    }

    //Get tags
    async SearchBook(queryString: string, page: number) {

        let requestData = {
            "baseUrl": `${APIURL.API_MANGA_SEACH_URL}`,
            "bookPage": page,
            "content": queryString,
            "method": APIURL.GET_METHOD,
            "api": APIURL.API,
            "url": `${APIURL.API_MANGA_SEACH_URL}/${page}?content=${queryString}`
        };

        return await super.Post(APIURL.BASE_URL, requestData)
    }
}

const FetchDataServiceInstance = new FetchDataService();

export {FetchDataServiceInstance}