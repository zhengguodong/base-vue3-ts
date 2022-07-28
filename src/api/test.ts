import axios from "../utils/http"
export const test=(params:object)=>{
    return axios({
        url:'',
        method:'post',
        data:params
    })
}
