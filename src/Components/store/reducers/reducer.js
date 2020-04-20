import * as actionTypes from '../actions/actionTypes';

const initalState = {
    currentWeather: {},
    forecast: {},
    loading: false,
    error: null
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.GET_WEATHER_START:
            return {
                ...state,
                error: null,
                loading: true
            };
        case actionTypes.GET_WEATHER_SUCCESS:
            return {
                error: null,
                loading: false,
                currentWeather: action.payload.currentWeather,
                forecast: action.payload.forecast
            };
        case actionTypes.GET_WEATHER_FAIL:
            console.log(action);
            return {
                currentWeather: {},
                forecast: {},
                loading: false,
                error: action.payload.message
            };
        default:
            return state;
    }
}



export default reducer;