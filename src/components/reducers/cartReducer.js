import { HANDLE_ACTIVE, ADD_CARD } from '../actions/action-types/cart-actions'
import Item1 from '../../images/item1.PNG'
import Item2 from '../../images/item2.PNG'
import Item3 from '../../images/item3.PNG'
import ItemVisa from '../../images/visa.png'
import ItemMaster from '../../images/master.png'


const initState = {
    items: [
        {id:1,title:'New Balance Czarne', desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore, provident nemo iusto impedit itaque reprehenderit non perferendis aperiam.", price:110,img:Item1},
        {id:2,title:'New Balance Białe', desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore, provident nemo iusto impedit itaque reprehenderit non perferendis aperiam.", price:80,img: Item2},
        {id:3,title:'New Balance Czerwone', desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore, provident nemo iusto impedit itaque reprehenderit non perferendis aperiam.",price:120,img: Item3},
    ],
    cards: [
        {id:1, cvv:341, number: "5555 5555 5555 4444", expired:"12/23",name:"Lee M. Cardholder", imgvisa:ItemVisa, imgmaster:ItemMaster, active: true},
        {id:2, cvv:225, number: "4111 1111 1111 1111", expired:"04/25",name:"Lee M. Cardholder", imgvisa:ItemVisa, imgmaster:ItemMaster, active: false},
    ],

    total: 0
}

var active;

function changeActive(card) {
    card.active = (card.id === active);
    return card;

}

const cartReducer= (state = initState, action)=>{

    if(action.type === HANDLE_ACTIVE){
        active = action.id;
        return{
            ...state,
            cards: state.cards.map(changeActive)
        }
    }
    if(action.type === ADD_CARD){
        return{
            ...state, cards: [...state.cards, action.id]
        }
    }

    else
    {
        return state
    }
    
}

export default cartReducer
