import { SET_USER_PASSWORD,SET_USER_Email,GET_USER_UID,GET_TOKEN,REMOVE_TOKEN, USER_NAME} from "./actions";


const initialState={
    email:"",
    password:"",
    uid:"",
    token: "",
    userName:'',
}

function userReducer(state=initialState,action){
    switch(action.type){
        case SET_USER_Email:
            return {...state,email:action.payload};
        case SET_USER_PASSWORD:
            return {...state,password:action.payload};
        case GET_USER_UID:
            return {...state,uid:action.payload}
        case GET_TOKEN:
            return{...state,token:action.payload};
        case REMOVE_TOKEN:
            return{...state,token:action.payload}
        case USER_NAME:
            return {...state,userName:action.payload};
        default:
            return state;
    }

}

export default userReducer;