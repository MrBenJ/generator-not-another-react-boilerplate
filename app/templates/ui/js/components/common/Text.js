import React from 'react';
import PropTypes from 'prop-types';

import { TextStyle } from 'commonStyles';

export default function Text({children}) {
    return <p className={TextStyle}>{children}</p>
}

Text.propTypes = {
    children: PropTypes.any.isRequired
};
