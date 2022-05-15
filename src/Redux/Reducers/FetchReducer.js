import FETCH_VALUES from '../action/type.js'

const initialState = { 
    items: [
        {id: 1, name: 'julius'}
    ]
}


export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_VALUES: 
        return {
            ...state,
            items: action.payload
        }

        default :
        return state
    }
}