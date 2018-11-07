import {observer} from "mobx-react";
import * as React from "react";
import {AppState} from "../stores/AppState";
import DevTools from "mobx-react-devtools";

@observer
export class TimerView extends React.Component<{ appState: AppState }, {}> {
    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </button>
                <DevTools/>
            </div>
        );
    }

    onReset = () => {
        this.props.appState.resetTimer();
    }
}