export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const loginSuccess =(user)=>({
    type:LOGIN_SUCCESS,
    payload:user,
});

export const logoutSuccess =()=>({
    type:LOGOUT_SUCCESS,
});
 
export const loginUser =(userData)=>{
    return(dispatch , getState)=>{
        dispatch(loginSuccess(userData));
    }
}