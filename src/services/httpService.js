import $ from 'jquery';
export default class HttpService {
    constructor() { }
    static sendRequest(data,type,url) {
        window.aaa = $;
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
}