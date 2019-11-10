import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import Note from './Note'
//import Toggle from './Toggle'
import Board from './Board'
import NotFound from "./NotFound";
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker'
import { createStore } from "redux";
import notesApp from "./reducers";
import { Provider } from "react-redux";

let store = createStore(notesApp);

//ReactDOM.render(<Note />, document.getElementById('root'));
//ReactDOM.render(<Toggle />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
            {/* <Board count={10} /> */}
            <Route exact path="/" component={Board} />
            <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
