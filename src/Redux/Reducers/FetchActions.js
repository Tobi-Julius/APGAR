export const FETCH_VALUES = 'FETCH_VALUES'


export const fetchUsers = items => {
    return {
        type: 'FETCH_VALUES',
        payload: items
    }
}

// fetch user from an API