import { 
    ADD_STRAIN_TO_CABINET_REQUEST,
    ADD_STRAIN_TO_CABINET_SUCCESS,
    ADD_STRAIN_TO_CABINET_ERROR,
    CREATE_STRAIN_REQUEST,
    CREATE_STRAIN_SUCCESS,
    CREATE_STRAIN_ERROR,
    FETCH_USER_STRAINS_REQUEST, 
    FETCH_USER_STRAINS_SUCCESS, 
    FETCH_USER_STRAINS_ERROR,
    FETCH_STRAINS_REQUEST,
    FETCH_STRAINS_SUCCESS,
    FETCH_STRAIN_ERROR,
    FETCH_STRAIN_FLAVORS,
    FETCH_STRAIN_EFFECTS,
    FETCH_CURRENT_STRAIN_REQUEST,
    FETCH_CURRENT_STRAIN_SUCCESS,
    FETCH_CURRENT_STRAIN_ERROR,
    EDIT_STRAIN_REQUEST,
    EDIT_STRAIN_SUCCESS,
    EDIT_STRAIN_ERROR,
    RESET_CURRENT_STRAIN,
    FILTER_USER_STRAINS_REQUEST,
    FILTER_USER_STRAINS_SUCCESS,
    FILTER_USER_STRAINS_ERROR,
    CLEAR_FEEDBACK,
    NEWUSER_SIGNUP_START, NEWUSER_SIGNUP_SUCCESS, NEWUSER_SIGNUP_FAILURE, USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT_START, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE, POST_STRAIN_START, POST_STRAIN_SUCCESS, POST_STRAIN_FAILURE
} from '../Actions/index';

const initialState = {
    data: [],
    isFetching: false,
    error: '',
    userData: {},
    getUserData: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEWUSER_SIGNUP_START: 
            return {
                ...state,
                isFetching: true
            };
        case NEWUSER_SIGNUP_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                error: ''
            };
        case NEWUSER_SIGNUP_FAILURE: 
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case USER_LOGIN_START:
            return {
                ...state,
                isFetching: true
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case USER_LOGOUT_START:
            return {
                ...state,
                isFetching: true
            };
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case USER_LOGOUT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case POST_STRAIN_START:
            return {
                ...state,
                isFetching: true
            };
        case POST_STRAIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case POST_STRAIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};
export default reducer;

// const initialState = {
//     strains: [],
//     userStrains: [],
//     currentStrain: null,
//     loading: false,
//     feedback: null,
//     error: null
// }

// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case FETCH_USER_STRAINS_REQUEST:
//             return Object.assign({}, state, {
//                 loading: true,
//                 feedback: null,
//                 error: null
//             });
//         case FETCH_USER_STRAINS_SUCCESS:
//             return Object.assign({}, state, {
//                 loading: false,
//                 userStrains: action.data.strains
//             });
//         case FETCH_USER_STRAINS_ERROR:
//             return Object.assign({}, state, {
//                 loading: false,
//                 error: action.error.message
//             });
//         case FETCH_STRAINS_REQUEST:
//             return Object.assign({}, state, {
//                 loading: true,
//                 error: null
//             });
//         case FETCH_STRAINS_SUCCESS:
//             return Object.assign({}, state, {
//                 loading: false, 
//                 strains: action.data.strains
//             });
//         case FETCH_STRAIN_FLAVORS:
//             return Object.assign({}, state, {
//                 loading: false,
//                 error: action.error.message
//             });
//             case FETCH_STRAIN_EFFECTS:
//                 return Object.assign({}, state, {
//                     loading: false,
//                     error: action.error.message
//                 });
//         case FETCH_CURRENT_STRAIN_REQUEST:
//             return Object.assign({}, state, {
//                 loading: true,
//                 feedback: null,
//                 error: null
//             });
//         case FETCH_CURRENT_STRAIN_SUCCESS:
//             return Object.assign({}, state, {
//                 loading: false,
//                 currentStrain: action.data
//             });
//         case FETCH_STRAIN_ERROR:
//             return Object.assign({}, state, {
//                 loading: false,
//                 error: action.error.message
//             });  
//             case FETCH_CURRENT_STRAIN_ERROR:
//             return Object.assign({}, state, {
//                 loading: false,
//                 error: action.error.message
//             });

