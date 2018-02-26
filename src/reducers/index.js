const defaultState = {
    loading: false,
    APIresponse: {},
    d3: {url: 'https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.min.js'}
};

const mainReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "LOADING":
            if(action.payload === true)
                return {...state, loading: true}
            if(action.payload === false)
                return {...state, loading: false}
        break;
        case "DATA_LOADED":
            if(action.payload)
                return {...state,APIresponse:action.payload}
            else
                return {...state,APIresponse:{}}
        default:
            return {...state};
    }
};

export default mainReducer;
