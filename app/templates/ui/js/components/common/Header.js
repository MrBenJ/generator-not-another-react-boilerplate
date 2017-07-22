import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

import { Title } from 'js/components/common';


// import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';

    }

    render() {
        const style = css`
            width: 100%;
            display: block;
            margin-bottom: 15px;

            h1, a {
                text-align: center;
            }
            a {
                display: inline-block;
                margin: 0 8px;
            }
        `;

        return (
            <div className={style}>
                <Title css={`text-align:center;`}>Not Another React Boilerplate...</Title>
                <Link to="/">Homepage</Link>
                <Link to="/docs">Documentation</Link>
            </div>
        );
    }
}

export default Header;
