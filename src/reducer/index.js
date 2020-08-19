const initstate = {
    count: 0
}

exports.reducer = (state = initstate, action) => {

    console.log('reducer', state, action)
    switch(action.type){
        case 'plus':
        return {count: state.count+1};
        case 'kk': return {
            count: (state.count==0? state.count:state.count-1)
        };

        default: return state;
    }
    
}