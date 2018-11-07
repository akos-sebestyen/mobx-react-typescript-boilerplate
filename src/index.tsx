import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {action, configure, observable, runInAction} from 'mobx';
import {AppState} from "./stores/AppState";
import {TimerView} from "./components/TimerView";
import createBrowserHistory from "history/createBrowserHistory";
import {App} from "./App";

configure({enforceActions: "observed"});

const appState = new AppState();

const history = createBrowserHistory();

ReactDOM.render(<App history={history} />, document.getElementById('root'));

