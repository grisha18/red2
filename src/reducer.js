

export const initialState = {
    number: 2


};


export const reducer = (state, action)=>{
    switch(action.type){
        case "INCREASE":
            const newState = {...state};
            newState.number = newState.number + 1;
            return newState;
        case "DECREASE":
            return {...state, number: state.number-1}
        default:
            return state;
    }

}

