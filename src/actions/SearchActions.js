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
} from './types';

export const searchOptionChange = ({prop, value}) => {
    return {
        type: SEARCH_OPTION_CHANGED,
        payload: {prop, value}
    };
};

export const firstNameChanged = (text) => {
    return {
        type: FIRST_NAME_CHANGED,
        payload: text
    };
};

export const lastNameChanged = (text) => {
    return {
        type: LAST_NAME_CHANGED,
        payload: text
    };
};

export const orderNumberChanged = (text) => {
    return {
        type: ORDER_NUMBER_CHANGED,
        payload: text
    };
};

export const loadNumberChanged = (text) => {
    return {
        type: LOAD_NUMBER_CHANGED,
        payload: text
    };
};

export const customerNumberChanged = (text) => {
    return {
        type: CUSTOMER_NUMBER_CHANGED,
        payload: text
    };
};

export const asnNumberChanged = (text) => {
    return {
        type: ASN_NUMBER_CHANGED,
        payload: text
    };
};

export const phoneChanged = (text) => {
    return {
        type: PHONE_CHANGED,
        payload: text
    };
};

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};