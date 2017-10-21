import {Actions} from 'react-native-router-flux';

export const selectOrder = (order) => {
    return {
        type: 'select_order',
        payload: order
    }
    //Actions.containerDetails();
}