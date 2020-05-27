import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Userpage from './pages/Userpage';
import Layout from './components/Layout';
import './scss/app.scss';

const App = () => {
    return (
        <HashRouter> 
            <Layout>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/user/:username/:repository?" component={Userpage} />
            </Layout>
        </HashRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));