type initStateType = {}
// const initState: initStateType = {авокадо: true, зелень: true}
const initState: initStateType = {}

// [{id:5},{авокадо: true, зелень: true}]
// [5,[авокадо, зелень, рис]

export const ingridientsReducer = (state = initState, action: actionType): initStateType => {
    switch (action.type) {
        case "addIngridient": {
           
           console.log(action.ingridients);
             
            return {...action.ingridients}
        }
        // case "false": {
        //     // state={loading:false}
        //     return state;
        // }
        default: return state
    }
}

type actionType = any

export const updateIngridientsAC = (ingridients: object): actionType => { return { type: "addIngridient", ingridients} };
