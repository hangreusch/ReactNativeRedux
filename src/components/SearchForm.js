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
import {selectOrder} from '../actions/SelectOrderAction';
import {Text, View, Picker, ListView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {Input, CardSection, Card, Button} from './common';
import Order from './Order';
import ContainerDetails from './ContainerDetails';



//import searchSettingsData from './test';

class SearchForm extends Component {
    static navigationOptions = {
        title: 'Pickup',
    };

    state = {
        searchSettings: [],
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        })
    };
    params = {
        searchMethod: "",
        searchParam: ""
    };
    /*dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
    });*/
    componentWillMount () {
        axios.get('http://fulfillment-node-dispensing-manager/resource/getsettings?countryCode=US&nodeId=5505&userId=ajsnow',
            {
                headers: {"Accept-Language": "en-US"}
            })
            .then(response => {
                    this.setState({
                        searchSettings: response.data.searchSettings

                    });
                console.log("inthen"+this.state.searchSettings);

            });
        console.log("willmount"+this.state.searchSettings);
    }

    renderSearchOptions() {
        //return searchSettingsData.map(searchSetting =>
        console.log("render"+ this.state.searchSettings);
        this.params = this.setSearchParams();
        return this.state.searchSettings.map(searchSetting =>
            <Picker.Item key={searchSetting.key} label={searchSetting.key} value={searchSetting.key}/>
        )

    }

    renderInputBox () {
        if (this.props.selectOption === 'Name') {
            return (
                <CardSection>
                    <Input
                        placeholder="First Name"
                        value={this.props.firstName}
                        onChangeText={value => this.props.firstNameChanged({prop: 'firstName', value})}
                    />
                    <Input
                    placeholder="Last Name"
                    value={this.props.lastName}
                    onChangeText={value => this.props.lastNameChanged({prop: 'lastName', value})}
                    />
                </CardSection>
            )
        }
        else if (this.props.selectOption === 'Order Number') {
            return (
                <CardSection>
                    <Input
                        placeholder="Order Number"
                        value={this.props.orderNumber}
                        onChangeText={value => this.props.orderNumberChanged({prop: 'orderNumber', value})}
                    />
                </CardSection>
            )
        }
        else if (this.props.selectOption === 'Load Number') {
            return (
                <CardSection>
                    <Input
                        placeholder="Load Number"
                        value={this.props.loadNumber}
                        onChangeText={value => this.props.loadNumberChanged({prop: 'loadNumber', value})}
                    />
                </CardSection>
            )
        }
        else if (this.props.selectOption === 'Customer Number') {
            return (
                <CardSection>
                    <Input
                        placeholder="Customer Number"
                        value={this.props.customerNumber}
                        onChangeText={value => this.props.customerNumberChanged({prop: 'customerNumber', value})}
                    />
                </CardSection>
            )
        }
        else if (this.props.selectOption === 'ASN Number') {
            return (
                <CardSection>
                    <Input
                        placeholder="ASN Number"
                        value={this.props.asnNumber}
                        onChangeText={value => this.props.asnNumberChanged({prop: 'asnNumber', value})}
                    />
                </CardSection>
            )
        }
        else if (this.props.selectOption === 'Email') {
            return (
                <CardSection>
                    <Input
                        placeholder="Email"
                        value={this.props.email}
                        onChangeText={value => this.props.emailChanged({prop: 'email', value})}
                    />
                </CardSection>
            )
        }
        else if (this.props.selectOption === 'Phone') {
            return (
                <CardSection>
                    <Input
                        placeholder="Phone"
                        value={this.props.phone}
                        onChangeText={value => this.props.phoneChanged({prop: 'phone', value})}
                    />
                </CardSection>
            )
        }
    }

    onSearchButtonPress () {
        axios.get('http://fulfillment-node-dispensing-manager/resource/dispense/search/getorders?countryCode=US&nodeId=5505&userId=ajsnow',
            {
                headers: {"Accept-Language": "en-US"},
                params: this.params
            })
            .then(response => {
                console.log(response);
                if (response.data.orders) {
                    this.setState({
                        //dataSource: response.data.orders
                        dataSource: this.state.dataSource.cloneWithRows(response.data.orders)
                    });
                } else {
                    console.log(response);
                    this.setState({
                        //dataSource: response.data.orders
                        dataSource: this.state.dataSource.cloneWithRows(response.data)
                    });
                }
                console.log(this.state.dataSource);
                //dataSource = this.state.dataSource.cloneWithRows(response.data.orders);
            })
            .catch (function (error) {
                console.log('error');
                console.log(this.state);
                /*this.setState ({
                    //dataSource: response.data.orders
                    dataSource: this.state.dataSource.cloneWithRows([])
                });*/
                /*console.log(error);
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }*/
                //console.log(error);
            });
    }

    renderSearchButton () {
        return (
            <Button onPress={this.onSearchButtonPress.bind(this)}>
                Search
            </Button>
        )
    }

    /*selectOrder () {
        return (
            <View>
                <Text>hey</Text>
            </View>
        //console.log('order click');
        )

    }*/

    renderOrderList (order) { //render ListView
        //const { navigate } = this.props.navigation;
        /*return (
            <TouchableOpacity onPress={() => this.goTo() }>
                <Order order={order}/>
            </TouchableOpacity>
        )*/

        return (
            <TouchableOpacity onPress={this.goTo.bind(this)}>
                <Order order={order}/>
            </TouchableOpacity>
        )
    }

    /*goTo () {
        this.props.navigation.navigate('ContainerDetailsScreen')
    }*/

    goTo = () => {
        this.props.navigation.navigate('ContainerDetailsScreen')
    }

    setSearchParams () {
        /*const params = {
         searchMethod: "",
         searchParam: ""
         };*/

        //loop, searchMethod = searchSetting.value
        //searchParams = enter
        let index = 0;
        console.log("setpara" + this.state.searchSettings);

        if (this.state.searchSettings.length !== 0) {
            for (let i = 0; i < this.state.searchSettings.length; i++) {
                if (this.state.searchSettings[i].key === this.props.selectOption) {
                    index = i;
                    break;
                }
            }


            if (this.state.searchSettings[index].key !== 'Name') {
                this.params.searchMethod = this.state.searchSettings[index].value;
                if (this.state.searchSettings[index].key === 'Order Number') {
                    this.params.searchParam = this.props.orderNumber.value;
                } else if (this.state.searchSettings[index].key === 'Load Number') {
                    this.params.searchParam = this.props.loadNumber.value;
                } else if (this.state.searchSettings[index].key === 'Customer Number') {
                    this.params.searchParam = this.props.customerNumber.value;
                } else if (this.state.searchSettings[index].key === 'ASN Number') {
                    this.params.searchParam = this.props.asnNumber.value;
                } else if (this.state.searchSettings[index].key === 'Phone') {
                    this.params.searchParam = this.props.phone.value;
                } else if (this.state.searchSettings[index].key === 'Email') {
                    this.params.searchParam = this.props.email.value;
                }

            }
            else {
                let splitSearchValues = this.state.searchSettings[index].value.split(",");
                if (this.props.firstName.value && this.props.lastName.value) {
                    this.params.searchMethod = splitSearchValues[0];
                    this.params.searchParam = this.props.firstName.value + "," + this.props.lastName.value;
                }
                else if (this.props.firstName.value) {
                    this.params.searchMethod = splitSearchValues[1];
                    this.params.searchParam = this.props.firstName.value;
                } else if (this.props.lastName.value) {
                    this.params.searchMethod = splitSearchValues[2];
                    this.params.searchParam = this.props.lastName.value;
                }
            }
        }
        console.log(this.params);
        return this.params;
    }

    render () {
        console.log("hey render now");
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Card>
                    {this.renderInputBox()}
                </Card>
                <Card>
                    <CardSection>
                        {this.renderSearchButton()}
                    </CardSection>
                </Card>

                <Card>
                    <CardSection style={{ flexDirection: 'column' }}>
                        <Picker
                            selectedValue={this.props.selectOption}
                            onValueChange={value => this.props.searchOptionChange({prop: 'selectOption', value})}
                        >
                            {this.renderSearchOptions()}
                        </Picker>
                    </CardSection>
                </Card>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderOrderList.bind(this)}
                />
                {/*<View>
                    {this.renderRow(this.state.dataSource.getRowCount())}
                </View>*/}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const {firstName, lastName, orderNumber, loadNumber, customerNumber, asnNumber, phone, email, selectOption} = state.search;
    return  {firstName, lastName, orderNumber, loadNumber, customerNumber, asnNumber, phone, email, selectOption};
}

export default connect (mapStateToProps, {
    searchOptionChange, firstNameChanged, lastNameChanged, orderNumberChanged, loadNumberChanged, customerNumberChanged, asnNumberChanged, emailChanged, phoneChanged}) (SearchForm);