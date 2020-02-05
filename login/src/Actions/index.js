export const FETCH_USER_STRAINS_REQUEST = 'FETCH_USER_STRAINS_REQUEST';
export const fetchUserStrainsRequest = () => ({
    type: FETCH_USER_STRAINS_REQUEST
});

export const FETCH_USER_STRAINS_SUCCESS = 'FETCH_USER_STRAINS_SUCCESS';
export const fetchUserStrainsSuccess = data => ({
    type: FETCH_USER_STRAINS_SUCCESS,
    data
});

export const FETCH_USER_STRAINS_ERROR = 'FETCH_USER_STRAINS_ERROR';
export const fetchUserStrainsError = error => ({
    type: FETCH_USER_STRAINS_ERROR,
    error
});

export const FETCH_STRAINS_REQUEST = 'FETCH_STRAINS_REQUEST';
export const fetchStrainsRequest = () => ({
    type: FETCH_STRAINS_REQUEST
});

export const FETCH_STRAINS_SUCCESS = 'FETCH_STRAINS_SUCCESS';
export const fetchStrainsSuccess = data => ({
    type: FETCH_STRAINS_SUCCESS,
    data
});

export const FETCH_STRAINS_ERROR = 'FETCH_STRAINS_ERROR';
export const fetchStrainsError = error => ({
    type: FETCH_STRAINS_ERROR,
    error
});

export const FETCH_CURRENT_STRAIN_REQUEST = 'FETCH_CURRENT_STRAIN_REQUEST';
export const fetchCurrentStrainRequest = () => ({
    type: FETCH_CURRENT_STRAIN_REQUEST
});

export const FETCH_CURRENT_STRAIN_SUCCESS = 'FETCH_CURRENT_STRAIN_SUCCESS';
export const fetchCurrentStrainSuccess = data => ({
    type: FETCH_CURRENT_STRAIN_SUCCESS,
    data
});

export const FETCH_CURRENT_STRAIN_ERROR = 'FETCH_CURRENT_STRAIN_ERROR';
export const fetchCurrentStrainError = error => ({
    type: FETCH_CURRENT_STRAIN_ERROR,
    error
});

export const REMOVE_STRAIN_FROM_CABINET_SUCCESS = 'REMOVE_STRAIN_FROM_CABINET_SUCCESS';
export const removeStrainFromCabinetSuccess = () => ({
    type: REMOVE_STRAIN_FROM_CABINET_SUCCESS
});

export const REMOVE_STRAIN_FROM_CABINET_ERROR = 'REMOVE_STRAIN_FROM_CABINET_ERROR';
export const removeStrainFromCabinetError = error => ({
    type: REMOVE_STRAIN_FROM_CABINET_ERROR,
    error
})

export const ADD_COMMENT_TO_STRAIN_REQUEST = 'ADD_COMMENT_TO_STRAIN_REQUEST';
export const addCommentToStrainRequest = () => ({
    type: ADD_COMMENT_TO_STRAIN_REQUEST
});

export const ADD_COMMENT_TO_STRAIN_SUCCESS = 'ADD_COMMENT_TO_STRAIN_SUCCESS';
export const addCommentToStrainSuccess = () => ({
    type: ADD_COMMENT_TO_STRAIN_SUCCESS
});

export const ADD_COMMENT_TO_STRAIN_ERROR = 'ADD_COMMENT_TO_STRAIN_ERROR';
export const addCommentToStrainError = error => ({
    type: ADD_COMMENT_TO_STRAIN_ERROR,
    error
});

export const CREATE_STRAIN_REQUEST = 'CREATE_STRAIN_REQUEST';
export const createStrainRequest = () => ({
    type: CREATE_STRAIN_REQUEST
});

export const CREATE_STRAIN_SUCCESS = 'CREATE_STRAIN_SUCCESS';
export const createStrainSuccess = () => ({
    type: CREATE_STRAIN_SUCCESS
});

export const CREATE_STRAIN_ERROR = 'CREATE_STRAIN_ERROR';
export const createStrainError = error => ({
    type: CREATE_STRAIN_ERROR,
    error
})

export const EDIT_STRAIN_REQUEST = 'EDIT_STRAIN_REQUEST';
export const editStrainRequest = () => ({
    type: EDIT_STRAIN_REQUEST
});

export const EDIT_STRAIN_SUCCESS = 'EDIT_STRAIN_SUCCESS';
export const editStrainSuccess = () => ({
    type: EDIT_STRAIN_SUCCESS
});

export const EDIT_STRAIN_ERROR = 'EDIT_STRAIN_ERROR';
export const editStrainError = error => ({
    type: EDIT_STRAIN_ERROR,
    error
});

export const RESET_CURRENT_STRAIN = 'RESET_CURRENT_STRAIN';
export const resetCurrentStrain = () => ({
    type: RESET_CURRENT_STRAIN
});