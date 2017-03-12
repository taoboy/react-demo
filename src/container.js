import React, {Component} from 'react';
import { Router, Route, hashHistory, IndexRoute,IndexRedirect } from 'react-router';

import Head from './components/head/head';
import Nav from './components/nav/nav';
import Bar from './components/bar/demo';
import ListBanner from './components/list_banner/demo';
import Load from './components/load/demo';

export default class Container extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='app-content'>
                <Head/>
                <Router history={hashHistory}>
                  <Route path="/" component={Nav}>
                    <IndexRedirect to="/bar" />
                    <Route path="/bar" component={Bar}/>
                    <Route path="/listBanner" component={ListBanner}/>
                    <Route path="/load" component={Load}/>
                  </Route>
                </Router>
            </div>
        )
    }
}