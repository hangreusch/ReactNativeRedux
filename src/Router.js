import React from 'react';
import {View, Text} from 'react-native';
//import {Scene, Router} from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import SearchForm from './components/SearchForm';
import ContainerDetails from './components/ContainerDetails';
import Order from './components/Order';

const RouterComponent = StackNavigator({
    /*ContainerDetailsScreen: { screen: ContainerDetails },*/
    SearchFormScreen: { screen: SearchForm },
    ContainerDetailsScreen: { screen: ContainerDetails }
});
/*const RouterComponent = () => {
    return (
        <Router>
            <Scene key="search">
                <Scene key="searchOrder" component={SearchForm} title="Pickup"
                       navigationBarStyle={{backgroundColor: '#004c91', color: '#fff', borderColor: '#00315e'}}/>
                <Scene key="containerDetails" component={ContainerDetails} title="Container Details"
                       navigationBarStyle={{backgroundColor: '#004c91', color: '#fff', borderColor: '#00315e'}} initial/>

            </Scene>
            {/!*<Scene key="container" initial>
                <Scene key="containerDetails" component={ContainerDetails} title="Container Details"
                       navigationBarStyle={{backgroundColor: '#004c91', color: '#fff', borderColor: '#00315e'}}/>

            </Scene>*!/}

        </Router>
        /!*<Router>
            {/!*<Scene key="searchOrder" component={SearchForm} title="Pickup"/>*!/}
            {/!*<Scene key="containerdetails" component={ContainerDetails} title="Container Details"/>*!/}
        </Router>*!/
    );
};*/

export default RouterComponent;