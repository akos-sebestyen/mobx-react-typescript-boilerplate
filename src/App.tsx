import * as React from "react";
import {Route, Router} from "react-router";
import {About} from "./pages/about";
import {Index} from "./pages";
import {Header} from "./components/Header";

export class App extends React.Component<{history}> {
    public render() {
        return <Router history={this.props.history}>
            <div>
                <Header />

                <Route exact path="/" component={Index} />
                <Route exact path="/about" component={About} />
            </div>
        </Router>
    }
}