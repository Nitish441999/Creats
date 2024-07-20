 export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM" ) {
        return {
            ...state,
            item: state.item.filter((curElem) =>{
                return curElem.id !== action.payload;

            }),

        }
    }
// -----------------------------------increment item in cart-------------------------------------
    if(action.type === "INCREMENT"){
        let updateCart = state.item.map((curElem) => {
            if(curElem.id === action.payload) {
                return {...curElem, quantity: curElem.quantity + 1};
            }
            return curElem;

        })
        return { ...state, item: updateCart };

    }


    // -----------------------------------dicrement item in cart-------------------------------------
    if(action.type === "DICREMENT"){
        let updateCart = state.item.map((curElem) => {
            if(curElem.id === action.payload) {
                return {...curElem, quantity: curElem.quantity - 1};
            }
            return curElem;

        })
        .filter((curElem) =>{
            return curElem.quantity !== 0;
        })
        return { ...state, item: updateCart };

    }
    //----------------------------------increment total item--------------------------------
    if(action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce((accum, curval)=> {
            let { price, quantity } = curval;
            let UpdateTotalAmount = price*quantity;
            accum.totalItem += quantity;
            accum.totalAmount += UpdateTotalAmount;
            return accum;
        },{
            totalItem: 0,
            totalAmount: 0,
        })
        return {...state, totalItem, totalAmount };
    }





    return state;
};