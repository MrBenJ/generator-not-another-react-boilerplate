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
                    dist                       -- Served folder for all (public) assets<br/>
                    -- index.html              -- Obligatory HTML file loading SPA bundle<br/>
                    ui                         -- contains everything front-end related<br/>
                    -- js                      -- folder containing components, reducers, stores, etc<br/>
                    -- -- actions              -- Redux Actions<br/>
                    -- -- components           -- all React Components<br/>
                    -- -- -- common            -- Commonly used presentational components <br/>
                    -- -- -- page              -- Page level components<br/>
                    -- -- reducers             -- Redux Reducers <br/>
                    -- -- store                -- Redux Store <br/>
                    -- style                   -- Folder where all the styles live <br/>
                    -- -- colorPallete         -- Exported colors<br/>
                    -- -- typography           -- Fonts<br/>
                    -- -- commonStyles         -- Styles for all the js/components/common components<br/>
                    -- entry.js                -- SPA entry point<br/>
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
                <Text>You may note that there is no <i>common.js</i> file. This is because if a folder is provided, the <i>index.js</i> in the folder is provided</Text>
                <Text>You can also see how nice and clean everything is by using the path alias :D</Text>
                <Text>If you want to add your own, go look at <i> webpack.config.js</i> and edit the <i>alias</i> config object if you want to reorganize!</Text>

                <Title>Library Resources</Title>
                <Text> Help! I am a newbie and I do not know what half of this stuff is!</Text>

            </div>
        );
    }
}

export default DocsPage;
