import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { css } from 'emotion';

import { Text } from 'components/common';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Footer';

    }

    render() {
        const footerClass = css`
            margin-top: 20px;
        `;
        return (
            <footer className={footerClass}>
                <Text>
                    Created by <a target="_blank" rel="noreferrer noopener" href="https://www.github.com/mrbenj">@MrBenJ</a>
                </Text>
            </footer>
        );
    }
}
export default Footer;
