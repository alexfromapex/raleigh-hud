import axios from 'axios';

export function apiRequest(url = 'https://data.raleighnc.gov/resource/a95t-r2n7.json') {
    return (dispatch) => {
        axios.get(url).then((response) => {
            dispatch(loadData(response));
        });
    }
}

export function loadData(response) {
    return {
        type: "DATA_LOADED",
        payload:response.data
    };
}
