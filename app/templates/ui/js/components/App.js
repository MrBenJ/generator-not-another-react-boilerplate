import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { css } from 'emotion';

import Header from 'js/components/common/Header';
import IndexPage from 'js/components/page/IndexPage';
import DocsPage from 'js/components/page/DocsPage';

import { globalStyle } from 'style/commonStyles';
class App extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }

    render() {
        return (
            <div className={globalStyle}>
                <Header />
                <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route path="/docs" component={DocsPage} />

                </Switch>
            </div>
        );
    }
}

export default App;
