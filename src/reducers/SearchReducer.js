import {
    SEARCH_OPTION_CHANGED,
    FIRST_NAME_CHANGED,
    LAST_NAME_CHANGED,
    ORDER_NUMBER_CHANGED,
    LOAD_NUMBER_CHANGED,
    CUSTOMER_NUMBER_CHANGED,
    ASN_NUMBER_CHANGED,
    PHONE_CHANGED,
    EMAIL_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    firstName: '',
    lastName:'',
    orderNumber: '',
    loadNumber: '',
    customerNumber: '',
    asnNumber: '',
    phone: '',
    email: '',
    selectOption: 'Name'
};

const BLANK_STATE = {
    firstName: '',
    lastName:'',
    orderNumber: '',
    loadNumber: '',
    customerNumber: '',
    asnNumber: '',
    phone: '',
    email: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_OPTION_CHANGED:
            return {...state, [action.payload.prop]: action.payload.value};
        case FIRST_NAME_CHANGED:
            return {...state, firstName: action.payload, orderNumber: '', loadNumber: '', customerNumber: '', asnNumber: '', phone: '', email: ''};
        case LAST_NAME_CHANGED:
            return {...state, lastName: action.payload, orderNumber: '', loadNumber: '', customerNumber: '', asnNumber: '', phone: '', email: ''};
        case ORDER_NUMBER_CHANGED:
            return {...state, ...BLANK_STATE, orderNumber: action.payload};
        case LOAD_NUMBER_CHANGED:
            return {...state, ...BLANK_STATE, loadNumber: action.payload};
        case CUSTOMER_NUMBER_CHANGED:
            return {...state, ...BLANK_STATE, customerNumber: action.payload};
        case ASN_NUMBER_CHANGED:
            return {...state, ...BLANK_STATE, asnNumber: action.payload};
        case PHONE_CHANGED:
            return {...state, ...BLANK_STATE, phone: action.payload};
        case EMAIL_CHANGED:
            return {...state, ...BLANK_STATE, email: action.payload};
        default:
            return state;
    }
}

