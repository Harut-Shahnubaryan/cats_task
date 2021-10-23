const data = {
    
}

export default function authReducer(state=data,action){
    const temp = {...state}

    switch (action.type) {
        case "catsDataFn":
        return temp;


        default:
            return temp
    }
}