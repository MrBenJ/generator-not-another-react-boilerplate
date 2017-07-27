import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { css } from 'emotion';

import * as authActions from 'js/actions/authActions';
import { Text } from 'components/common';

class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'LoginBox';
        this.state = {
            username: '',
            password: ''
        };

        this.submitLogin = this.submitLogin.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    submitLogin(e) {
        e.preventDefault();
        this.props.actions.login(this.state.username, this.state.password);

    }

    onChange(evt) {
        const { value, name } = evt.target;
        let state = {};
        state[name] = value;
        this.setState(state);
    }



    render() {
        const csrfClass = css`
            display: none;
        `

        const content = this.props.user ?
            (
                <div>
                    <Text>Welcome {this.props.user}</Text>
                    <button onClick={this.props.actions.logout}>Logout</button>
                </div>
            ) :
            (
                <form onSubmit={this.submitLogin}>
                    <input
                        className={csrfClass}
                        name="csrfToken"
                        defaultValue={this.props.csrfToken}
                    />
                    <Text>Username</Text>
                    <input
                        type="text"
                        name="username"
                        onChange={this.onChange}
                        value={this.state.username} />
                    <Text>Password</Text>
                    <input
                        type="password"
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password} />
                    <br/>
                    <button type="submit">Login</button>
                    {this.props.errors.map( (error, idx) => {
                        return <Text key={idx}>{error}</Text> ;
                    })}
                </form>
            )
        return (
            <div>
                {content}
            </div>
        );
    }
}

LoginBox.propTypes = {
    endpoint: PropTypes.string.isRequired,
    csrfToken: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    user: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    errors: PropTypes.array
};

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        errors: state.auth.errors,

    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);
