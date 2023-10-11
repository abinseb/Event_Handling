import { API_url_connection } from "../URLConnection/api_url";
import axios from "axios";

export const UserDataByUserId =async(userId)=>{
try{
    const url = await API_url_connection();
    console.log(url);
    const response = await axios.get(`${url}/user/${userId}`)
    console.log("kkkk",response.data);
    let userData = response.data;
    return userData;
}
catch(err){
    alert("User Not Registered");
    console.error(err);
    throw err;
}
}