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
            console.log("401")
            localStorage.removeItem("accessToken");}
        if(!response.ok){
            return Promise.reject(json);
        }
        return json;
    }))
};


export function signup(signUpRequest){
    return request({
        url:API_BASE_URL+'/v1/auth/register',
        method:'POST',
        body:JSON.stringify(signUpRequest)
    })
};

export function login(loginRequest){
    return request({
        url:API_BASE_URL+'/v1/auth/login',
        method:'POST',
        body:JSON.stringify(loginRequest)
    })
}


/* CLIENT CONTROLLER */
export function getClient(){
    return request({
        url:API_BASE_URL+'/v1/client',
        method:'GET',
    })
}

export function getClientByID(id){
    return request({
        url:API_BASE_URL+`/v1/client/${id}`,
        method:'GET'
    })
}

/*COACH CONTROLLER*/ 
export function addCoachDetails(coachDetails){
    return request({
        url:API_BASE_URL+`/v1/user/coach/details`,
        method:'PUT',
        body:JSON.stringify(coachDetails)
    })
}

export function getCoachSchedule(date){
    return request({
        url:API_BASE_URL+`/v1/user/coach/schedule`,
        method:'GET',
        body:JSON.stringify(date)
    })
}

export function sessionSchedule(sessionData){
    return request({
        url:API_BASE_URL+`/v1/user/coach/schedule`,
        method:'POST',
        body:JSON.stringify(sessionData)
    })
}

/*User Controller*/
export function getPending(){
    return request({
        url:API_BASE_URL+`/v1/user/connect/pending`,
        method:'GET'
    })
}

export function getUserDataByID(id){
    return request({
        url:API_BASE_URL+`/v1/user/${id}`,
        method:'GET'
    })
}

export function sendRequest(targetUserId){
    return request({
        url:API_BASE_URL+`/v1/user/connect/${targetUserId}`,
        method:'POST',
        body:JSON.stringify(targetUserId)
    })
}

export function answerRequest(requestId, answer){
    return request({
        url:API_BASE_URL+`/v1/user/connect/pending/${requestId}/?requestAnswer=${answer}`,
        method:'POST',
       // body:JSON.stringify(answer)
    })
}

export function getCoachByName(name){
    return request({
        url:API_BASE_URL+`/v1/user/coach/search?name=${name}`,
        method:'GET',
    })
}

export function getCoachByID(id){
    return request({
        url:API_BASE_URL+`/v1/user/${id}`,
        method:'GET'
    })
}

export function getStatsByID(id, date){
    return request({
        url:API_BASE_URL+`/v1/statistics/${id}?date=${date}`,
        method:'GET',
    })
}

export function postStatsbyID(clientId, stats){
    return request({
        url:API_BASE_URL+`/v1/statistics/${clientId}`,
        method:'POST',
        body:JSON.stringify(stats)
    })
}