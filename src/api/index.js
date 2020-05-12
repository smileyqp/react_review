import base from './base'
import {httpGet,httpPost} from '../utils/http'


const api = {
    getChengpin(){
        return httpGet(base.ownUrl+base.chengpin)
    },
    getLogin(params){
        return httpPost(base.ownUrl+base.login,params)
    }
}

export default api;





