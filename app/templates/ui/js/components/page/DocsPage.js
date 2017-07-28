import React, { Component } from 'react';

import { Title, Text, Code } from 'components/common';

class DocsPage extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'DocsPage';
    }

    render() {

        return (
            <div>
                <Title>Where to start?</Title>
                <Text>
                    Take a moment to look around and see the folder structure.<br/>
                    Don&#39;t jump into code just yet... Let&#39;s get a higher level
                    overview of what&#39;s going on with the folder structure
                </Text>
                <Code>
                    /dist                       -- Served folder for all (public) assets<br/>
                    -- index.html               -- Obligatory HTML file loading SPA bundle<br/>
                    /ui                         -- contains everything front-end related<br/>
                    -- /js                      -- folder containing components, reducers, stores, etc<br/>
                    -- -- /actions              -- Redux Actions<br/>
                    -- -- /components           -- all React Components<br/>
                    -- -- -- /common            -- Commonly used presentational components <br/>
                    -- -- -- /page              -- Page level components<br/>
                    -- -- /reducers             -- Redux Reducers <br/>
                    -- -- /sagas                -- Async Sagas used with redux-saga<br/>
                    -- -- /store                -- Redux Store <br/>
                    -- /style                   -- Folder where all the styles live <br/>
                    -- -- colorPallete.js       -- Exported colors<br/>
                    -- -- typography.js         -- Fonts<br/>
                    -- -- commonStyles.js       -- Styles for all the js/components/common components<br/>
                    -- entry.js                 -- SPA entry point<br/>
                </Code>
                <Title>npm Scripts</Title>
                <Text>You can run any of these commands on your CLI to do the following</Text>
                <Code>
                    yarn start                  -- Start the webserver in development mode (Yay Hotloading!)<br/>
                    yarn start:prod             -- Start the webserver in production mode. Use "yarn build" beforehand to build minified production assets first!<br/>
                    yarn deploy                 -- Deploys your application in production mode (NODE_ENV=production)<br/>
                    yarn test                   -- Runs the testing suite<br/>
                    yarn test:watch             -- Runs the testing suite in watch-mode. Runs tests every time you save a js file<br/>
                    yarn build                  -- Builds the production assets - run "yarn start:prod" afterwards to run the production server<br/>
                </Code>

                <Title>Import Path Aliases</Title>
                <Text>
                    You can use the following keywords to quickly navigate the filesystem:
                </Text>
                <Code>
                    js          -- {`<rootPath>/js`}<br/>
                    components  -- {`<rootPath>/js/components`}<br/>
                    page        -- {`<rootPath>/js/components/page`}<br/>
                    style       -- {`<rootPath>/style`} <br/>

                </Code>
                <Text>Instead of typing: </Text>
                <Code>import MyNewPageComponent from {`'../../js/components/page/MyNewPageComponent'`}</Code>
                <br/>
                <Text>You can do:</Text>
                <Code>import MyNewPageComponent from {`components/page/MyNewPageComponent`}</Code>
                <br/>
                <Text>If you look at the <i>components/page/DocsPage.js</i> file, you can see a little of this in action</Text>
                <Text>On Line 3 is </Text>
                <Code>import {`{ Title, Text, Code } from 'components/common'`}</Code>
                <Text>You may note that there is no <i>common.js</i> file. This is because if a folder is provided, the <i>index.js</i> in the folder is used by default</Text>
                <Text>You can also see how nice and clean everything is by using the path alias :D</Text>
                <Text>If you want to add your own, go look at <i> webpack.config.js</i> and edit the <i>alias</i> config object if you want to reorganize!</Text>

                <Title>Library Resources (Help! I am a newbie and I do not know what all/half/some/any of this stuff is!)</Title>
                <Text>Fear not... I am here to help!</Text>
                <ul>
                    <li>
                        If you are completely new to React and Redux, <strong>STOP!</strong>
                        <ul>
                            <li>
                                Go learn <a href="https://facebook.github.io/react/">React</a> by itself.
                            </li>
                            <li>
                                Do not use this boilerplate! Use <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> instead!
                            </li>
                        </ul>
                    </li>
                </ul>
                <Text>
                    Reasoning: This boilerplate is meant for large, scalable applications utilizing the most advanced and battle-tested modules in the ReactJS ecosystem.
                    It is NOT recommended to be used as a starter kit for folks just learning how to use React and Redux
                </Text>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react/">ReactJS Documentation</a>
                        <ul>
                            <li>ReactJS by itself is a view library, where components can hold {`"state"`}</li>
                        </ul>
                    </li>
                    <li>
                        <a href="http://redux.js.org/">Redux Documentation</a>
                        <ul>
                            <li>Redux forces your application to have a unidirectional data flow</li>
                            <li>Included in this boilerplate are the following libraries for Redux:
                                <ul>
                                    <li>
                                        <a href="https://github.com/reactjs/react-redux">React-Redux</a>
                                        <ul>
                                            <li>
                                                Official React Bindings that allows Redux to be used with React
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">Redux-Saga</a>
                                        <ul>
                                            <li>
                                                Prevents async side effects using ES6 Generators
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://github.com/ReactTraining/react-router">React-Router</a>
                        <ul>
                            <li>Client side routing using the HTML5 History API</li>
                            <li>
                                Included in this boilerplate are the following libraries for React-Router
                                <ul>
                                    <li>
                                        <a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux">React-Redux-Router</a>
                                    </li>
                                    <li>
                                        Fast and easy bindings to keep Redux and React-Router in sync with each other
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://expressjs.com/">Express</a>
                        <ul>
                            <li>
                                Minimalist and unopinionated Server for Node.js
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        );
    }
}

export default DocsPage;
