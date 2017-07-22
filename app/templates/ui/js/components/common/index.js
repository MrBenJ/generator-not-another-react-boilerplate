import React from 'react';
import PropTypes from 'prop-types';

import * as commonStyles from 'style/commonStyles';

export function Title({children}) {
    return <h1 className={commonStyles.TitleStyle}>{children}</h1>
}

Title.propTypes = { children: PropTypes.any.isRequired };

export function Text({children}) {
    return <p className={commonStyles.TextStyle}>{children}</p>
}

Text.propTypes = {
    children: PropTypes.any.isRequired
};

export function Code({children}) {
    return (
        <pre className={commonStyles.CodeStyle}>
            <code>{children}</code>
        </pre>
    );
}
Code.propTypes = {
    children: PropTypes.any.isRequired
};

