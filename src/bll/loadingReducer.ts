// type initStateType={loading:boolean}
   type initStateType={авокадо:boolean, зелень:boolean}

   const initState:initStateType = {авокадо:true, зелень:true};

export const loadingReducer = (state = initState, action: actionType): initStateType => {
    switch (action.type) {
        case "true": {
            // state={loading:true}
            return state;
        }
        case "false": {
            // state={loading:false}
            return state;
        }
        default: return state;
    }
};

type actionType={type:string}

export const loadingAC = (status:string): actionType => {return {type:status}};
