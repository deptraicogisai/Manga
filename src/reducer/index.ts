import {combineReducers} from "redux";
import advertisement from '../reducer/advertisement-reducer'
import book from '../reducer/book-reducer'
import block from '../reducer/block-reducer'

export default combineReducers({
    advertisement,
    book,
    block
})