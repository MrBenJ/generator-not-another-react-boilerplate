import React, { Component } from 'react';
import { Title, Text } from 'components/common';
import Counter from 'components/common/Counter';
import LoginBox from 'components/common/LoginBox';

class ReduxPage extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'ReduxPage';

    }

    render() {

        return (
            <div>
                <Title>Demonstration of Redux powered components</Title>
                <Text>
                    A short sample of some (extremely) basic Redux components. You can find the unit tests for these components in
                    <i> __tests__/components/</i>
                </Text>
                <Title>Counter</Title>
                <Text>Obligatory (kinda stupid) Counter increment/decrement component</Text>
                <Counter delay={1} />
                <Title>Login Box</Title>
                <Text>
                    A username and password combo that works here is<br/>
                    admin/password <br/>
                    <br/>
                    Try entering anything else and see what happens
                </Text>
                <LoginBox
                    csrfToken="12345"
                    endpoint="/api/auth"
                />
            </div>
        )
    }
}
export default ReduxPage;
