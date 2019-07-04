
import { HANDLE_ACTIVE, ADD_CARD} from './action-types/cart-actions'

export const handleActive= (id)=>{
    return{
        type: HANDLE_ACTIVE,
        id
    }
}

export const addCard= (id)=>{
    return{
        type: ADD_CARD,
        id
    }
}

