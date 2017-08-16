import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Title, Text } from 'components/common';

import * as heroDataActions from 'js/actions/heroDataActions';

class FetchDataDemo extends React.Component {

    render() {

        const {dataActions, dataValue, isLoggedIn} = this.props;

        /**
         * @method loadApiCall
         * @param {Object} props - dataValue will be passed as an argument.
         * @requires {dataValue} - Will be based on returned data upon API call.
         * @return {Object} - Will be returned as jsx elements representing the loaded elements upon fetch request
         * if the user has logged in successfully, otherwise the user won't be able to see the loaded data.
         */

        const loadApiCall = (props) => {
            if (isLoggedIn && dataValue) {
                return props.map((lists, idx) => {
                    return (
                        <ul key={idx}>
                            <li>{lists.firstName}</li>
                            <li>{lists.lastName}</li>
                            <li>{lists.alias}</li>
                        </ul>
                    );
                });
            } else {
                return (
                    <p>You must be logged in to see a working example of Redux-Saga</p>
                );
            }
        }

        return (
            <div>
                <Title>Load JSON File Using Redux-Saga</Title>
                <Text>An easy example to fetch an API call using Redux-Saga</Text>
                <button onClick={dataActions.loadHeroData}>Load Hero Data</button>
                {loadApiCall(dataValue)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dataValue: state.heroData.dataValue,
        isLoggedIn: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dataActions: bindActionCreators(heroDataActions, dispatch)
    }
}


//Need to check if propsTypes are required or not.
FetchDataDemo.propTypes = {
    dataActions: PropTypes.object,
    dataOnload: PropTypes.func,
    dataValue: PropTypes.array,
    isLoggedIn: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchDataDemo);
