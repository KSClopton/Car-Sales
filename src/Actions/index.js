import { useDispatch } from 'react-redux'

export const addFeatures = (feature) => {
    return {
        type: 'ADD_FEATURE',
        payload: feature
    }
}

export const removeFeatures = (feature) => {
    return {
        type: 'REMOVE_FEATURE',
        payload: feature
    }
}
