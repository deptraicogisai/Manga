import * as Constant from '../constant/actionType'

interface thisState {
    currentThread?: number
}

export default function (state: thisState = {}, action) {
    let currentThread = 0;

    switch (action.type) {
        case Constant.BLOCK_UI:
            currentThread = (state.currentThread ? state.currentThread : 0) + 1;
            return {...state, currentThread};

        case Constant.UNBLOCK_UI:
            currentThread = state.currentThread ? state.currentThread - 1 : 0
            return {...state, currentThread};
    }

    return state;
};

