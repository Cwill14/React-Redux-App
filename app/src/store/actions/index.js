import axios from 'axios'

export const FETCH_GOAT_START = 'FETCH_GOAT_START';
export const FETCH_GOAT_SUCCESS = 'FETCH_GOAT_SUCCESS';
export const FETCH_GOAT_FAILURE = 'FETCH_GOAT_FAILURE';

export const fetchGoat = () => dispatch => {
    dispatch({ type: FETCH_GOAT_START });
    axios
        .get('https://official-joke-api.appspot.com/random_joke')
        .then(res => {
            console.log(res);
            // dispatch({ type: FETCH_GOAT_SUCCESS, payload: res.data.data })
            dispatch({ type: FETCH_GOAT_SUCCESS,
                setup: res.data.setup,
                punchline: res.data.punchline 
            })
            // dispatch({ type: FETCH_GOAT_SUCCESS, payload: res.data.insult })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_GOAT_FAILURE, payload: err })
        })
}