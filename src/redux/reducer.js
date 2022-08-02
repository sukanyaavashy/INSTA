import { SET_USER_PASSWORD,SET_USER_Email,GET_USER_UID,GET_TOKEN,REMOVE_TOKEN, USER_NAME,PROFILE_NAME , IMAGE_PROFILE} from "./actions";


const initialState={
    email:"",
    password:"",
    uid:"",
    token: "",
    profileName: "Smiley",
    userName:'Princess Land',
    imageProfile:'https://i0.wp.com/bloggers.society19.com/wp-content/uploads/2015/11/water-40.jpg?resize=563%2C755&ssl=1'
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
        case PROFILE_NAME:
            return {...state,profileName:action.payload};
        case USER_NAME:
            return {...state,userName:action.payload};
        case IMAGE_PROFILE:
            return {...state,imageProfile:action.payload};
        default:
            return state;
    }

}

export default userReducer;