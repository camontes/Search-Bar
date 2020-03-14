
const defaultState = {
    data:[],
    filter: "all",
    isLoading: true
}

export default (state = defaultState, action) => {

    switch(action.type){
        case 'FETCH_USERS':
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case 'CHANGE_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
}

