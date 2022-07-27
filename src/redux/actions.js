export const SET_USER_Email="SET_USER_Email";
export const SET_USER_PASSWORD="SET_USER_PASSWORD";
export const GET_USER_UID="GET_USER_UID";
export const GET_TOKEN="GET_TOKEN";
export const REMOVE_TOKEN="REMOVE_TOKEN";
export const USER_NAME="USER_NAME";
export const PROFILE_NAME = "PROFILE_NAME"
export const IMAGE_PROFILE = 'IMAGE_PROFILE'

export const getUserUid = uid => dispatch => {
    dispatch({
        type:GET_USER_UID,
        payload:uid,
    })
}
export const getImageProfile = imageProfile => dispatch => {
    dispatch({
        type:IMAGE_PROFILE,
        payload:imageProfile,
    })
}

export const setEmail= email => dispatch => {

    dispatch({
        type:SET_USER_Email,
        payload:email,
    })
};

export const setPassword = password => dispatch => {
    dispatch({
        type:SET_USER_PASSWORD,
        payload:password,
    })
};

export const getToken=token=>dispatch=>{
    dispatch({
        type:GET_TOKEN,
        payload:token,
    })
}

export const removeToken=() =>dispatch=>{
    dispatch({
        type:REMOVE_TOKEN,

    })
}

export const getUserName = userName => dispatch => {
    dispatch({
        type:USER_NAME,
        payload:userName,
    })
}
export const getprofileName = profileName => dispatch => {
    dispatch({
        type:PROFILE_NAME,
        payload:profileName,
    })
}


