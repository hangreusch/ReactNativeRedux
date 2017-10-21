/**
 * Created by hnguye5 on 10/16/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    searchOptionChange,
    firstNameChanged,
    lastNameChanged,
    orderNumberChanged,
    loadNumberChanged,
    customerNumberChanged,
    asnNumberChanged,
    emailChanged,
    phoneChanged
} from '../actions/SearchActions'; //weird
import {Text, View, Picker, ListView, TouchableOpacity} from 'react-native';
import axios from 'axios';
//import { StackNavigator } from 'react-navigation';
import {Input, CardSection, Card, Button} from './common';
import {selectOrder} from '../actions/SelectOrderAction';
import ContainerDetails from './ContainerDetails';

class Order extends Component {

    /*static navigationOptions = {
        title: 'Welcome',
    };*/

//const Order = ({order}) => {

    expand () {
        const {expanded} = this.props;
        console.log(expanded);
        if (expanded) {
            return (
                <Text>hey</Text>
            )
        }
    }
    //console.log(order);
    render () {
        //const { navigate } = this.props.navigation;
        const {order} = this.props;
        return (


                <View>
                    <Card>
                        <View style={{backgroundColor: '#fff'}}>
                            <View style={{flex: 1, flexDirection: 'row', padding: 5}}>
                                <Text style={{fontWeight: 'bold', fontSize: 18}}>Order # </Text>
                                <Text style={{fontSize: 18}}>{order.custOrderNbr}</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', padding: 5}}>
                                <Text style={{fontWeight: 'bold', fontSize: 18}}>Customer </Text>
                                <Text style={{fontSize: 18}}>{order.custLName} {order.custFName}</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', padding: 5}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Phone </Text>
                                    <Text style={{fontSize: 18}}>{order.custPhone}</Text>
                                </View>
                                <Text style={{
                                    alignSelf: 'flex-end',
                                    fontSize: 18
                                }}>{order.fulfillOrders[0].orderStatus.trim()}</Text>
                            </View>
                        </View>
                    </Card>
                    <View>{this.expand()}</View>
                </View>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectOrder === ownProps.order;
    return {expanded};
}
export default connect (mapStateToProps, {selectOrder}) (Order);
//export default Order;