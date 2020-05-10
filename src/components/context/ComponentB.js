import React from 'react';

import { UserConsumer } from './userContext';

class ComponentB extends React.Component {
    render() {
        return (
            <UserConsumer>
                {
                    username => <div> hello {username}</div>
                }
            </UserConsumer>
        )
    };
}

export default ComponentB