import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { css } from 'emotion';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import IndexPage from 'components/page/IndexPage';
import DocsPage from 'components/page/DocsPage';
import ReduxPage from 'components/page/ReduxPage';

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
                    <Route path="/redux" component={ReduxPage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
