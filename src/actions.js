export const increase = ()=>{
    
    return {type:"INCREASE"}


}

export const decrease = () =>{

    return {type: "DECREASE" }
}


export const increaseWithDelay = ()=>{
    
    return function(dispatch){
    
        dispatch(increase())
    
    
    };


}

export const decreaseWithDelay = ()=>{


    return function(dispatch) {

        setTimeout(()=>{

            dispatch(decrease())
        }, 2000)

        
    };
}