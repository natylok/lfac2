const logoReducer = (state,action) => {
    if(!state){
        state = {showLoadingIcon:false,data:{}};
    }
    switch(action.type){
        case 'GET_DATA':
            console.log('WORKS');
            let a = Object.assign({}, state, { data: action.data });
            return a;
        case 'RECEIVE_DATA':
            return Object.assign({},state,{data:action.data});
        case 'START':
            console.log('this is Id' ,action.id);
            return state;
        default:
            return state;
    } 
}

export default logoReducer