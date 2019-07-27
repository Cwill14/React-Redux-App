import {
    FETCH_GOAT_START,
    FETCH_GOAT_SUCCESS,
    FETCH_GOAT_FAILURE
} from '../actions';

export const initialState = {
    lookingForGoat: false,
    oopsie: "",
    goatSetup: "",
    goatPunchline: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
        case FETCH_GOAT_START:
            return {
                lookingForGoat: true,
                oopsie: "",
                goatSetup: "",
                goatPunchline: ""
            }
        case FETCH_GOAT_SUCCESS:
            return {
                lookingForGoat: false,
                oopsie: "",
                goatSetup: action.setup,
                goatPunchline: action.punchline
            }
        case FETCH_GOAT_FAILURE:
            return {
                lookingForGoat: false,
                oopsie: action.payload,
                goatSetup: "",
                goatPunchline: ""
            }
    }
}