// import jQuery from 'jquery'
// const $ = jQuery;

// const STATIC_URL = 'https://jsonplaceholder.typicode.com/posts';
// export const RECEIVE_DATA = "RECEIVE_DATA";
// export const receive = (data) => {
//     type: RECEIVE_DATA,
//     data
// } 

// export const loadData = (id) => {
//     return {
//         type:'LOAD_DATA',
//         id:id
//     }
// }

// export const getData = (id) => {
//     return function(dispatch){
//         dispatch({type:'START' , id});
//         $.ajax(STATIC_URL).then((data) => dispatch({type:'GET_DATA',data}))
        
//     }
// }