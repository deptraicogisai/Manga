import * as Constant from '../constant/actionType'
import {Advertisement} from "../model/advertisement";

interface thisState {
    adverts?: Advertisement;
    bigEyes?: Advertisement
}

export default function (state: thisState = {}, action) {
    switch (action.type) {
        case Constant.FETCH_ADVERTISEMENTS_COMPLETED:
            const {adverts, bigEyes} = action.advertisement;
            return {...state, adverts, bigEyes};
    }

    return state;
};
