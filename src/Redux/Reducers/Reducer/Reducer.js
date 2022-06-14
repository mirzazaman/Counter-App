let intialState={
    count : 0
}
// console.log(intialState);

function reducer(state = intialState, action) {
    switch (action.type) {
        case "INCREAMENT_DECREAMENT":
            let newState = {
                count : action.payload
            }
            // console.log(newState);
            return newState;
    
        default:
            return state;
    }
}

export default reducer;