import $ from 'jquery';
export default class HttpService {
    constructor() { }
    static sendRequest(data,type,url) {
        const GET = "GET";
        if(type !== GET){
            return $.ajax({
                type,
                url,
                data:JSON.stringify(data),
                xhrFields: {
                withCredentials: true
                },
                contentType: "application/json; charset=utf-8"
            });
        }
        else{
            return $.ajax({
                type,
                url,
                xhrFields: {
                    withCredentials: true
                },
                contentType: "application/json; charset=utf-8"
            });
        }
    }
}