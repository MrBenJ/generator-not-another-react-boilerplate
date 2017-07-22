import { css } from 'emotion';
import * as colors from 'style/colorPalette';
import * as fonts from 'style/typography';

export const globalStyle = css`
    font-family: ${fonts.secondary};
    font-size: 14px;
    color: black;

    a, a:visited {
        font-size: 16px;
        color: black;
        text-decoration: none;
    }

    a:hover {
        color: ${colors.primary};
    }
`

export const TitleStyle = css`
    font-family: ${fonts.primary};
    font-size: 24px;
    color: ${colors.primary};
`;

export const TextStyle = css`
    font-family: ${fonts.secondary};
    font-size: 14px;
    color: black;
`;

export const CodeStyle = css`
    background-color: #ffffe0;
    font-family: ${fonts.code};
    font-size: 14px;

`;
