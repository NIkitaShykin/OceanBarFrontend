type initStateType = [{},{},{}]
const initState: initStateType = [
    {user:"email"},
    {dishId:0},
    {ingredients:[{name: "ингридиент1", isAdded: true},{name: "ингридиент2", isAdded: true}]}
]



export const cartReducer = (state = initState, action: actionType): initStateType => {
    switch (action.type) {
        case "addIngridient": {
           
           console.log(action.orderedDish);
             
           return {...action.orderedDish}
        }
        // case "false": {
        //     // state={loading:false}
        //     return state;
        // }
        default: return state
    }
}

type actionType = any

export const updateIngridientsAC = (orderedDish: object): actionType => { return { type: "addIngridient", orderedDish} };
