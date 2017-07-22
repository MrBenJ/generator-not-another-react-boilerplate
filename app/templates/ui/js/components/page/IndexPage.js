import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import  { Link } from 'react-router-dom';
import { Text, Title } from 'js/components/common';


class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'IndexPage';

    }

    render() {
        return (
            <div>
                <Text>Welcome to your new boilerplate!</Text>
                <Title>Everything your front end needs to get started in one shot</Title>
                <div>
                    <Text>
                        At the high level, I include the following libraries:
                    </Text>
                    <ul>
                        <li>Emotion (CSS-in-JS) styling</li>
                        <li>React</li>
                        <li>React-Router</li>
                        <li>Redux and React-Redux</li>
                        <li>Redux-Saga</li>
                        <li>Express.js</li>
                    </ul>
                </div>
                <Title>Principles</Title>
                    <Text>
                        Setting up a single page React application sucks!
                        The React Ecosystem is just asking for newcomers to get #JavascriptFatigue.
                        <ul>
                            <li>Avoid #JavascriptFatigue at all costs</li>
                            <li>Create a fun and easy system and architecture to develop on</li>
                            <li>Build modular and testable</li>
                            <li>Front-End first</li>
                            <li>Minimal Backend setup</li>
                            <li>Maximize performance</li>
                        </ul>
                    </Text>
                <Text>Organized in a styled-components-ish manner</Text>
                <Text>Hot loading enabled for development, disabled for production (for obvious reasons)</Text>
                <Text>
                    The backend is set up in a highly minimalistic fashion. As many front end developers
                    enjoy working in the React ecosystem, the Single Page App architecture has been in a
                    loose sense, {`"standardized"`}. If I was starting a project from scratch, this is the exact
                     front end setup I would personally use.
                </Text>
                <Title>Where to start?</Title>
                <Text>
                    For starters, you can check out the <Link to='/docs'>Documentation</Link> to get you started :D
                </Text>
                <Title>Hey! I want to help out!</Title>
                <Text>Great! I love contributions! Make a fork, then make a pull request!</Text>
                <br/>
                <Text>Created by <a target="_blank" rel="noreferrer noopener" href="https://www.github.com/mrbenj">@MrBenJ</a></Text>
            </div>
        );
    }
}

export default IndexPage;
