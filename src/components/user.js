import React, { Component } from 'react';
import UserTemplate from './user_template';


class User extends Component {

    state = {
        name: 'Works',
        lastname:'Jones',
        age:25,
        hobbies: ['jump', 'around']
    }

    render() {
        return (
            <div>
                <UserTemplate {...this.state}/>
            </div>
        );
    }
}

export default User;