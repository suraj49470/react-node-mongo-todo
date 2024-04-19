import { GET_PROFILE,LOADING_PROFILE } from "../utils/actions";

export const profile = (state,action) => {
    
    switch (action.type) {
        case GET_PROFILE:
            return {
                isLoading:false,
                isError:false,
                error:'',
                profile:action.payload
            }
        case LOADING_PROFILE:
            return {
                isLoading:false,
                isError:false,
                error:'',
                profile:action.payload
            }
    
        default:
            return state;
    }
}