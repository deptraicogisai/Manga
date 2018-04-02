import {put, takeLatest, call} from 'redux-saga/effects';
import {FetchDataServiceInstance} from "../service/fetch-service";
import * as Constant from '../constant/actionType'

function* getAdvertisements() {
    try {
        const result = yield call(FetchDataServiceInstance.GetAdvertisements);

        yield put({type: Constant.FETCH_ADVERTISEMENTS_COMPLETED, advertisement: result});

    } catch (error) {

    }
}

export function* AdvertisementRequest() {
    yield takeLatest(Constant.FETCH_ADVERTISEMENTS, getAdvertisements);

}
