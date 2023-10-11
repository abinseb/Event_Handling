const initialState ={
    eventString:'',
};

const eventReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'SET_EVENT_STRING':
            return{
                ...state,
                eventString:action.payload,
            };
            default:
                return state;
    }
};

export default eventReducer;