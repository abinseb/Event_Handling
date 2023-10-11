import { API_url_connection } from "../URLConnection/api_url"
import axios from "axios";

// check the system is online or offline
export const  CheckConnection =async()=>{
    try{
        const url = await API_url_connection();
        console.log(url);
        const response = await axios.get(`${url}`);
        let status = response.data.status;
        console.log("kkk",status)
        return await status;
    }
    catch(err){
        console.error(err);
        throw err;
    }
    
}