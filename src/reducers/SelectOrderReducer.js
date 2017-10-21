export default (state = null, action) => {
    switch (action.type) {
        case 'select_order':
            return action.payload;
        default:
            return state;
    }
};