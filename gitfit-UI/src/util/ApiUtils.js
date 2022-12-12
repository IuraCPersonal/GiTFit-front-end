import {API_BASE_URL,ACCESS_TOKEN} from '../constants';


export const request = options=>{


    const headers = new Headers({
        'Content-Type':'application/json'
    });

    if(localStorage.getItem(ACCESS_TOKEN)){
        headers.append('Authorization','Bearer '+localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers:headers};
    //Create a single object for comodity
    options = Object.assign({},defaults,options);

    return fetch(options.url,options).then(response=>response.json().then(json=>{
        if(response.status==401){
            localStorage.removeItem("accessToken");}
        if(!response.ok){
            return Promise.reject(json);
        }
        return json;
    }))
};


export function signup(signUpRequest){
    return request({
        url:API_BASE_URL+'/auth/register',
        method:'POST',
        body:JSON.stringify(signUpRequest)
    })
};

export function login(loginRequest){
    return request({
        url:API_BASE_URL+'/auth/login',
        method:'POST',
        body:JSON.stringify(loginRequest)
    })
}
