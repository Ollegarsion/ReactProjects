import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import OneArticle from './components/OneArticle'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/:id" component={OneArticle} />
              
            </Switch>
        </div>
    </Router>,
    document.getElementById("root")
)





