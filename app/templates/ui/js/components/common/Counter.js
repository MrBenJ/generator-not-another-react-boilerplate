import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { css } from 'emotion';

import * as counterActions from 'js/actions/counterActions';
import * as colors from 'style/colorPalette';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Counter';
    }

    render() {
        const { value, actions }  = this.props;
        const counterClass = css`
            .counter {
                font-size: 26px;
                color: ${colors.primary};
            }
        `;

        // const delay = this.props.delay * 1000;
        return (
            <div className={counterClass}>
                <p className="counter">{value}</p>
                <button onClick={actions.increment}>
                    Increment
                </button>
                <button onClick={actions.decrement}>
                    Decrement
                </button>
                <button onClick={actions.reset}>
                    Reset
                </button>
            </div>
        )
    }
}

Counter.defaultProps = {
    delay: 1,
    value: 0
};

Counter.propTypes = {
    delay: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    actions: PropTypes.object,
    onDecrement: PropTypes.func,
    onIncrementAsync: PropTypes.func
};

function mapStateToProps(state) {
    return {
        value: state.counter.value
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