//         case ADD_STRAIN_TO_CABINET_REQUEST:
//             return Object.assign({}, state, {
//                 loading: true,
//                 feedback: null,
//                 error: null
//             });
//         case ADD_STRAIN_TO_CABINET_SUCCESS:
//             return Object.assign({}, state, {
//                 loading: false
//             })
//         case ADD_STRAIN_TO_CABINET_ERROR:
//             return Object.assign({}, state, {
//                 loading: false,
//                 error: action.error.message
//             });
//         case REMOVE_STRAIN_FROM_CABINET_REQUEST:
//             return Object.assign({}, state, {
//                 loading: true,
//                 feedback: null,
//                 error: null
//             });
//         case REMOVE_STRAIN_FROM_CABINET_SUCCESS:
//             return Object.assign({}, state, {
//                 loading: false
//             });
//         case REMOVE_STRAIN_FROM_CABINET_ERROR:
//             return Object.assign({}, state, {
//                 loading: false,
//                 error: action.error.message
//             });
//         case ADD_COMMENT_TO_STRAIN_REQUEST:
//             return Object.assign({}, state, {
//                 loading: true,
//                 feedback: null,
//                 error: null
//             });
//         case ADD_COMMENT_TO_STRAIN_SUCCESS:
//             return Object.assign({}, state, {
//                 loading: false
//             });
//         case ADD_COMMENT_TO_STRAIN_ERROR:
//             return Object.assign({}, state, {
//                 loading: false,
//                 error: action.error.message
//             });
//         case REMOVE_COMMENT_FROM_STRAIN_REQUEST:
//             return Object.assign({}, state, {
//                 loading: true,
//                 feedback: null,
//                 error: null
//             })
//         case REMOVE_COMMENT_FROM_STRAIN_SUCCESS:
//             return Object.assign({}, state, {
//                 loading: false
//             });
//         case REMOVE_COMMENT_FROM_STRAIN_ERROR:
//             return Object.assign({}, state, {
//                 loading: false,
//                 error: action.error.message
//             });
//         case CREATE_STRAIN_REQUEST:
//             return Object.assign({}, state, {
//                 loading: true,
//                 feedback: null,
//                 error: null
//             });
//         case CREATE_STRAIN_SUCCESS:
//             return Object.assign({}, state, {
//                 loading: false,
//                 feedback: 'Strain added!'
//             })
//         case CREATE_STRAIN_ERROR:
//             return Object.assign({}, state, {
//                 loading: false, 
//                 error: action.error.message
//             })
//         case EDIT_STRAIN_REQUEST:
//             return Object.assign({}, state, {
//                 loading: true,
//                 feedback: null,
//                 error: null
//             });
//         case EDIT_STRAIN_SUCCESS:
//             return Object.assign({}, state, {
//                 loading: false,
//                 feedback: 'Strain updated!'
//             });
//         case EDIT_STRAIN_ERROR:
//             return Object.assign({}, state, {
//                 loading: false,
//                 error: action.error.message
//             });
//         case RESET_CURRENT_STRAIN:
//             return Object.assign({}, state, {
//                 currentStrain: null
//             });
//         case FILTER_USER_STRAINS_REQUEST:
//             return Object.assign({}, state, {
//                 loading: true,
//                 feedback: null,
//                 error: null
//             });
//         case FILTER_USER_STRAINS_SUCCESS:
//             return Object.assign({}, state, {
//                 loading: false,
//                 userStrains: action.data.strains
//             });
//         case FILTER_USER_STRAINS_ERROR:
//             return Object.assign({}, state, {
//                 loading: false,
//                 error: action.error.message
//             });
//         case CLEAR_FEEDBACK:
//             return Object.assign({}, state, {
//                 feedback: null
//             });
//         default:
//             return state;
//     }
// }