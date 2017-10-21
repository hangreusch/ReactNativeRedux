import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Input, CardSection, Card, Button} from './common';

class ContainerDetails extends Component {
    static navigationOptions = {
        title: 'Container Details',
    };
    render () {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="Scan/Enter Container Number"
                            value={this.props.firstName}
                            onChangeText={value => this.props.firstNameChanged({prop: 'firstName', value})}
                        />
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>

                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Order # </Text>
                        <Text style={{fontSize: 18}}>1234567890</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Customer </Text>
                        <Text style={{fontSize: 18}}>Hang Reusch</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>OSN # </Text>
                        <Text style={{fontSize: 18}}>H7890</Text>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Text>Total Containers: </Text>
                        <Text>Remaining:</Text>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Text>Not Stage</Text>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Text>C12345</Text>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Button>Cancel</Button>
                    </CardSection>
                </Card>
            </View>
        )
    }

}

export default ContainerDetails;